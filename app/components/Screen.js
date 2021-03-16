import React from "react";
import Constants from "expo-constants";
import { SafeAreaView, StyleSheet, View } from "react-native";

function Screen({ children }) {
  return <SafeAreaView style={styles.Screen}>{children}</SafeAreaView>;
}

export default Screen;

const styles = StyleSheet.create({
  Screen: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "red",
  },
});
