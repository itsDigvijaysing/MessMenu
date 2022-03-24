import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../config/colors";

import ImageInput from "../components/ImageInput";
import ImageInputList from "../components/ImageInputList";
import AppPicker from "../components/Picker";
import FormImagePicker from "../components/FormImagePicker";
import * as Yup from "yup";
import AppButton from "../components/AppButton";
import AppText from "../components/Text";

function UpdateImageScreen({ route, navigation }) {
  const [imageUri, setImageUri] = useState();

  // const handleAdd = (uri) => {
  //   setImageUri([...imageUri, uri]);
  // };

  // const handleRemove = (uri) => {
  //   setImageUri(imageUri.filter((imageUri) => imageUri != uri));
  // };

  return (
    <View style={styles.megacontainer}>
      <View>
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            margin: 15,
            color: colors.darkgrey,
          }}
        >
          Update Menu Image
        </Text>
      </View>
      <View style={styles.container}>
        <ImageInput
          imageUri={imageUri}
          onChangeImage={(uri) => setImageUri(uri)}
        />
      </View>
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
            onPress={() => navigation.goBack()}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  megacontainer: {
    backgroundColor: "#ededed",
    flex: 1,
    alignItems: "center",
  },
  mainbutton: { width: "40%", margin: 10, marginTop: 35 },
  container: {
    backgroundColor: colors.lightgrey,
    justifyContent: "center",
    borderRadius: 15,
    overflow: "hidden",
    height: 150,
    width: 150,
    justifyContent: "center",
    margin: 35,
  },
});

export default UpdateImageScreen;
