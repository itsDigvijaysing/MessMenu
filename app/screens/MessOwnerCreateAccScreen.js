import {
  ImageBackground,
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  SafeAreaView,
  useWindowDimensions,
} from "react-native";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import React from "react";

import colors from "../config/colors";

function MessOwnerCreateAccScreen({ navigation }) {
  const [text, onChangeText] = React.useState(null);
  const [pass, onChangePass] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);
  // const [email, onChangeEmail] = React.useState(null);
  const [name, onChangeName] = React.useState(null);
  const [address, onChangeAddress] = React.useState(null);

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
            paddingTop: 15,
            fontSize: 30,
            color: colors.secondary,
          }}
        >
          Welcome...
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
          placeholder="Email ID (User ID)"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeName}
          value={name}
          placeholder="Enter Your Name"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Enter Your Contact No"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeAddress}
          value={address}
          placeholder="Enter Your Address"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangePass}
          value={pass}
          placeholder="Create New Password"
        />
        <View style={styles.buttonContainer}>
          <AppButton
            title="Create Accout"
            color="secondary"
            onPress={() => navigation.navigate("MessOwnerScreen")}
          />
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <AppButton
          title="Login"
          color="primary"
          onPress={() => navigation.navigate("MessOwnerScreen")}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    margin: 10,
    borderWidth: 3,
    borderRadius: 20,
    width: "80%",
    backgroundColor: "#f8f4f4",
    padding: 15,
  },
  background: {
    flex: 1,
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
    top: "15%",
    height: "70%",
    width: "80%",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 20,
  },
});

export default MessOwnerCreateAccScreen;
