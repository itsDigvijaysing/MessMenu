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
  Switch,
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
  const { messdata } = route.params;
  let initialswitchinfo = {
    messveg: messdata.messveg,
    messnonveg: messdata.messnonveg,
    messparcel: messdata.messparcel,
  };
  // const [text, onChangeText] = React.useState(null);
  const [pass, onChangePass] = useState(null);
  const [number, onChangeNumber] = useState(null);
  const [email, onChangeEmail] = useState(null);
  const [name, onChangeName] = useState(null);
  const [thaliprice, onChangeThaliPrice] = useState(null);
  const [monthlyprice, onChangeMonthlyPrice] = useState(null);
  const [address, onChangeAddress] = useState(null);
  const [messveg, onChangeMessVeg] = useState(initialswitchinfo.messveg);
  const [messnonveg, onChangeMessNonVeg] = useState(
    initialswitchinfo.messnonveg
  );
  const [messparcel, onChangeMessParcel] = useState(
    initialswitchinfo.messparcel
  );

  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
  const updateURL = baseURL + "/" + messdata._id;

  let toUpdateDetails = () => {
    if (
      email ||
      name ||
      pass ||
      number ||
      address ||
      thaliprice ||
      monthlyprice ||
      messveg != initialswitchinfo.messveg ||
      messnonveg != initialswitchinfo.messnonveg ||
      messparcel != initialswitchinfo.messparcel
    ) {
      let thingstoupdate = {};
      if (email) {
        if (reg.test(email))
          thingstoupdate["email"] = email.replace(/\s/g, "").toLowerCase();
        else Toast.show("Please Enter Valid Email");
      }
      if (name) {
        thingstoupdate["messname"] = name.replace(/\s+/g, " ");
      }
      if (pass) {
        if (pass.length > 4) thingstoupdate["pass"] = pass;
        else Toast.show("Minimum Password Length is 5");
      }
      if (number) {
        if (number < 9999999999 && number > 1000000000)
          thingstoupdate["messcontact"] = number;
        else Toast.show("10 Digit Contact No. Valid Only");
      }
      if (address) {
        thingstoupdate["messaddress"] = address;
      }
      if (messveg != initialswitchinfo.messveg) {
        thingstoupdate["messveg"] = messveg;
      }
      if (messnonveg != initialswitchinfo.messnonveg) {
        thingstoupdate["messnonveg"] = messnonveg;
      }
      if (messparcel != initialswitchinfo.messparcel) {
        thingstoupdate["messparcel"] = messparcel;
      }
      if (thaliprice && thaliprice > 0) {
        thingstoupdate["messthaliprice"] = thaliprice;
      }
      if (monthlyprice && monthlyprice > 0) {
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
            // console.log(res);
            Toast.show("Valid Details Updated Successfully");
            navigation.goBack();
          });
      } catch (error) {
        console.log("Error : " + error);
        Toast.show("There are some errors");
      }
    } else {
      Toast.show("Add / Change Something to Update");
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
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeMonthlyPrice}
          value={monthlyprice}
          placeholder="Update Monthly Mess Price"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Update your Contact No"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeAddress}
          value={address}
          placeholder="Update your Address"
        />
        <View style={styles.forswitch}>
          <Text>Provide Veg Food</Text>
          <Switch
            style={{
              flex: 1,
            }}
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={messveg ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={onChangeMessVeg}
            value={messveg}
          />
        </View>
        <View style={styles.forswitch}>
          <Text>Provide Non Veg Food</Text>
          <Switch
            style={{
              flex: 1,
            }}
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={messnonveg ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={onChangeMessNonVeg}
            value={messnonveg}
          />
        </View>
        <View style={styles.forswitch}>
          <Text>Provide Parcel Food</Text>
          <Switch
            style={{
              flex: 1,
            }}
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={messparcel ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={onChangeMessParcel}
            value={messparcel}
          />
        </View>
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
          secureTextEntry={true}
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
  forswitch: {
    flex: 1,
    flexDirection: "row",
    height: 50,
    margin: 10,
    // alignSelf: "center",
    // alignContent: "center",
    alignItems: "center",
    // justifyContent: "center",
    // overflow: "hidden",
    borderWidth: 1,
    borderRadius: 25,
    width: "80%",
    backgroundColor: colors.white,
    borderColor: colors.medium,
    padding: 10,
    paddingLeft: 15,
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
