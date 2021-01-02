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
  Icon,
  Right,
  Content, 
  
  Accordion,
  Col
} from "native-base";
// Screen Styles
import styles from "./styles";
import ButtonComponent from "../../components/Button/button.index";
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import PhoneInput from 'react-native-phone-input'


const dataArray = [
  { title: "Why we need your BVN", content: "Your BVN does not give us access to your bank account. " }
];

 
export default class Index extends Component {
    
  constructor(props) {
    super(props)
    this.state = {
      showPassword:false,
      showPasswordConfrim:false


      }
}
 
 
  
  render() {
   
    
 

    return (
      
      <View 
    
       style={[styles.screenBg]}>


<View style={{flex: 1, marginTop:'7%'}}>
    <ProgressSteps activeStepIconBorderColor={'rgb(64,25,108)'}  completedStepIconColor={'rgb(64,25,108)'}
    labelFontFamily={'Nunito-ExtraBold'} activeLabelColor={'rgb(64,25,108)'}
    completedProgressBarColor={'rgb(64,25,108)'}
    borderStyle={'rgb(64,25,108)'}
    >
        <ProgressStep label="" nextBtnStyle={styles.nextBotton} 

      nextBtnTextStyle={styles.nextText}
>
            <View style={{padding:10}}>
                

            <Text style={styles.signuptext}>Start </Text>
            <Text style={styles.signuptextdesc}>Open Kuda account with a few details </Text>
            <Text style={[styles.signuptextdesc,{marginTop:'2%'}]}>Your password must have at least 8 characters including letters and a number.</Text>


           <View style={styles.modelCenter}>
 
           
           <Item regular style={styles.roundedinput}>
             <Input placeholder='Email Address' style={styles.inputGray}  />
           </Item>
  
           <Item regular style={styles.roundedinput}>
             <Input placeholder='Enter Password' style={styles.inputGray} secureTextEntry={true}  />
           
             <TouchableOpacity>
            <Icon active name='eye' />
          </TouchableOpacity>
           </Item>
 
           <Item regular style={styles.roundedinput}>
             <Input placeholder='Confirm Password' style={styles.inputGray} secureTextEntry={true}  />
             <TouchableOpacity>
            <Icon active name='eye' />
          </TouchableOpacity>
           </Item>

           <Item regular style={styles.roundedinput}>
             <Input placeholder='Referal Code (Optional)' style={styles.inputGray}  />
           </Item>
 
            
       
          
 
  
 
               
             </View>
             
        





            </View>
        </ProgressStep>
        <ProgressStep label="" 
        nextBtnStyle={styles.nextBotton} 

        nextBtnTextStyle={styles.nextText}
        previousBtnTextStyle={styles.prevText}
        >
            <View style={{padding:10}}>
            
            
            <Text style={styles.signuptext}>What's Your BVN? </Text>
            <Text style={styles.signuptextdesc}>We need your Bank Verification Number (BVN) to confirm who you are.  </Text>
            <Text style={[styles.signuptextdesc,{marginTop:'2%', fontSize:13}]}>We will send a code to the phone number linked to your BVN if you do not have access to that phone number, skip this step.</Text>


      
            <Item regular style={styles.roundedinput}>
             <Input placeholder='ENTER BVN' style={styles.inputGray}  />
           </Item>


           <Content style={{marginTop:'3%'}}>
          <Accordion dataArray={dataArray} expanded={0}
          headerStyle={styles.accordionheader}
          contentStyle={styles.accordioncontent}
            
          />
            </Content>



            </View>



        </ProgressStep>



        <ProgressStep label=""
        
        nextBtnStyle={styles.nextBotton} 

      nextBtnTextStyle={styles.nextText}
      previousBtnTextStyle={styles.prevText}

        >
            <View style={{ padding: 10 }}>
             
                   
            <Text style={styles.signuptext}>Your Name </Text>
            <Text style={styles.signuptextdesc}>This has to be your full legal name as it appears on your national ID</Text>
 



            <Item regular style={styles.roundedinput}>
             <Input placeholder='Last Name' style={styles.inputGray}  />
           </Item>

           
           <Item regular style={styles.roundedinput}>
             <Input placeholder='First Name' style={styles.inputGray}  />
           </Item>

            </View>
        </ProgressStep>
  
  
  
        <ProgressStep label=""
        
        nextBtnStyle={styles.nextBotton} 

      nextBtnTextStyle={styles.nextText}
      previousBtnTextStyle={styles.prevText}

      onSubmit={ ()=>{
        this.props.navigation.navigate("SuccessScreen")
      }}
      
        >
            <View style={{ padding: 10 }}>
             
                   
            <Text style={styles.signuptext}>What's Your Phone Number? </Text>
            <Text style={styles.signuptextdesc}>We need your phone number to verify your account</Text>
 
               <PhoneInput ref='phone' initialCountry="ng" 
               placeholder="+234"
               style={[styles.roundedinput,{padding:10}]}/>



            </View>
        </ProgressStep>
  
  
  
  
    </ProgressSteps>
</View>



       <View style={styles.container}>
  
       


        </View>
      </View>
    );
  }
}
