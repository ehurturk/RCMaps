//#region IMPORTS

import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import LoginScreen from "./src/screens/LoginScreen";
import HomeScreen from "./src/screens/HomeScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import Landing from "./src/screens/Landing";
import { LogBox } from 'react-native';

LogBox.ignoreLogs(['Setting a timer']);

//#endregion


const Stack = createStackNavigator(); // holds all the screens (as a Stack data structures)

const globalScreenArgs = {
  headerStyle: {
    backgroundColor: "#2C6BED",
    justifyContent: 'center',
  },
  headerTiltStyle: { color: "white" },
  headerTintColor: "white"
}; // the global screen argument object which configures all screens

export default function App() {

  //#region DECLERATIONS!!!

  //#endregion

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={globalScreenArgs}>
        <Stack.Screen options={ {headerShown: false}} name="Home" component={HomeScreen} />
        <Stack.Screen options={ {headerShown: false}} name="Register" component={RegisterScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen options={{headerShown: false}} name="Landing" component={Landing}/>

        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
