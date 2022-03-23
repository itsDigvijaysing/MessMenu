import React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Image,
  Text,
  Button,
} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import AppButton from "../components/AppButton";
import colors from "../config/colors";

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      blurRadius={0}
      style={styles.background}
      source={require("../assets/clean-food-commercial.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/mess-menu.png")}
        />
        <Text style={styles.heading}>Let's Check today's Menu</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton
          title="Customer Login"
          color="primary"
          onPress={() => navigation.navigate("ListingsScreen")}
        />
        <AppButton
          title="Mess Owner Login"
          color="secondary"
          onPress={() => navigation.navigate("MessOwnerLoginScreen")}
        />
      </View>
    </ImageBackground>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonContainer: {
    padding: 20,
    width: "100%",
  },
  heading: {
    color: colors.black,
    fontSize: 16,
    fontWeight: "bold",
    textTransform: "capitalize",
    textAlign: "center",
    paddingVertical: 10,
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 40,
    alignItems: "center",
  },
});
