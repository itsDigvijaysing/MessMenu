import React, { useState } from "react";
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
import * as Yup from "yup";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";

import colors from "../config/colors";

import Toast from "react-native-simple-toast";
import { baseURL } from "../api/baseurl";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

function UpdateDetailsScreen({ route, navigation }) {
  // const [text, onChangeText] = React.useState(null);
  const [pass, onChangePass] = useState(null);
  const [number, onChangeNumber] = useState(null);
  const [email, onChangeEmail] = useState(null);
  const [name, onChangeName] = useState(null);
  const [address, onChangeAddress] = useState(null);
  const [thaliprice, onChangeThaliPrice] = useState(null);
  const [monthlyprice, onChangeMonthlyPrice] = useState(null);

  const { messdata } = route.params;

  const updateURL = baseURL + "/" + messdata._id;

  let toUpdateDetails = () => {
    if (
      email ||
      name ||
      pass ||
      number ||
      address ||
      thaliprice ||
      monthlyprice
    ) {
      let thingstoupdate = {};
      if (email) {
        thingstoupdate["email"] = email;
      }
      if (name) {
        thingstoupdate["messname"] = name;
      }
      if (pass) {
        thingstoupdate["pass"] = pass;
      }
      if (number) {
        thingstoupdate["messcontact"] = number;
      }
      if (address) {
        thingstoupdate["messaddress"] = address;
      }
      if (thaliprice) {
        thingstoupdate["messthaliprice"] = thaliprice;
      }
      if (monthlyprice) {
        thingstoupdate["messmonthlyprice"] = monthlyprice;
      }
      try {
        fetch(updateURL, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(thingstoupdate),
        })
          .then((r) => r.json())
          // .then((data) => {
          //   console.log(data);
          // })
          .then((res) => {
            console.log(res);
            Toast.show("Details Updated Successfully");
            navigation.goBack();
          });
      } catch (error) {
        console.log("Error : " + error);
        Toast.show("There are some errors");
      }
    } else {
      Toast.show("Please Add Something to Update");
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <AppText
          style={{
            fontWeight: "bold",
            textAlign: "center",
            paddingTop: 15,
            fontSize: 30,
            color: colors.darkgrey,
            marginBottom: 25,
          }}
        >
          Update Mess Details
        </AppText>
        {/* Veg Non Veg Parcal remaining */}

        <TextInput
          style={styles.input}
          onChangeText={onChangeName}
          value={name}
          placeholder="Update Your Mess Name"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeThaliPrice}
          value={thaliprice}
          placeholder="Update Your Thali Price"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeMonthlyPrice}
          value={monthlyprice}
          placeholder="Update Monthly Mess Price"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Update your Contact No"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeAddress}
          value={address}
          placeholder="Update your Address"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeEmail}
          value={email}
          placeholder="Update Email ID"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangePass}
          value={pass}
          placeholder="Update Password"
        />
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={styles.mainbutton}>
            <AppButton
              title="Update"
              color="secondary"
              // onPress={() => console.log(updateURL)}
              onPress={() => toUpdateDetails()}
            />
          </View>
          <View style={styles.mainbutton}>
            <AppButton
              title="Cancel"
              color="primary"
              onPress={() => navigation.goBack()}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "#ededed",
    flex: 1,
    alignItems: "center",
    // margin: 15,
  },
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
  mainbutton: { width: "40%", margin: 10, marginTop: 35 },
  buttonContainer: {
    // flex: 1,
    // flexDirection: "row",
    padding: 20,
    margin: 10,
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
});

export default UpdateDetailsScreen;
