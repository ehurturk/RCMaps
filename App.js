import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  CheckBox,
  ImageBackground,
} from "react-native";

export default function App() {
  const [isSelected, setSelection] = useState(false);
  const [numTimes, setTimes] = useState(0);
  return (
    <ImageBackground
      source={require("./RobertCollegeGouldHall1.jpg")}
      style={styles.backgroundImage}
    >
      <Text>RC Maps</Text>
      <Text>LOGIN PAGE</Text>
      <View style={styles.inputArea}>
        <Text>Email: </Text>
        <TextInput placeholder="kardeş email nerde? "></TextInput>

        <Text>Password: </Text>
        <TextInput secureTextEntry={true} placeholder="parola nerde kardeşm?" />
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
        color="#7C0C1D"
        onPress={() => setTimes(numTimes + 1)}
        title="LOG IN"
      />
      <Text style={styles.text}>You pressed the button {numTimes} times!</Text>
      <StatusBar style="auto" />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: "#fff", // use camelCase
  //   alignItems: "center",
  //   justifyContent: "center",
  // },

  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    alignItems: "center",
    justifyContent: "center",
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

  inputArea: {},
});
