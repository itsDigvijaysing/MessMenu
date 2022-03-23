import {
  ImageBackground,
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  SafeAreaView,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import React from "react";

import colors from "../config/colors";

function MessOwnerCreateAccScreen({ navigation }) {
  const [pass, onChangePass] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);
  const [email, onChangeEmail] = React.useState(null);
  const [name, onChangeName] = React.useState(null);
  const [address, onChangeAddress] = React.useState(null);

  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/snacks-commercial.jpg")}
      blurRadius={5}
    >
      <ScrollView>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            alignContent: "center",
            marginTop: "10%",
          }}
        >
          <View style={styles.plainContainer}>
            <AppText
              style={{
                fontWeight: "bold",
                textAlign: "center",
                paddingTop: 15,
                fontSize: 30,
                color: colors.darkgrey,
              }}
            >
              Welcome
            </AppText>
            <AppText
              style={{
                fontWeight: "bold",
                textAlign: "center",
                padding: 15,
                fontSize: 20,
              }}
            >
              Enter your Credentials
            </AppText>
            <TextInput
              style={styles.input}
              onChangeText={onChangeEmail}
              value={email}
              placeholder="Email ID (User ID)"
            />
            <TextInput
              style={styles.input}
              onChangeText={onChangeName}
              value={name}
              placeholder="Enter Your Mess Name"
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
            <View style={styles.boxbuttonContainer}>
              <AppButton
                title="Create Accout"
                color="secondary"
                onPress={() => navigation.navigate("MessOwnerLoginScreen")}
              />
            </View>
          </View>

          <View style={styles.buttonContainer}>
            <AppButton
              title="Login"
              color="primary"
              onPress={() => navigation.navigate("MessOwnerLoginScreen")}
            />
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    margin: 10,
    alignSelf: "center",
    borderWidth: 1,
    borderRadius: 25,
    width: "80%",
    backgroundColor: colors.white,
    borderColor: colors.medium,
    padding: 15,
  },
  background: {
    flex: 1,
  },
  buttonContainer: {
    marginTop: 25,
    padding: 20,
    width: "80%",
  },
  boxbuttonContainer: {
    padding: 20,
    width: "90%",
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
    // position: "absolute",
    // height: "80%",
    width: "85%",
    alignItems: "center",
    // justifyContent: "center",
    // alignSelf: "center",
    backgroundColor: "#f8f8f8",
    borderRadius: 20,
  },
});

export default MessOwnerCreateAccScreen;
