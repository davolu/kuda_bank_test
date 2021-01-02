import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  StatusBar,
  Platform,
  TouchableOpacity,
  BackHandler,
  I18nManager,
  AsyncStorage,
  ImageBackground
} from "react-native";
//import AsyncStorage from '@react-native-async-storage/async-storage'; //linking issue fix later
import { Container, Button, Right, Header, Left, Body } from "native-base";
import styles from "./styles";

//Import components
import ButtonComponent from "../../components/Button/button.index";



export default class Index extends Component 
{
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    };
  }

 async componentWillMount() 
  {
    BackHandler.addEventListener("hardwareBackPress", function() {
      return false;
    }); 


    
  //Load our Fonts
  await Expo.Font.loadAsync({
    'Nunito-Black': require('../../Fonts/Nunito-Black.ttf'),
    'Nunito-BlackItalic': require('../../Fonts/Nunito-BlackItalic.ttf'),
    'Nunito-Bold': require('../../Fonts/Nunito-Bold.ttf'),
    'Nunito-BoldItalic': require('../../Fonts/Nunito-BoldItalic.ttf'),
    'Nunito-ExtraBold': require('../../Fonts/Nunito-ExtraBold.ttf'),
    'Nunito-ExtraBoldItalic': require('../../Fonts/Nunito-ExtraBoldItalic.ttf'),
    'Nunito-ExtraLight': require('../../Fonts/Nunito-ExtraLight.ttf'),
    'Nunito-ExtraLightItalic': require('../../Fonts/Nunito-ExtraLightItalic.ttf'),
    'Nunito-Italic': require('../../Fonts/Nunito-Italic.ttf'),
    'Nunito-Light': require('../../Fonts/Nunito-Light.ttf'),
    'Nunito-LightItalic': require('../../Fonts/Nunito-LightItalic.ttf'),
    'Nunito-Regular': require('../../Fonts/Nunito-Regular.ttf'),
    'Roboto_medium': require('../../Fonts/Nunito-Regular.ttf'),

    'Nunito-SemiBold': require('../../Fonts/Nunito-SemiBold.ttf'),
    'Nunito-SemiBoldItalic': require('../../Fonts/Nunito-SemiBoldItalic.ttf')

  });

  this.setState({ fontLoaded: true });

  //Check if user is already logged in
  await AsyncStorage.getItem('login_response').then( (value) => 
    {
        if(value != null){
          
           this.props.navigation.navigate('DashboardScreen')
          }
          else
          {   }    
  
      });


  }

 
  render() {
    
   

    if(!this.state.fontLoaded) 
    {

       return <View></View>;
     
    } 
    return (
      <Container>
           

       
         
        <View style={{marginTop:'65%'}}></View>

        
        <View>
            <Image source={require('../../Images/logo_intro.png')}  

              style={styles.intrologo}

            />
          </View> 
        <View style={styles.textViewIntro}>
        <Text style={styles.introText}>Hi David, Welcome to the{'\n'} Kuda banking experience.</Text>
        </View>
        
                                 
        <ButtonComponent 

          onPress={ 
            ()=> this.props.navigation.navigate("Dashboard")
          }
          Text="Continue to Dashboard"
          
        />
          

      </Container>
    );
  }
}
