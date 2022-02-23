import React, { useState } from "react";
import { Button, Text, View, style, StyleSheet } from "react-native";
import Screen from "./app/components/Screen";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

import TestScreen from "./app/screens/TestScreen";
import DetailsScreen from "./app/screens/DetailsScreen";
import ListingScreen from "./app/screens/ListingsScreen";

const Link = () => {
  const navigation = useNavigation();

  return (
    <Button title="Clicked" onPress={() => navigation.navigate("TestScreen")} />
  );
};

const Tweets = ({ navigation }) => (
  <Screen>
    <Text>Tweets</Text>
    <Link />
  </Screen>
);

const TweetsDetails = ({ navigation }) => (
  <Screen>
    <Text>Tweets Details</Text>
    <Button
      title="Go To Tweets"
      onPress={() => navigation.navigate("Tweets")}
    />
  </Screen>
);

const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator initialRouteName="Tweets">
    <Stack.Screen name="Tweets" component={Tweets} />
    <Stack.Screen name="TweetsDetails" component={TweetsDetails} />
    <Stack.Screen name="TestScreen" component={TestScreen} />
    <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
    <Stack.Screen name="ListingScreen" component={ListingScreen} />
  </Stack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
