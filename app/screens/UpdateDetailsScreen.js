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

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

function UpdateDetailsScreen({ route, navigation }) {
  // const [text, onChangeText] = React.useState(null);
  const [pass, onChangePass] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);
  const [email, onChangeEmail] = React.useState(null);
  const [name, onChangeName] = React.useState(null);
  const [address, onChangeAddress] = React.useState(null);
  const [thaliprice, onChangeThaliPrice] = React.useState(null);
  const [monthlyprice, onChangeMonthlyPrice] = React.useState(null);

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
          onChangeText={onChangeEmail}
          value={email}
          placeholder="Update Email ID"
        />
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
          onChangeText={onChangePass}
          value={pass}
          placeholder="Update Password"
        />
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={styles.mainbutton}>
            <AppButton
              title="Update"
              color="secondary"
              onPress={() => navigation.navigate("OwnerAccountScreen")}
            />
          </View>
          <View style={styles.mainbutton}>
            <AppButton
              title="Cancel"
              color="primary"
              onPress={() => navigation.navigate("OwnerAccountScreen")}
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
