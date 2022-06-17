import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, View, Text } from "react-native";

const Header = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>TodoList App</Text>
            <Text style={styles.text}>Desing for Mattias :D!</Text>
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "90%",
    },

    title: {
        alignSelf: "flex-start",
        fontSize: 26,
        color: "#f4fefd",
    },
    text: {
        alignSelf: "flex-start",
        fontSize: 26,
        color: "#00c8e0",
    },
});
