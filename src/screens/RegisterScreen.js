import React, {useState} from 'react'
import {Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, StyleSheet } from 'react-native'
import { firebase } from "../firebase/config"

import styles1 from "../../styles/RegisterScreen/styles";
// import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview";
    
    
export default function RegisterScreen({navigation}) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const register = () => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(
                (authUser) => {
                    authUser.user.updateProfile({
                        displayName: email,
                        photoURL: "../user.png"
                    });

                    navigation.navigate("Landing");

                    console.log(authUser.user);
                }
            )
            .catch((e) => { alert(e) });
    };

    const onFooterLinkPress = () => {
        navigation.navigate('Home')
    }
    return (
    //     <KeyboardAvoidingView style={styles.container}>

               
    //             <TextInput
    //                 style={styles.input}
    //                 placeholder="E-mail"
    //                 placeholderTextColor="#aaaaaa"
    //                 underlineColorAndroid="transparent"
    //                 autoCapitalize="none"
    //                 onChangeText={(context) => setEmail(context)}
    //             />

                
    //             <TextInput
    //                 style={styles.input}
    //                 secureTextEntry={true}
    //                 placeholder="Password"
    //                 onChangeText={(content) => setPassword(content)}
    //                 underlineColorAndroid="transparent"
    //                 autoCapitalize="none"
    //                 placeholderTextColor="#aaaaaa"

    //             />
    //             <TouchableOpacity
    //                 style={styles.button}
    //                 onPress={() => register()}>
    //                 <Text style={styles.buttonTitle}>Create account</Text>
    //             </TouchableOpacity>
                

    //             <View style={styles.footerView}>
    //                 <Text style={styles.footerText}>Already got an account? <Text onPress={onFooterLinkPress} style={styles.footerLink}>Log in</Text></Text>
    //             </View>
    //         {/* <Button
    //             title="Go Home"
    //             onPress={() => navigation.navigate("Home")}
    //         /> */}
    // </KeyboardAvoidingView>


        <View style={styles.container}>
            <Text style={styles.logo}>Register</Text>
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
                <Text style={styles.loginText}>REGISTER</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.loginText} onPress={onFooterLinkPress}>Already got an account? <Text onPress={onFooterLinkPress} style={styles.footerLink}>Log in</Text></Text>
            </TouchableOpacity>
        </View>


    );

}

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