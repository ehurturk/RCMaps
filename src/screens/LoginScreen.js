import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity, KeyboardAvoidingView, StyleSheet} from "react-native";


import { firebase } from "../firebase/config"
import styles1 from "../../styles/LoginScreen/styles"


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
        // <KeyboardAvoidingView style={styles.container}>

        //     <View>

        //         <TextInput
        //             style={styles.input}
        //             placeholder='E-mail'
        //             placeholderTextColor="#aaaaaa"
        //             onChangeText={(text) => setEmail(text)}
        //             value={email}
        //             underlineColorAndroid="transparent"
        //             autoCapitalize="none"
        //         />


        //         <TextInput
        //             style={styles.input}
        //             placeholderTextColor="#aaaaaa"
        //             secureTextEntry
        //             placeholder='Password'
        //             onChangeText={(text) => setPassword(text)}
        //             value={password}
        //             underlineColorAndroid="transparent"
        //             autoCapitalize="none"
        //         />

        //         <TouchableOpacity
        //             style={styles.button}
        //             onPress={() => login()}>
        //             <Text style={styles.buttonTitle}>Log in</Text>
        //         </TouchableOpacity>

        //         <View style={styles.footerView}>
        //             <Text style={styles.footerText}>Don't have an account? <Text onPress={onFooterLinkPress} style={styles.footerLink}>Sign up</Text></Text>
        //         </View>

        //     </View>
        // </KeyboardAvoidingView>
        <View style={styles.container}>
            <Text style={styles.logo}>Login</Text>
            <View style={styles.inputView} >
                <TextInput
                    style={styles.inputText}
                    placeholder="Email..."
                    placeholderTextColor="#003f5c"
                    onChangeText={text => setEmail(text)} />
            </View>
            <View style={styles.inputView} >
                <TextInput
                    secureTextEntry
                    style={styles.inputText}
                    placeholder="Password..."
                    placeholderTextColor="#003f5c"
                    onChangeText={text => setPassword(text)} />
            </View>

            <TouchableOpacity style={styles.loginBtn} onPress={() => { register() }}>
                <Text style={styles.loginText}>LOG IN</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.loginText} onPress={onFooterLinkPress}>Already got an account? <Text onPress={onFooterLinkPress} style={styles.footerLink}>Log in</Text></Text>
            </TouchableOpacity>
        </View>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#003f5c',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        fontWeight: "bold",
        fontSize: 50,
        color: "#fb5b5a",
        marginBottom: 40,
    },
    inputView: {
        width: "80%",
        backgroundColor: "#465881",
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
    }
});