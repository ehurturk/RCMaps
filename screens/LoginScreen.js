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
import firebase, { db, auth } from "../firebase";
// import { Icon } from "react-native-vector-icons/FontAwesome";
// import * as firebase from "firebase"

const LoginScreen = ({ navigation }) => {
    const [isSelected, setSelection] = useState(false);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const login = () => {
        auth.signInWithEmailAndPassword(email, password).then(() => {
            navigation.navigate("Home");
        }).catch((e)=>alert(e));
    };
    
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
                        onChangeText={(context)=>setEmail(context)}
                    />

                    <Text>Password: </Text>
                    <TextInput
                        style={styles.textInput}
                        secureTextEntry={true}
                        placeholder="Password"
                        onChangeText={(content)=>setPassword(content)}
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
                    onPress={() => login()}
                    title="LOG IN"
                />

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