import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from "react-native-elements";


const HomeScreen = ({navigation}) => {
    return (
        <View style={styles.text}>
            <Text>This is the home screen bruh</Text>
            <Button
                color="#7C0C1D"
                onPress={() => navigation.navigate("Login")}
                title="Log in with existing account"
            />
            <Button
                color="#7C0C1D"
                onPress={() => navigation.navigate("Register")}
                title="Don't have an account? Create one"
            />
            <Button
                
                title="Go Back"
                onPress={() => navigation.goBack()}
            />
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    text: {
        flex: 1,
        alignItems: "center",
        padding: 10,
        justifyContent: "center"

    }
});
