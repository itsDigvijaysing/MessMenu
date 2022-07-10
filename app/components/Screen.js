import React from "react";
import Constants from "expo-constants";
import { SafeAreaView, StyleSheet, View } from "react-native";

function Screen({ children, style }) {
  return <SafeAreaView style={[styles.Screen, style]}>{children}</SafeAreaView>; // If gettinh any padding issue Replace {children} by <View style={style}>{children}</View>
}

export default Screen;

const styles = StyleSheet.create({
  Screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
});
