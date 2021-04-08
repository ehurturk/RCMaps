import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
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

const Stack = createStackNavigator();

export default function App() {
  const [isSelected, setSelection] = useState(false);
  const [numTimes, setTimes] = useState(0);
  const logInScreen = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="LogIn" component={LogInScreen}>
            {/* //Burayı çözemedim */}
            <ImageBackground
              source={require("./RobertCollegeGouldHall1.jpg")}
              style={styles.backgroundImage}
            >
              <Text>RC Maps</Text>
              <Text>LOGIN PAGE</Text>
              <View style={styles.inputArea}>
                <Text>Email: </Text>
                <TextInput
                  style={styles.textInput}
                  placeholder="E-mail"
                ></TextInput>

                <Text>Password: </Text>
                <TextInput
                  style={styles.textInput}
                  secureTextEntry={true}
                  placeholder="Password"
                />
              </View>
              <View style={styles.checkboxContainer}>
                <CheckBox
                  value={isSelected}
                  onValueChange={setSelection}
                  style={styles.checkbox}
                />
                <Text style={styles.label}>Remember me</Text>
              </View>
              <Button
                color="#7C0C1D"
                onPress={() => setTimes(numTimes + 1)}
                title="LOG IN"
              />
              <Text style={styles.text}>
                You pressed the button {numTimes} times!
              </Text>
              <StatusBar style="auto" />
            </ImageBackground>
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    );
  };
  logInScreen();
}

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
