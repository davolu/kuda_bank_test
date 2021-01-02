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
    color:Colors.blue,
    marginTop:'5%',
    marginLeft:'2%',
    fontSize: Fonts.moderateScale(15)

  },
  roundedinput:{
   borderColor:Colors.white,
   marginTop:'3%',
   padding:5,
   backgroundColor:Colors.gray,
   borderRadius:0
   }, 

  modelCenter: { 
    borderRadius: 5,
    height: Metrics.HEIGHT * 0.78,
    width: "100%",//Metrics.WIDTH * 0.95,
    marginTop:'8%',
    backgroundColor: "transparent",
    padding: 0
  },

 
  nextBotton: {
    backgroundColor:Colors.primaryColor,
    width:100,
    justifyContent:'center'
  
  },

  nextText: {
    fontFamily: Fonts.type.NunitoLight,
    fontSize: Fonts.moderateScale(15),
   color:Colors.white,
   alignSelf:'center'
  },

  prevText:{
    fontFamily: Fonts.type.NunitoLight,
    fontSize: Fonts.moderateScale(15),
   color:Colors.primaryColor,
   alignSelf:'center'
  },
  accordionheader:{
    backgroundColor:Colors.white,
   
  },

  accordioncontent:{
    color:Colors.primaryColor
  },


  joinNowContainer:{
   justifyContent:'center',
   alignItems:'center',
   marginTop:'5%'
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
     fontSize: Fonts.moderateScale(11)
  },
  signuptext:{
    fontFamily: Fonts.type.NunitoSemiBold,
     alignSelf:'flex-start',
    textAlign:'center',
    fontWeight:'bold',
    fontSize: Fonts.moderateScale(17)
  },

  signuptextdesc:{
    fontFamily: Fonts.type.NunitoRegular,
     alignSelf:'flex-start',
  
     fontSize: Fonts.moderateScale(15)
  }

   
});
export default styles;
