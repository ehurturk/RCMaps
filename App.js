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
