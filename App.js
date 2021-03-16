import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./app/screens/HomeScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "./app/components/AppText";
import AppButton from "./app/components/AppButton";
import Card from "./app/components/Card";
import DetailsScreen from "./app/screens/DetailsScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";

export default function App() {
  return <HomeScreen />;
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,AppText: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
