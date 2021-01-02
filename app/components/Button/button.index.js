import React, { Component } from "react";
import { Text, View} from "react-native";
import {  Button,  Icon } from "native-base";
import styles from "./styles";


export default class index extends Component 
{
  render() {
    return (
    
    
        <View style={styles.btnsec}>
        <Button
         iconRight
          rounded
          onPress={this.props.onPress}
          style={styles.nextBotton}
        >
           <Text style={styles.nextText}>{this.props.Text}</Text>
           {
            (this.props.iconname =="") ?
            <View></View>
            :
            <Icon name={this.props.iconname} style={styles.arrowstyle} />
            
           }
         </Button> 
       
      </View>
        );
  }
}