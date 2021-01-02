import {Platform, StyleSheet} from 'react-native';
import {Fonts, Metrics, Colors} from '../../Themes';

const styles = StyleSheet.create({
    btnsec: {
        height: Metrics.HEIGHT * 0.1,
        justifyContent: 'center',
        bottom: Metrics.HEIGHT * 0.02,
        flexDirection: 'row',
        width: Metrics.WIDTH * 0.85,
        alignSelf: 'center',
      },

      nextBotton: {
        backgroundColor:Colors.primaryColor,
        borderRadius:0,
        
        elevation:6,
        padding:20,
        width: "100%",//Metrics.WIDTH * 0.35,
        ...Platform.select({
          ios: {
            height: Metrics.HEIGHT * 0.05,
          },
          android: {
            height: Metrics.HEIGHT * 0.06,
          },
        }),
        alignSelf: 'center',
        justifyContent: 'center',
        marginLeft:"2%",
      },
    
    
      arrowstyle:{
     marginLeft:'7%'
      },
      nextText: {
        fontFamily: Fonts.type.NunitoLight,
        fontSize: Fonts.moderateScale(15),
        color: '#fff',
        fontWeight:'bold',
        marginLeft:'10%'
      },

      
});

export default styles;
