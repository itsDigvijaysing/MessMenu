import React, { useState } from "react";
import {
  Share,
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
import DetailsScreen from "./app/screens/DetailsScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import MessOwnerLoginScreen from "./app/screens/MessOwnerLoginScreen";
import HomeScreen from "./app/screens/HomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import OwnerAccountScreen from "./app/screens/OwnerAccountScreen";
import MessOwnerCreateAccScreen from "./app/screens/MessOwnerCreateAccScreen";
import UpdateImageScreen from "./app/screens/UpdateImageScreen";
import UpdateDetailsScreen from "./app/screens/UpdateDetailsScreen";

// It only allow basic txt send due to expo so export and add react-native-share
const onShare = async () => {
  try {
    const result = await Share.share({
      // title: route.params.onemessname,
      message: "Welcome to Mess Menu App \n Store Link: #",
    });
  } catch (error) {
    alert(error.message);
  }
};

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
      name="MessOwnerLoginScreen"
      component={MessOwnerLoginScreen}
      options={{ title: "Owner Login" }}
    />
    <Stack.Screen
      name="ListingsScreen"
      component={ListingsScreen}
      options={{ title: "Home Listing Layout" }}
    />
    <Stack.Screen
      name="ViewImageScreen"
      component={ViewImageScreen}
      title={({ route }) => ({
        title: route.params.onemessname,
      })}
      // options={{
      //   headerStyle: {
      //     backgroundColor: "#000",
      //   },
      //   // title: ({ route }) => ({ title: route.params.onemessname }),
      //   headerRight: () => (
      //     <TouchableOpacity onPress={onShare}>
      //       <MaterialCommunityIcons
      //         name="share-variant"
      //         color="white"
      //         size={32}
      //       />
      //     </TouchableOpacity>
      //   ),
      // }}

      // Worked header messname after 2+ hrs
      options={({ route }) => ({
        title: route.params.onemessname,
        headerStyle: {
          backgroundColor: "#000",
        },
        headerRight: () => (
          <TouchableOpacity onPress={onShare}>
            <MaterialCommunityIcons
              name="share-variant"
              color="white"
              size={32}
            />
          </TouchableOpacity>
        ),
      })}
    />
    <Stack.Screen
      name="OwnerAccountScreen"
      component={OwnerAccountScreen}
      options={{ title: "Owner Account Section" }}
    />
    <Stack.Screen
      name="MessOwnerCreateAccScreen"
      component={MessOwnerCreateAccScreen}
      options={{ title: "New Mess Account" }}
    />
    <Stack.Screen
      name="UpdateImageScreen"
      component={UpdateImageScreen}
      options={{ title: "Update Image Screen" }}
    />
    <Stack.Screen
      name="UpdateDetailsScreen"
      component={UpdateDetailsScreen}
      options={{ title: "Update Details Screen" }}
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
