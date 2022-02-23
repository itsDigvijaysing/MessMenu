import React, { useState } from "react";
import { Button, Text, View, style, StyleSheet } from "react-native";
import Screen from "./app/components/Screen";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import TestScreen from "./app/screens/TestScreen";
import DetailsScreen from "./app/screens/DetailsScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import MessOwnerScreen from "./app/screens/MessOwnerScreen";
import HomeScreen from "./app/screens/HomeScreen";

const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator initialRouteName="WelcomeScreen">
    <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
    <Stack.Screen name="HomeScreen" component={HomeScreen} />
    <Stack.Screen name="TestScreen" component={TestScreen} />
    <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
    <Stack.Screen name="MessOwnerScreen" component={MessOwnerScreen} />
    <Stack.Screen name="ListingsScreen" component={ListingsScreen} />
  </Stack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
