import React from 'react';
import { StyleSheet, Text, View,StatusBar,Platform} from 'react-native';
import {createStackNavigator, createAppContainer, createDrawerNavigator  } from 'react-navigation';
 
import IntroScreen from './app/screens/Intro'; 
import SigninScreen  from './app/screens/Signin'; 
import SignupScreen  from './app/screens/Signup'; 
import DashboardScreen  from './app/screens/Dashboard'; 
import SuccessScreen  from './app/screens/SuccessScreen'; 

 
   
const AppNavigator = createStackNavigator({
   

  IntroScreen: {
    screen: IntroScreen,
    navigationOptions: {
      title: "",
      header: null, 
      navigationBar: null
    }, 
  },  

  SuccessScreen: {
    screen: SuccessScreen,
    navigationOptions: {
      title: "",
      header: null, 
      navigationBar: null
    }, 
  },  
 

  SigninScreen: {
    screen: SigninScreen,
    navigationOptions: {
      title: "",
      header: null, 
      navigationBar: null
    }, 
  },  

  SignupScreen: {
    screen: SignupScreen,
    navigationOptions: {
      title: "",
      header: null, 
      navigationBar: null
    }, 
  },  
 
 
  DashboardScreen: {
    screen: DashboardScreen,
    navigationOptions: {
      title: "",
      header: null, 
      navigationBar: null
    }, 
  },

 
    
    transitionConfig: () => ({
        transitionSpec: {
          duration: 1400,
          easing: Easing.out(Easing.poly(4)),
          timing: Animated.timing,
        },
        screenInterpolator: sceneProps => {
          const { layout, position, scene } = sceneProps;
          const { index } = scene;

          const height = layout.initHeight;
          const translateY = position.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [height, 0, -height],
          });

          const opacity = position.interpolate({
            inputRange: [index - 1, index - 0.99, index],
            outputRange: [0, 1, 1],
          });

          return { opacity, transform: [{ translateY }] };
        },
      }),
    
});



const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {

    StatusBar.setBarStyle("light-content", true);

    if (Platform.OS === "android") {
      StatusBar.setBackgroundColor("rgb(64,25,108)", true);
      StatusBar.setTranslucent(true);
    }

    return (
      <AppContainer  />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
 
