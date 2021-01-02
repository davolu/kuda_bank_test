import { Col } from "native-base";
import { StyleSheet, PixelRatio, Platform ,Dimensions} from "react-native";
 import { Fonts, Metrics, Colors } from "../../Themes/";
 var {height, width} = Dimensions.get('window');

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  drawercontainer: {
    width: Metrics.WIDTH,
    height: Metrics.HEIGHT*1.2,
    backgroundColor: "#fff"
  },
  headerSec: {
    borderBottomColor :'#ccc',
    backgroundColor: "#fff",
    height: Metrics.WIDTH * 0.15,
    borderBottomWidth: 0,
    ...Platform.select({
      android: {
        marginTop: Fonts.moderateScale(0)
      }
    }),
    elevation: 0
  },

  inactivefooter:{
    color:Colors.grayblack,
    fontFamily: Fonts.type.NunitoRegular

   },
   tabtextactive:{
     color:Colors.primaryColor,
     fontFamily: Fonts.type.NunitoRegular

   },
  activefooter:{
    color:Colors.primaryColor,
    fontFamily: Fonts.type.NunitoRegular

  },

  homeStyle:{
    fontSize:14,
     fontWeight:'bold', 
     marginTop:'4%',
     marginLeft:'5%',
     fontFamily: Fonts.type.NunitoRegular
  },

  addmoney:{
    fontSize:14,
    fontWeight:'bold', 
    marginTop:'1%',
    marginLeft:'5%',
    color:Colors.primaryColor,
    fontFamily: Fonts.type.NunitoRegular
  },


  balanceview: {
    height:200, 
    width:'100%', 
    backgroundColor:Colors.primaryColor,  
    elevation:5, 
    borderRadius:10,
    alignContent:'center', 
    resizeMode:"contain"
  },

  datestyle: {
    marginTop:'2%',
     marginRight:'5%', 
     fontSize:11, fontWeight:'bold', 
     color:'#EB5F65', 
     fontFamily: "Nunito-Regular"},
  
contentbalance:{
  height:100, margin:'0%',
                    borderRadius:4, padding:0,
                    width:350,
                    elevation:0,
                    justifyContent:'center',
                    alignSelf:'center',
                    backgroundColor:'transparent'

                    
},

balancetxt:{
  alignSelf:'center', 
   color:Colors.white,  
  fontFamily: "Nunito-Regular"
},

contentbalances:
  {flexDirection:'row', width:'80%', marginLeft:'10%', marginTop:'5%'},


  gridrow:{
    flex:2, justifyContent:'center', alignContent:'center'
  },

  gridicon:{alignSelf:'center', color:'#fff', backgroundColor:Colors.primaryColor, padding:8, borderRadius:18},

  gridtext:{alignSelf:'center', fontSize:11, color:Colors.white,   fontFamily: "Nunito-Regular"},

