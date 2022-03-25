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
  ScrollView,
} from "react-native";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";

import colors from "../config/colors";
import * as Yup from "yup";
import listingsApi from "../api/listings";
import Toast from "react-native-simple-toast";
import { baseURL } from "../api/baseurl";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

function MessOwnerLoginScreen({ route, navigation }) {
  const [email, onChangeEmail] = React.useState(null);
  const [pass, onChangePass] = React.useState(null);

  let AllData = null;
  const authURL = baseURL + "/auth";

  let toAccountLogin = () => {
    if (email && pass) {
      try {
        fetch(authURL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email.replace(/\s/g, "").toLowerCase(),
            pass: pass,
          }),
        })
          .then((r) => r.json())
          .then((data) => {
            AllData = data;
            // console.log(AllData);
          })
          .then((res) => {
            // this.setState({ message: "New Value Added" });
            if (AllData) {
              Toast.show("Login Successful");
              navigation.navigate("OwnerAccountScreen", {
                alldata: AllData,
              });
            } else {
              Toast.show("Please ReCheck Email & Password");
            }
            // navigation.navigate("MessOwnerLoginScreen");
          });
      } catch (error) {
        console.log("Error : " + error);
        Toast.show("There are some errors");
      }
    } else {
      Toast.show("Please fill all the Credentials");
    }
  };

  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/snacks-commercial.jpg")}
      blurRadius={5}
    >
      {/* <ScrollView> */}
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
              padding: 15,
              fontSize: 30,
              color: colors.darkgrey,
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
            Enter your Login Details
          </AppText>
          <TextInput
            style={styles.input}
            onChangeText={onChangeEmail}
            value={email}
            placeholder="UserName / Email ID"
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangePass}
            value={pass}
            secureTextEntry={true}
            placeholder="Password"
          />
          <View style={styles.boxbuttonContainer}>
            <AppButton
              title="Login"
              color="primary"
              // onPress={() => console.log(authURL)}
              onPress={() => toAccountLogin()}
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
      </View>
      {/* </ScrollView> */}
    </ImageBackground>
  );
}

export default MessOwnerLoginScreen;

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
    // justifyContent: "flex-end",
    // alignItems: "center",
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
    // top: "20%",
    // height: "75%",
    paddingTop: "10%",
    paddingBottom: "10%",
    width: "85%",
    alignItems: "center",
    backgroundColor: "#f8f8f8",
    borderRadius: 20,
  },
});
