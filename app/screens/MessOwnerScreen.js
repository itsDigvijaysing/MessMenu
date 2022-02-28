import React from "react";
import {
  ImageBackground,
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  SafeAreaView,
  useWindowDimensions,
  KeyboardAvoidingView,
} from "react-native";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";

import colors from "../config/colors";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

function MessOwnerScreen({ navigation }) {
  const [text, onChangeText] = React.useState(null);
  const [pass, onChangePass] = React.useState(null);

  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/snacks-commercial.jpg")}
      blurRadius={5}
    >
      <View style={styles.plainContainer}>
        <AppText
          style={{
            fontWeight: "bold",
            textAlign: "center",
            padding: 15,
            fontSize: 30,
            color: colors.primary,
          }}
        >
          Welcome Back
        </AppText>
        <AppText
          style={{
            fontWeight: "bold",
            textAlign: "center",
            padding: 15,
            fontSize: 20,
          }}
        >
          Plz Enter your Credentials
        </AppText>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="UserName / Email ID"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangePass}
          value={pass}
          placeholder="Password"
        />
        <View style={styles.buttonContainer}>
          <AppButton
            title="Login"
            color="primary"
            onPress={() => navigation.navigate("OwnerAccountScreen")}
          />
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <AppButton
          title="Create New Account"
          color="secondary"
          onPress={() => navigation.navigate("MessOwnerCreateAccScreen")}
        />
      </View>
    </ImageBackground>
  );
}

export default MessOwnerScreen;

const styles = StyleSheet.create({
  input: {
    height: 50,
    margin: 15,
    borderWidth: 3,
    borderRadius: 20,
    width: "80%",
    backgroundColor: "#f8f4f4",
    padding: 15,
  },
  background: {
    height: 820,
    width: 420,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonContainer: {
    padding: 20,
    width: "80%",
  },
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
  plainContainer: {
    position: "absolute",
    top: "20%",
    height: "60%",
    width: "80%",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 20,
  },
});
