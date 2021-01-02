import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  BackHandler,
  StatusBar,
  Dimensions,
  ImageBackground,
  Image,
  I18nManager,
  ScrollView,
  FlatList
} from "react-native";
import { Container, Right, Header, Left, Body, Button, Content, Card, CardItem,
  List, ListItem, Thumbnail , Icon, Footer, FooterTab
} from "native-base";
  
 
const drawerStyles = {
  drawer: {
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 0
  }
}; 
import Drawer from "react-native-drawer";
import MyControlPanel from "./ControlPanel";
import tweens from "./tweens";
import styles from "./styles";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Dashboard from "./Dashboard";



export default class DrawerSocial extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      drawerType: "static",
      openDrawerOffset: 50,
      closedDrawerOffset: 0,
      panOpenMask: 0.1,
      relativeDrag: false,
      panThreshold: 0.25,
      tweenHandlerOn: false,
      currentTab:'Home',
      tweenDuration: 350,
      tweenEasing: "linear",
      disabled: false,
      tweenHandlerPreset: null,
      acceptDoubleTap: false,
      acceptTap: false,
      acceptPan: true,
      tapToClose: true,
      negotiatePan: false,
      side: "left",
      

     
    };
  }
  componentWillMount() {
    setTimeout(() => {
     // this.drawer.open();
    }, 1000);
    var that = this;
    BackHandler.addEventListener("hardwareBackPress", function() {
      that.props.navigation.navigate("Drawer");
      return true;
    });
  }
  setDrawerType(type) {
    this.setState({
      drawerType: type
    });
  }

  tweenHandler(ratio) {
    if (!this.state.tweenHandlerPreset) {
      return {};
    }
    return tweens[this.state.tweenHandlerPreset](ratio);
  }

  noopChange() {
    this.setState({
      changeVal: Math.random()
    });
  }

  openDrawer() {
    this.drawer.open();
  }

  setStateFrag(frag) {
    this.setState(frag);
  }

 
  render() {

    StatusBar.setBarStyle("light-content", true);

    if (Platform.OS === "android") {
      StatusBar.setBackgroundColor("rgb(64,25,108)", true);
      StatusBar.setTranslucent(true);
    }
 
    const { navigation } = this.props;
    var controlPanel = (
      <MyControlPanel
        closeDrawer={() => {
          this.drawer.close();
        }}

        navigation={navigation}
      />
    );
    
    
    return (
      <View style={styles.container}>
        <Drawer
          ref={c => (this.drawer = c)}
          type={this.state.drawerType}
          animation={this.state.animation}
          openDrawerOffset={this.state.openDrawerOffset}
          closedDrawerOffset={this.state.closedDrawerOffset}
          panOpenMask={this.state.panOpenMask}
          panCloseMask={this.state.panCloseMask}
          relativeDrag={this.state.relativeDrag}
          panThreshold={this.state.panThreshold}
          content={controlPanel}
          styles={drawerStyles}
          disabled={this.state.disabled}
          tweenHandler={this.tweenHandler.bind(this)}
          tweenDuration={this.state.tweenDuration}
          tweenEasing={this.state.tweenEasing}
          acceptDoubleTap={this.state.acceptDoubleTap}
          acceptTap={this.state.acceptTap}
          acceptPan={this.state.acceptPan}
          tapToClose={this.state.tapToClose}
          negotiatePan={this.state.negotiatePan}
          changeVal={this.state.changeVal}
          side={this.state.side}
        >
       
       
        
       
          <View style={styles.drawercontainer}>
          <View style={styles.ImageBackground}   >
           
         
          <Header style={styles.headerSec}>
             
              <Body style={styles.body}>

              <View style={{flexDirection:'row'}}>
                  <Image source={require('../../Images/avatar.png')} style={styles.logostyle} /> 
                  <Text style={styles.homeStyle}>Hi David,</Text>
                    </View>

               </Body>  
              <Right style={styles.right}>
           
              <Text style={styles.addmoney}>Add Money </Text>
              <FontAwesome5 
                         name={'plus-circle'}
                         size={18}
                         style={ 
                           styles.activefooter } 
              /> 

               

              </Right>
            </Header>

{/*START DASHBOARD BOX*/}

{
  (this.state.currentTab == "Home") ?
  <View>
   <Dashboard/>
  </View>

  :
  <View></View>
 
}
 {/* END DASHBOARD BOX*/}
  


 

  
          </View>
 
 



          </View>
        
        </Drawer>

    

        <Footer   style={
   styles.footertab
 }>
                    <FooterTab style={styles.footertabChildren}
                   
                    >
                      

                      <TouchableOpacity 
                        style={{
                        
                          alignItems:'center',
                          padding:5
                        }}
                         onPress= { ()=>{

                          this.setState({currentTab:'Home'});
                        }}>
                        
                        
                        <FontAwesome5 
                         name={'home'}
                         size={21}
                         style={

                           (this.state.currentTab=="Home")?
                           styles.activefooter
                           :

                           styles.inactivefooter
                           
                           } 
                            /> 
                        <Text  style={ (this.state.currentTab=="Home")? styles.tabtextactive:styles.tabtext}>Home </Text>  
                        
                        </TouchableOpacity>


                        <TouchableOpacity 
                        style={{
                        
                          alignItems:'center',
                          padding:5
                        }}
                         onPress= { ()=>{

                          this.setState({currentTab:'Connected'});
                        }}>
                        
                        
                        <FontAwesome5 
                         name={'sync'}
                         size={21}
                         style={

                           (this.state.currentTab=="Connected")?
                           styles.activefooter
                           :

                           styles.inactivefooter
                           
                           } 
                            /> 
                        <Text   style={ (this.state.currentTab=="Connected")? styles.tabtextactive:styles.tabtext}>Payments </Text>  
                        
                        </TouchableOpacity>


                        <TouchableOpacity 
                        style={{
                        
                          alignItems:'center',
                          padding:5
                        }}
                         onPress= { ()=>{

                          this.setState({currentTab:'Chat'});
                        }}>
                         
                         <FontAwesome5 
                         name={'chart-bar'}
                         size={21}
                         style={

                           (this.state.currentTab=="Chat")?
                           styles.activefooter
                           :

                           styles.inactivefooter
                           
                           } 
                            /> 
                            <Text  style={[ (this.state.currentTab=="Chat")? styles.tabtextactive:styles.tabtext,{marginTop:'2%'}]}>Budgets </Text> 
                        </TouchableOpacity>

                        <TouchableOpacity 
                        style={{
                        
                          alignItems:'center',
                          padding:5
                        }}
                         onPress= { ()=>{

                          this.setState({currentTab:'Profile'});
                        }}>
                         
                         <FontAwesome5 
                         name={'wallet'}
                         size={21}
                         style={

                           (this.state.currentTab=="Profile")?
                           styles.activefooter
                           :

                           styles.inactivefooter
                           
                           } 
                            /> 
                            <Text  style={[ (this.state.currentTab=="Profile")? styles.tabtextactive:styles.tabtext,{marginTop:'2%'}]}>Cards </Text> 
                        </TouchableOpacity>

 

                        <TouchableOpacity 
                        style={{
                        
                          alignItems:'center',
                          padding:5
                        }}
                         onPress= { ()=>{

                          this.setState({currentTab:'More'});
                        }}>
                         
                         <FontAwesome5 
                         name={'th'}
                         size={21}
                         style={

                           (this.state.currentTab=="More")?
                           styles.activefooter
                           :

                           styles.inactivefooter
                           
                           } 
                            /> 
                            <Text  style={[ (this.state.currentTab=="More")? styles.tabtextactive:styles.tabtext,{marginTop:'2%'}]}>More </Text> 
                        </TouchableOpacity>

 
 
 
                    </FooterTab>
                </Footer>



      </View>
    );
  }
}
