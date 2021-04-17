import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from "react-native-elements"

export default function RegisterScreen() {

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

                    console.log(authUser.user);
                }
            )
            .catch((e) => { alert(e) });
    };

    return (
        <View>
            <Text>REGISTER BRUH</Text>
            <Button
                color="#7C0C1D"
                onPress={() => register()}
                title="LOG IN"
            />
        </View>
    )
}

const styles = StyleSheet.create({})
