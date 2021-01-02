import { Col } from "native-base";
import { Platform, StyleSheet } from "react-native";
import {Fonts, Metrics, Colors} from '../../Themes';

const styles = StyleSheet.create({
  screenBg: {
    width: Metrics.WIDTH,
    height: Metrics.HEIGHT*1.2,
    backgroundColor: "white",
    resizeMode:'contain'
  },
 
   
  container: {
      marginTop:'20%',
      padding:20
  },
  
  inputGray:{
    backgroundColor:Colors.gray,
    borderWidth:0,
    borderRadius:30,
    fontFamily: Fonts.type.NunitoSemiBold

  },

  forgotpassword:{
    marginLeft:'3%',
    
    
  },

  buttonContainer:{
    marginTop:'14%'
  },


  forgotpasswordText:{
    color:Colors.green,
    marginTop:'5%',
    marginLeft:'2%',
    fontSize: Fonts.moderateScale(15)

  },
  roundedinput:{
   borderColor:Colors.white,
   marginTop:'3%',
   backgroundColor:Colors.gray,
   borderRadius:0,
   padding:8
   }, 
  modelCenter: { 
    borderRadius: 5,
    height: Metrics.HEIGHT * 0.78,
    width: "100%",//Metrics.WIDTH * 0.95,
    marginTop:'5%',
    backgroundColor: "transparent",
    padding: 0
  },

  joinNowContainer:{
   justifyContent:'center',
   alignItems:'center',
   marginTop:'10%'
  },

  joinNowText:{
    fontFamily: Fonts.type.NunitoSemiBold,
    color:Colors.blue, 
    marginTop:'40%',
    textDecorationLine:'underline',
     fontSize: Fonts.moderateScale(22)
  },
   
  joinNowSubText:{
    fontFamily: Fonts.type.NunitoSemiBold,
     fontSize: Fonts.moderateScale(10)
  },
  signintext:{
    fontFamily: Fonts.type.NunitoSemiBold,
    fontWeight:'bold',
    marginLeft:'2%',
    fontSize: Fonts.moderateScale(25)
  }
});
export default styles;
