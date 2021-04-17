import React, { useState } from "react";
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    CheckBox,
    ImageBackground,} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Button } from "react-native-elements";
// import { Icon } from "react-native-vector-icons/FontAwesome";



const LoginScreen = ({ navigation }) => {
    const [isSelected, setSelection] = useState(false);
    const [numTimes, setTimes] = useState(0);
    return (
        <View style={styles.text}>
            <ImageBackground
                
                source={require("../RobertCollegeGouldHall1.jpg")}
                style={styles.backgroundImage}>
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
            <Button
                title="Go Home"
                onPress={()=>navigation.navigate("Home")}
            />
        </View>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    text: {
        flex: 1,
        alignItems: "center",
        padding: 10,
        justifyContent: "center"

    },
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