amountstyle:
  {
    fontSize:25,
     marginTop:'0%', 
     color:Colors.white, 
     fontSize:30, 
     fontWeight:'bold', 
     fontFamily: "Nunito-Regular", 
     alignSelf:'center'
  },


  introText:{
    alignSelf:'center',
    alignItems:'center',
    fontFamily: Fonts.type.NunitoBlack,
    fontSize: Fonts.moderateScale(18),

  },

  introTextDesc:{
    alignSelf:'center',
    alignItems:'center',
    textAlign:'center',
    fontFamily: Fonts.type.NunitoRegular,
    fontSize: Fonts.moderateScale(12),

  },

  left: {
    flex: 3,
    backgroundColor: "transparent"
  },
  backArrow: {
    width: 30,
    backgroundColor:'transparent',
    borderRadius:40,
    justifyContent: "center",
    alignItems: "center"
  },
  body: {
     alignItems: "flex-start",
    backgroundColor: "transparent"
  },
  textTitle: {
    color: "#fff",
    fontSize: Fonts.moderateScale(16),
    marginTop: 5,
    alignSelf: "center",
    fontFamily: Fonts.type.NunitoRegular
  },
  right: {
    flex: 0.5
  },
  mainText: {
    color: "#fff",
    fontSize: Fonts.moderateScale(17),
    height: Metrics.HEIGHT * 0.05,
    width: Metrics.WIDTH,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: "transparent",
    top: Metrics.HEIGHT * 0.44,
    fontFamily: Fonts.type.sfuiDisplayRegular
  },

  grayText:{
   color:'#7a7a7a',
   fontWeight:'bold',
   fontFamily: Fonts.type.NunitoRegular
  },
  logostyle: {
    alignSelf: "center",
    //backgroundColor:'#fff',
    opacity:1,
    marginTop:'2%',
    borderRadius:5, 
    width: 35, //Metrics.WIDTH * 0.35,
    height: 35//Metrics.HEIGHT * 0.15
  },
  ImageBackground: {
    width: Metrics.WIDTH,
   height: Metrics.HEIGHT,
   padding:3,
   marginTop:'10%',
   resizeMode:'contain'
  },
 

  footertabChildren:{
    backgroundColor:'#fbfbfb',
    paddingLeft:10,
    paddingRight:10,
  },

  tabtext:{
color:Colors.black,
fontSize:13,
fontFamily: Fonts.type.NunitoSemiBold,

  },


  footertab:{
    
   }, 

  servicebox:{
    height:94, 
    width:'45%',
    margin:'2.5%',
    backgroundColor:'#e3efe9',  
    elevation:5, 
    borderRadius:10,
    padding:10,
    alignContent:'center', 
   },
  

  slidesec: {
    height: Metrics.HEIGHT * 0.3,
    backgroundColor: "#f5f5f5"
  },

  dot: {
    backgroundColor: "#f5f5f5",
     width: Metrics.WIDTH * 0.02,
    height: Metrics.WIDTH * 0.02,
    borderRadius: Metrics.WIDTH * 0.01,
    marginLeft: Metrics.WIDTH * 0.005,
    marginRight: Metrics.WIDTH * 0.005
  },

  activeDot: {
    backgroundColor: "#fbeb2f",
     width: Metrics.WIDTH * 0.02,
    height: Metrics.WIDTH * 0.02,
    borderRadius: Metrics.WIDTH * 0.01,
    marginLeft: Metrics.WIDTH * 0.005,
    marginRight: Metrics.WIDTH * 0.005
  },

  slide: {
     backgroundColor: Colors.transparent
  },

  sliderImage: {
    resizeMode: "contain",
    height:Metrics.HEIGHT * 0.2,
    width: Metrics.WIDTH,
    backgroundColor: "transparent"
  },

  contentStyle: {
    position: "absolute",
    alignSelf: "center",
    alignItems: "center",
    top: Metrics.HEIGHT * 0.055
  },

  headertext: {
    fontFamily: Fonts.type.helveticaNeueBold,
    backgroundColor: Colors.transparent,
    fontSize: Fonts.moderateScale(16),
    textAlign: "center",
    alignSelf: "center",
    display:'none',
    color: "#fff"
  },

  greenabucoop:{
    color:'#54954B',
    fontFamily: "Nunito-Regular"
,
    fontWeight:'bold'
  },

  fontcommon:{
    fontFamily: "Nunito-Regular"
  },
  
  redabucoop:{
    color:'#C32328',
    fontFamily: "Nunito-Regular",
    fontWeight:'bold'
  },

  

  desctext: {
    fontFamily: Fonts.type.helveticaNeueLight,
    backgroundColor: Colors.transparent,
    fontSize: Fonts.moderateScale(23),
    textAlign: "center",
    alignSelf: "center",
    color: "#000",
    display:'none',
    lineHeight: Fonts.moderateScale(23)
  },

  miniImage:{
    marginTop:'5%',
    width:25,
    height:25,
    alignSelf:'center'
  },
  scrollView:{
    marginHorizontal: 20
  },

  graytxt:{
    color:'#7a7a7a',
    fontWeight:'bold'
  },
  greentxt:{
color:'green',
fontWeight:'bold'
  },
  redtxt:{
    color:'red',
    fontWeight:'bold'
  },
  cardcolthree:{
    flex:2,
    height:90,
    padding:3,
    elevation:2,
    borderBottomWidth:1,
    borderColor:'#fff'
  },
  loanhistorycard:{
    elevation:1,
    borderBottomWidth:0,
    borderRadius:20,
    borderColor:'#fff'
  },
  
  titlex:{
   textAlign:'center',
   color:'#7a7a7a',
   fontFamily: Fonts.type.NunitoRegular,
   fontSize:13
  },
  titlex2:{
    textAlign:'center',
    color:'#7a7a7a',
    fontFamily: Fonts.type.sfuiDisplayRegular,
    fontSize:9
   },
  /*Menu Section START*/
  menuContainer: {
    backgroundColor: "#e3efe9",
    width: Metrics.WIDTH,
    height: Metrics.HEIGHT,
    paddingTop: Fonts.moderateScale(25)
  },
  menucontrolPanel: {
    // flex: 1,
    paddingTop: Fonts.moderateScale(25),
    paddingLeft: Fonts.moderateScale(20)
  },
  userProfiles: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  userImageStyle: {
    width: Metrics.WIDTH * 0.2,
    height: Metrics.WIDTH * 0.2,
    borderRadius: Metrics.WIDTH * 0.1,
    borderWidth: 2,
    borderColor: "#fff"
    // marginLeft: 40
  },
  list: {
    //paddingHorizontal: 5,
    backgroundColor:"#E6E6E6",
  },

  /******** card **************/
  card:{
    width: width,
    height:150,
    flexDirection:'row',
    padding:20,

    justifyContent: 'center', 
    alignItems: 'center' 
  },
  cardImage:{
    height: 70,
    width: 70,
  },
  title:{
    fontSize:28,
    flex:1,
    color:"#FFFFFF",
    fontWeight:'bold',
    marginLeft:40
  },
  subTitle:{
    fontSize:12,
    flex:1,
    color:"#FFFFFF",
  },
  icon:{
    height: 20,
    width: 20, 
  },
  userDetailsStyle: {
    backgroundColor: "transparent",
    alignItems: "flex-start",
    height: 50,
    justifyContent: "center",
    marginLeft: 10
  },
  userDetailsText: {
    fontSize: Fonts.moderateScale(15),
    color: "#fff"
  },
  menumainview: {
    marginLeft: Fonts.moderateScale(25),
    marginTop: Fonts.moderateScale(25)
  },
  listrow: {
    backgroundColor: "transparent",
    flexDirection: "row",
    marginBottom: 15
  },
  rowtxt: {
    color: "#fff",
    fontSize: Fonts.moderateScale(18),
    backgroundColor: "transparent",
    marginLeft: Fonts.moderateScale(15),
    textAlign: "center",
    fontFamily: Fonts.type.sfuiDisplayLight
  },
  notiCountSec: {
    backgroundColor: "#d9b63e",
    marginLeft: 10,
    marginTop: 3,
    borderRadius: 10,
    height: 17,
    width: 40,
    alignItems: "center",
    justifyContent: "center"
  },
  notiCount: {
    color: "#fff",
    fontSize: Fonts.moderateScale(13)
  }
  /*Menu Section END*/
});
