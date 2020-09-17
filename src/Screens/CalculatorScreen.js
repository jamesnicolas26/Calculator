import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image, Alert} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Calculator from '../Components/Calculator';

const CalculatorScreen = () => {
    

    const [firstint, first] = useState('');
    const [secondint, second] = useState('');
    const [operator, setOperator] = useState('');


    validate = (firstint, secondint, operator) => {
      
        let value
        let regex = /^([+-]?[1-9]\d*\.?\d*|0)$/
        console.log(firstint);
        if (regex.test(firstint) === true ) {
            if(regex.test(secondint) === true ){
                if(operator === "+"){
					value=(parseFloat(firstint) + parseFloat(secondint)).toString();
					Alert.alert(value);
				}else if(operator === "-"){
					value=(parseFloat(firstint) - parseFloat(secondint)).toString();
					Alert.alert(value);
				}else if(operator === "*"){
					value=(parseFloat(firstint) * parseFloat(secondint)).toString();
					Alert.alert(value);
				}else if(operator ==="/"){
					value=(parseFloat(firstint) / parseFloat(secondint)).toString();
					Alert.alert(value);
				}
            }else{
                Alert.alert("Error Input", "Please Enter a valid Integer");
            }
        } else {
            Alert.alert("Error Input", "Please Enter a valid Integer");
        }
      }

  return (

    <View style={styles.container} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
    <ScrollView>
      <StatusBar style="auto" />
      <View style={styles.container3}>
        <Text style={styles.textSpace}>First Integer</Text>
          <Text>{"              "}</Text>
        <Text style={styles.textSpace}>Second Integer</Text>
      </View>
      <View style={styles.container3}>
        <TextInput
        value={firstint}
        style={{ height: 50, width: 100, borderColor: 'white', borderWidth: 2,  color:'white', paddingLeft: 20 }} 
        onChangeText={value => first(value)}
        keyboardType="numeric"
        />
          <Text style={styles.textOperator}>{"    "}{operator}{"    "}</Text>
        <TextInput
         value={secondint}
        style={{ height: 50, width: 100, borderColor: 'white', borderWidth: 2, color:'white', paddingLeft: 20 }}
        onChangeText={value => second(value)}
        keyboardType="numeric"
        />
      </View>
      <View style={styles.container2}>
      <Calculator name="plus" onPress={() => {setOperator('+');}}></Calculator>
      <Text>{"                    "}</Text>
      <Calculator name="minus" onPress={() => {setOperator('-');}}></Calculator>
      </View>

      <View style={styles.container2}>
      <Calculator name="times" onPress={() => {setOperator('*');}}></Calculator>
      <Text>{"                    "}</Text>
      <Calculator name="divide" onPress={() => {setOperator('/');}}></Calculator>
      </View>
    <View style={styles.container2}>
        <TouchableOpacity
            onPress={() => { 
              validate(firstint, secondint, operator); 
            }}
            style={styles.buttonX}
          ><Text style={styles.textSpace2}>Submit</Text>
        </TouchableOpacity> 

        <Text>{"        "}</Text>
        <TouchableOpacity
            onPress={() => {
              setOperator('')
              first('')
              second('')
            }}
            style={styles.buttonX}
          ><Text style={styles.textSpace2}>Clear</Text>
        </TouchableOpacity> 
      </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#696969',
    color: 'white'
  },

  container2:{
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#696969',
    color: 'white'
  },

  container3:{
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#696969',
    color: 'white'
  },

  textSpace:{
    paddingLeft: 10,
    color: 'white'
  },
  textSpace2:{
    color: 'white',
    width: 50,
    height:50
  },
  textOperator:{
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white'
  },
  iconSpace:{
    justifyContent: 'center',
  },

  buttonX:{
    marginBottom: 50,
    marginTop: 50,
    borderColor: 'white',
    borderWidth: 2,
    borderStyle: 'solid',
    paddingLeft: 5,
    width: 60,
  },
  resultBox:{
    height:90,
    width:300,
    backgroundColor:'#f6f6f6',
    marginTop: 50,
    borderRadius:25
  },
  resultText:{
    padding:20,
    fontSize:30,
    fontWeight:'bold',
    textAlign:'right'
  }
});

export default CalculatorScreen;

