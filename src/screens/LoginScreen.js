import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity, KeyboardAvoidingView} from "react-native";


import { firebase } from "../firebase/config"
import styles from "../../styles/LoginScreen/styles"
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


const LoginScreen = ({ navigation }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const login = () => {
        try {
            firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
                navigation.navigate("Landing");
            }).catch((e) => alert(e));
        } catch (error) {
            alert("No such account, please create one");
        }

    };

    const onFooterLinkPress = () => {
        navigation.navigate('Register')
    }
    
    return (
        <KeyboardAvoidingView style={styles.container}>



                <TextInput
                    style={styles.input}
                    placeholder='E-mail'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />


                <TextInput
                    style={styles.input}
                    placeholderTextColor="#aaaaaa"
                    secureTextEntry
                    placeholder='Password'
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => login()}>
                    <Text style={styles.buttonTitle}>Log in</Text>
                </TouchableOpacity>

                <View style={styles.footerView}>
                    <Text style={styles.footerText}>Don't have an account? <Text onPress={onFooterLinkPress} style={styles.footerLink}>Sign up</Text></Text>
                </View>
=
            {/* <Button
                color="#7C0C1D"
                onPress={() => login()}
                title="LOG IN"
            />

            <StatusBar style="auto" />
            <Button
                title="Go Home"
                onPress={()=>navigation.navigate("Home")}
            /> */}
        </KeyboardAvoidingView>
    );
};

export default LoginScreen;

