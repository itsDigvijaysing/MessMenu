import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../config/colors";
import * as Yup from "yup";
import ImageInput from "../components/ImageInput";
import ImageInputList from "../components/ImageInputList";
import AppPicker from "../components/Picker";
import FormImagePicker from "../components/FormImagePicker";
import AppButton from "../components/AppButton";
import AppText from "../components/Text";
import Toast from "react-native-simple-toast";

import { baseURL } from "../api/baseurl";
// import { EAzureBlobStorageFile } from "react-native-azure-blob-storage";

function UpdateImageScreen({ route, navigation }) {
  const { messdata, imageto } = route.params;

  // console.log(imageto);
  // console.log(messdata);

  const [imageUri, setImageUri] = useState();
  const updateimageURL = baseURL + "/" + imageto + "/" + messdata._id;
  let formdata = new FormData();

  let toUpdateImage = () => {
    if (imageUri) {
      console.log(imageUri);
      formdata.append("messname", "test");
      formdata.append("messimage", imageUri);
      try {
        fetch(updateimageURL, {
          method: "PATCH",
          headers: {
            "Content-Type": "multipart/form-data",
          },
          body: formdata,
        })
          .then((response) => {
            console.log(formdata);
            console.log("image uploaded", updateimageURL);
          })
          .catch((err) => {
            console.log(err);
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
          Update Image
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
            onPress={() => {
              toUpdateImage();
              // console.log(imageUri);
              // navigation.goBack(), Toast.show("Working on it...");
            }}
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
