import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ImageBackground, TouchableOpacity } from 'react-native';
import { firebase } from "../firebase/config"

const image = { uri: "https://reactjs.org/logo-og.png" };

const HomeScreen = ({ navigation }) => {

  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  const login = () => {
    try {
      firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
        navigation.navigate("Landing");
      }).catch((e) => alert(e));
    } catch (error) {
      alert(error);
    }

  };

  const onFooterLinkPress = () => {
    navigation.navigate('Register')
  }


  return (

    <View style={styles.container}>
        <ImageBackground source={require("../../assets/RobertCollegeGouldHall1.png")} resizeMode={"cover"} style={styles.image}>
          <Text style={styles.logo}>RCMaps</Text>
          <View style={styles.inputView} >
            <TextInput
              style={styles.inputText}
              placeholder="Email..."
              placeholderTextColor="#a1a1a1"
              onChangeText={text => setEmail(text)} />
          </View>
          <View style={styles.inputView} >
            <TextInput
              secureTextEntry
              style={styles.inputText}
              placeholder="Password..."
              placeholderTextColor="#a1a1a1"
              onChangeText={text => setpassword(text)} />
          </View>
          <TouchableOpacity>
            <Text style={styles.forgot}>Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginBtn} onPress={() => { login() }}>
            <Text style={styles.loginText}>LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.loginText} onPress={onFooterLinkPress}>Don't have an account? <Text onPress={onFooterLinkPress} style={styles.footerLink}>Sign up.</Text></Text>
          </TouchableOpacity>
      </ImageBackground>
    </View>

  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#003f5c',
    // alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontWeight: "bold",
    fontSize: 50,
    color: "#fff",
    marginBottom: 40,
  },
  inputView: {
    width: "80%",
    backgroundColor: "#2a3357",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20
  },
  inputText: {
    height: 50,
    color: "white"
  },
  forgot: {
    color: "white",
    fontSize: 11
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#fb5b5a",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10
  },
  loginText: {
    color: "white"
  },
  footerLink: {
    fontWeight: "bold",
    color: "#fb5b5a"
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center'
  }
});
