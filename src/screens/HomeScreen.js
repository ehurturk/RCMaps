import React from 'react';
import { StyleSheet, Text, View, ImageBackground} from 'react-native';
import { Button } from "react-native-elements";


const HomeScreen = ({navigation}) => {
    return (
        <ImageBackground
                source={require("../../RobertCollegeGouldHall1.png")}
                style={ styles.backgroundImage}>
            <Text>This is the home screen bruh</Text>
            <Button
                color="#7C0C1D"
                onPress={() => navigation.navigate("Login")}
                title="Log in with existing account"
            />
            <Button
                color="#7C0C1D"
                onPress={() => {
                    console.log("GOing to register");
                    navigation.navigate("Register")
                    }
                }

                title="Don't have an account? Create one"
            />
        </ImageBackground>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: "cover",
        alignItems: "center",
        justifyContent: "center",
    }
});
