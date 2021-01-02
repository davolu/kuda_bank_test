import React, { Component } from "react";
import {
  TouchableHighlight,
  Modal,
  ImageBackground,
  Image,
  View,
  StatusBar,
  Platform,
  TouchableOpacity,
  TextInput,
  BackHandler,
  AsyncStorage,
  Alert,
  I18nManager
} from "react-native";
import {
  Text,
  Form,
  Item,
  Input,
  Body,
  
  Card,
  Header,
  Left,
  Right
} from "native-base";
// Screen Styles
import styles from "./styles";
import ButtonComponent from "../../components/Button/button.index";
import HeaderComponent from "../../components/Header/header.index";

 
export default class Index extends Component {
    
  constructor(props) {
    super(props)
    this.state = {
      }
}

 
  
  render() {
   
    
 

    return (
      
      <View 
    
       style={[styles.screenBg]}>

       <HeaderComponent  onBackPress={ ()=>{ this.props.navigation.navigate("IntroScreen") }}/>
       <View style={styles.container}>
  
        <Text style={styles.signintext}>Hey there !</Text>
           

          <View style={styles.modelCenter}>

     

          <Item regular style={styles.roundedinput}>
            <Input placeholder='Email Address' style={styles.inputGray}  />
          </Item>

          <Item regular style={styles.roundedinput}>
            <Input placeholder='Password' style={styles.inputGray} secureTextEntry={true}  />
          </Item>

          <View style={styles.forgotpasswordContainer}>
          <Text style={styles.forgotpasswordText}>Change Password?</Text>
          </View>
      
        <View style={styles.buttonContainer}>
        <ButtonComponent 

        onPress={ 
          ()=> this.props.navigation.navigate("DashboardScreen")
        }
        Text="Sign In"
        
        />


        </View> 

 
          

              
            </View>
            
       



        </View>
      </View>
    );
  }
}
