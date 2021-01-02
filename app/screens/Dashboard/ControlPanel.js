import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image , Dimensions, AsyncStorage} from "react-native";
import { Container, Content } from "native-base";
import styles from "./styles";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
 
export default class ControlPanel extends Component 
{

  
  async removeItemValue(key) 
  {
    try {
      await AsyncStorage.removeItem(key);
      return true;
    }
    catch(exception) {
      return false;
    }
  }

  render() {
    
    return (
      <Container style={styles.menuContainer}>  
        <Content style={styles.menucontrolPanel}>
          <View style={styles.userProfiles}>
           
           {/*
            <View style={styles.userDetailsStyle}>
              <Text style={styles.userDetailsText}>David Oluyale</Text>
              <Text style={styles.userDetailsText}>email@example.com</Text>
            </View> */}
          </View>

          <View style={styles.menumainview}>
          {/*
            <TouchableOpacity onPress={() =>{this.props.navigation.navigate("DrawerSocial")}}>
              <View style={styles.listrow}>
                <Ionicons name="md-home" color="#ffffff" size={20} />
                <Text style={styles.rowtxt}>Home</Text>
              </View>
            </TouchableOpacity>

            
           

         
          

            <TouchableOpacity onPress={() => 
            {
              this.removeItemValue("login_response");
              this.props.navigation.navigate("Signin")
            }
            
            }>
              <View style={styles.listrow}>
                <SimpleLineIcons name="logout" color="#ffffff" size={20} />
                <Text style={styles.rowtxt}>Logout</Text>
              </View>
            </TouchableOpacity> */}
          </View>
        </Content>
      </Container>
    );
  }
}
