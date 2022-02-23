import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import AppText from "../components/AppText";
import colors from "../config/colors";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

function MessOwnerScreen({ navigation }) {
  return (
    <View style={styles.viewtext}>
      <AppText style={styles.textlock}>
        Hello... {"\n"} Please Contact on this No,{"\n"}To add Mess in App or
        for any queries realted to app. {"\n"}
        "1234567890"
        {"\n"}
        {"\n"}
        {"\n"}
        We are working on this section.
        {"\n"}
        Thank You for using our App.
      </AppText>
      <Button
        title="Screen sample"
        onPress={() => navigation.navigate("OwnerAccountScreen")}
      />
    </View>
  );
}

export default MessOwnerScreen;

const styles = StyleSheet.create({
  textlock: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 24,
    lineHeight: 45,
    fontStyle: "italic",
    color: "dodgerblue",
    textTransform: "capitalize",
  },
  viewtext: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#EFEFEF",
  },
});
