import React, { Component } from "react";
import {Text,  View, TouchableOpacity,Image, I18nManager,} from "react-native";
import styles from "./styles";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { ScrollView } from "react-native-gesture-handler";
import ButtonComponent from "../../components/Button/button.index";


export default class TalentDashboard extends Component 
{
  render() {
    return (

        <ScrollView style={{padding:4}}>

       
 
        {/** Balance Slide */}
        <View
        style={{padding:10}}
        >
                    <View
                
                    style={styles.balanceview}
                    >
            
                  <View style={{flexDirection:'row', padding:2}}>
              
               
 
                
                  </View>

                    <View
                    style={styles.contentbalance}
                    >
                    

                    <Text style={styles.balancetxt}>Bank Balance</Text> 
                      
                    <Text style={styles.amountstyle}>₦0.00</Text>
                
                    </View>


                    <View style={styles.contentbalances}>



                    <TouchableOpacity style={styles.gridrow}>
                     <FontAwesome5 name={'sync'}  size={14} style= {styles.gridicon}/>
              
                    <Text style= {styles.gridtext}>Spend</Text>

                    </TouchableOpacity>

                    <TouchableOpacity  style={styles.gridrow}>
                     <FontAwesome5 name={'address-card'}  size={14} style= {styles.gridicon}/>
              
                    <Text style= {styles.gridtext}>Save</Text>

                    </TouchableOpacity>


                    <TouchableOpacity style={styles.gridrow}>
                     <FontAwesome5 name={'circle-notch'}  size={14} style= {styles.gridicon}/>
              
                    <Text style= {styles.gridtext}>Borrow</Text>

                    </TouchableOpacity>
                    

                   

                   




                    </View>

                    </View>
          </View>
        {/** End Balance Slide */}
 


          <View style={{padding:30}}>

          <Text style={styles.introText}>Welcome to Kuda</Text>
          <Text style={styles.introTextDesc}>Your Kuda account number is 2002542519. Your account is limited to a balance of ₦300,000 and you can recieve a maximum
          deposit of ₦500,000, at a time. </Text>

            
          </View>


            <ButtonComponent 
  
            onPress={ 
              ()=> {}  
            }
            Text="Add Money" 

            />





          </ScrollView>

 
    
        

        );
  }
}