import React, { Component } from "react";
import { Text, View, TouchableOpacity,Image, I18nManager } from "react-native";
import { Container, Button, Right, Header, Left, Body } from "native-base";
import styles from "./styles";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";


export default class index extends Component 
{
  render() {
    return (
    
    
        <Header style={styles.header}> 
            <Left style={styles.left}>
              <TouchableOpacity
                style={styles.backArrow}
                onPress={this.props.onBackPress}
              
              >
                <FontAwesome5
                  name={I18nManager.isRTL ? "angle-right" : "angle-left"}
                  size={30}
                  color="rgb(64,25,108)"
                />
              </TouchableOpacity> 
            </Left>
            <Body style={styles.body}></Body>
            <Right style={styles.right} />
          </Header>



        );
  }
}