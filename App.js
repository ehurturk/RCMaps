import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, CheckBox } from 'react-native';


export default function App() {

  const [isSelected, setSelection] = useState(false);
  const [numTimes, setTimes] = useState(0);

  return (
    <View style={styles.container}>
      <Text>RC Maps</Text>
      <Text>LOGIN PAGE</Text>
      <br></br>
      
      <View style={styles.inputArea}>
        <Text>Email: </Text>
        <TextInput placeholder="kardeş email nerde? "></TextInput>

        <Text>Password: </Text>
        <TextInput  secureTextEntry={true}/>
      </View>

      <View style={styles.checkboxContainer}>
        

        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        
        />
        <Text style={styles.label}>AM I A PRO REACT DEV???</Text>

      </View>
      
      
      <Text>{isSelected ? "OW YE" : "O NO"}</Text>
      <Button 
      onPress={() => setTimes(numTimes+1)}
      title = "LOG IN"
      />
      
      <Text>You pressed the button {numTimes} times!</Text>

      <StatusBar style="auto" />
    </View>

   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // use camelCase
    alignItems: 'center',
    justifyContent: 'center',
    
  },

  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },

  label: {
    margin: 8,
  },

  inputArea: {

  },
});
