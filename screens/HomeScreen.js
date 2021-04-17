import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from "react-native-elements";


const HomeScreen = ({navigation}) => {
    return (
        <View style={styles.text}>
            <Text>This is the home screen bruh</Text>
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
