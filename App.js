import React, { useState } from "react";
import {
  Button,
  Text,
  View,
  style,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Screen from "./app/components/Screen";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import TestScreen from "./app/screens/TestScreen";
import DetailsScreen from "./app/screens/DetailsScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import MessOwnerScreen from "./app/screens/MessOwnerScreen";
import HomeScreen from "./app/screens/HomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import OwnerAccountScreen from "./app/screens/OwnerAccountScreen";

const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator
    initialRouteName="WelcomeScreen"
    screenOptions={{
      headerTitleAlign: "center",
      headerStyle: {
        backgroundColor: "#ffe66d",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <Stack.Screen
      name="WelcomeScreen"
      component={WelcomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="HomeScreen"
      component={HomeScreen}
      screenOptions={{ headerStyle: { backgroundColor: "#fc5c65" } }}
      options={{ title: "Home" }}
    />
    <Stack.Screen
      name="DetailsScreen"
      component={DetailsScreen}
      options={{ title: "Details" }}
    />
    <Stack.Screen
      name="MessOwnerScreen"
      component={MessOwnerScreen}
      options={{ title: "Mess Owner Section" }}
    />
    <Stack.Screen
      name="ListingsScreen"
      component={ListingsScreen}
      options={{ title: "Home Listing Layout" }}
    />
    <Stack.Screen
      name="ViewImageScreen"
      component={ViewImageScreen}
      options={{
        title: "Full Resolution Image",
        headerStyle: {
          backgroundColor: "#000",
        },
        headerRight: () => (
          <TouchableOpacity onPress={() => console.log("Share Image")}>
            <MaterialCommunityIcons
              name="share-variant"
              color="white"
              size={32}
            />
          </TouchableOpacity>
        ),
      }}
      // options={{ headerShown: false }}
    />
    <Stack.Screen
      name="OwnerAccountScreen"
      component={OwnerAccountScreen}
      options={{ title: "Owner Account Section" }}
    />
    <Stack.Screen
      name="TestScreen"
      component={TestScreen}
      options={{ title: "Test Screen" }}
    />
  </Stack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
