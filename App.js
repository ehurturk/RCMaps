//#region IMPORTS

import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import LoginScreen from "./screens/LoginScreen";

import { StyleSheet } from "react-native";
import HomeScreen from "./screens/HomeScreen";

//#endregion


const Stack = createStackNavigator(); // holds all the screens (as a Stack data structures)

const globalScreenArgs = {
  headerStyle: { backgroundColor: "#2C6BED" },
  headerTiltStyle: { color: "white" },
  headerTintColor: "white"
}; // the global screen argument object which configures all screens

export default function App() {

  //#region DECLERATIONS!!!

  //#endregion

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={globalScreenArgs}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

//#region CSS!!!
const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: "#fff", // use camelCase
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
  textInput: {
    borderColor: "black",
    borderWidth: 1,
    width: 250,
  },

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

//#endregion