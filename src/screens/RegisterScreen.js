import React, {useState} from 'react'
import {Text, View, TextInput, TouchableOpacity } from 'react-native'
import { firebase } from "../firebase/config"

import styles from "../../styles/RegisterScreen/styles";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview";
    
    
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
        navigation.navigate('Login')
    }
    return (
        <View style={styles.container}>

            <KeyboardAwareScrollView
                keyboardShouldPersistTaps="always">
               
                <TextInput
                    style={styles.input}
                    placeholder="E-mail"
                    placeholderTextColor="#aaaaaa"
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                    onChangeText={(context) => setEmail(context)}
                />

                
                <TextInput
                    style={styles.input}
                    secureTextEntry={true}
                    placeholder="Password"
                    onChangeText={(content) => setPassword(content)}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                    placeholderTextColor="#aaaaaa"

                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => register()}>
                    <Text style={styles.buttonTitle}>Create account</Text>
                </TouchableOpacity>
                

                <View style={styles.footerView}>
                    <Text style={styles.footerText}>Already got an account? <Text onPress={onFooterLinkPress} style={styles.footerLink}>Log in</Text></Text>
                </View>
            </KeyboardAwareScrollView>
            {/* <Button
                title="Go Home"
                onPress={() => navigation.navigate("Home")}
            /> */}

        </View>
    );

}