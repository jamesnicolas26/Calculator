import { StatusBar } from 'expo-status-bar';
import React, { useState} from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
const Calculator = (props) => {
  
  return (
    <View>
        <TouchableOpacity
          onPress={props.onPress}
          style={styles.buttonX}
        >
            <Icon name={props.name} size={32}  style={styles.iconSpace} />
        </TouchableOpacity> 
    </View>
  );
};


const styles = StyleSheet.create({
    container: {
      flex: 2,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    container2:{
      flexDirection: 'row',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    container3:{
      flexDirection: 'row',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    textSpace:{
      paddingLeft: 10
    },
    textOperator:{
      fontWeight: 'bold',
      fontSize: 20
    },
    iconSpace:{
      justifyContent: 'center'
    },
  
    buttonX: {
 
        marginTop:10,
        paddingTop:15,
        paddingBottom:15,
        marginLeft:10,
        marginRight:10,
        alignItems: 'center',
        backgroundColor:'orange',
        borderRadius:200,
        borderWidth: 1,
        borderColor: '#fff',
        width:100,
      },
  });
export default Calculator;
