import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native";
import HomeScreen from "./app/screens/HomeScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "./app/components/AppText";
import AppButton from "./app/components/AppButton";
import Card from "./app/components/Card";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import DetailsScreen from "./app/screens/DetailsScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import TestScreen from "./app/screens/TestScreen";
import ListItem from "./app/components/ListItem";
import CustomerAccountScreen from "./app/screens/CustomerAccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";

export default function App() {
  const [firstName, setFirstName] = useState("");

  return <ViewImageScreen></ViewImageScreen>;
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,AppText: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
