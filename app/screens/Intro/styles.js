import {Platform, StyleSheet} from 'react-native';
import {Fonts, Metrics, Colors} from '../../Themes';

const styles = StyleSheet.create({
 

  introimage:{
     height:330,
     width:330,
     alignSelf:'center',
     marginTop:'10%',
  },
 

  topView:{
    marginTop:'20%',
    marginBottom:'25%'
  },
  intrologo:{
    marginTop:'5%',
   height:80,
   width:80,
   resizeMode:'contain',
   alignSelf:'center'
  }, 
  textViewIntro:{
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center',
    marginBottom:'7%'
  },

  AlreadyLoggedinContainer:{
    justifyContent:'center',
    flexDirection:'row',
    marginTop:'0%'
   },
 
   textdark:{
    fontFamily: Fonts.type.NunitoSemiBold,
    fontWeight:'bold'
   }, 
   AlreadyLoggedinText:{
     fontFamily: Fonts.type.NunitoSemiBold,
     color:Colors.green,
     fontWeight:'bold',
      fontSize: Fonts.moderateScale(12)
   },

  introText:{
    alignSelf:'center',
    fontFamily: Fonts.type.NunitoBlack,
    fontSize: Fonts.moderateScale(18),

  }
   
 
  
});

export default styles;
