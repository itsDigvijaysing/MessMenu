import {
  ImageBackground,
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  SafeAreaView,
  ToastAndroid,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import React from "react";
import * as Yup from "yup";

import colors from "../config/colors";
import listingsApi from "../api/listings";
import client from "../api/client";
import useApi from "../hooks/useApi";
import { useState } from "react";
import Toast from "react-native-simple-toast";
import { baseURL } from "../api/baseurl";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label(),
  name: Yup.string().required().label(),
  pass: Yup.string().required().min(4).label(),
});

function MessOwnerCreateAccScreen({ navigation }) {
  const [email, onChangeEmail] = React.useState(null);
  const [pass, onChangePass] = React.useState(null);
  const [name, onChangeName] = React.useState(null);

  // const { data: listings, error, loading } = useApi(listingsApi.postListings);
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
  // const postroute = listingsApi.postListings;

  let onCreateAccount = () => {
    if (email && name && pass) {
      if (pass.length > 4 && reg.test(email)) {
        try {
          fetch(baseURL, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: email.replace(/\s/g, "").toLowerCase(),
              messname: name.replace(/\s+/g, " "),
              pass: pass,
            }),
          })
            .then((r) => r.json())
            // .then((data) => {
            //   console.log(data);
            // })
            .then((res) => {
              // this.setState({ message: "New Value Added" });
              Toast.show("Account Created Successfully");
              navigation.navigate("MessOwnerLoginScreen");
            });
        } catch (error) {
          console.log("Error : " + error);
          Toast.show("There are some errors");
        }
      } else if (pass.length <= 4) {
        Toast.show("Minimum Password Length is 5");
      } else {
        Toast.show("Please Enter Valid Email");
      }
    } else {
      Toast.show("Please fill all the Credentials ...");
    }
  };

  // const handleSubmit = async (userInfo) => {
  //   const result = await

  //   if (!result.ok) {
  //     if (result.data) setError(result.data.error);
  //     else {
  //       setError("An unexpected error occurred.");
  //       console.log(result);
  //     }
  //     return;
  //   }
  // };

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
              onChangeText={onChangePass}
              value={pass}
              secureTextEntry={true}
              placeholder="Create New Password"
            />
            <View style={styles.boxbuttonContainer}>
              <AppButton
                title="Create Accout"
                color="secondary"
                // onPress={() => console.log(validationSchema)}
                onPress={() => onCreateAccount()}
                // validationSchema={validationSchema}
              />
            </View>
            {/* <p>{this.state.message}</p> */}
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

export default MessOwnerCreateAccScreen;
