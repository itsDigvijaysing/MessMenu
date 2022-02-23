import React, { useState } from "react";
import { Button, Text, View, style, StyleSheet } from "react-native";
import Screen from "./app/components/Screen";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import TestScreen from "./app/screens/TestScreen";

const Tweets = ({ navigation }) => (
  <Screen>
    <Text>Tweets</Text>
    <Button
      title="View Tweet"
      onPress={() => navigation.navigate("TestScreen")}
    />
  </Screen>
);

const TweetsDetails = () => (
  <Screen>
    <Text>Tweets Details</Text>
  </Screen>
);

const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator initialRouteName="Tweets">
    <Stack.Screen name="Tweets" component={Tweets} />
    <Stack.Screen name="TweetsDetails" component={TweetsDetails} />
    <Stack.Screen name="TestScreen" component={TestScreen} />
  </Stack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   fortext: {
//     justifyContent: "flex-end",
//     alignItems: "center",
//   },
// });
