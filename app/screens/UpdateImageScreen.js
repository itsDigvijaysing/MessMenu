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
import RNFS from "react-native-fs";

import { baseURL } from "../api/baseurl";
// import { EAzureBlobStorageFile } from "react-native-azure-blob-storage";

function UpdateImageScreen({ route, navigation }) {
  const { messdata, imageto } = route.params;

  // console.log(imageto);
  // console.log(messdata);

  const [imageUri, setImageUri] = useState();
  const [imageb64, setImageb64] = useState();
  const updateimageURL = baseURL + "/upmessimages/" + messdata._id;

  var UploadingS = null;
  // let formdata = new FormData();
  if (imageto == "messmenuimages") {
    UploadingS = "Upload Mess Menu";
  } else {
    UploadingS = "Upload Mess Image";
  }

  let toUpdateImage = async () => {
    if (imageUri) {
      var imageupdating = {};
      await RNFS.readFile(imageUri, "base64")
        .then((res) => {
          setImageb64(res);
          imageupdating["messid"] = messdata._id;
          imageupdating["messimagep"] = messdata.messimage;
          imageupdating["messmenuimagep"] = messdata.messmenuimage;
          imageupdating["imageto"] = imageto;
          imageupdating["imageb64"] = imageb64;
        })
        .catch((error) => {
          console.log("B64 has some error: ", error);
        });

      if (imageb64) {
        try {
          Toast.show("Uploading Image...");
          fetch(updateimageURL, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(imageupdating),
          })
            .then((response) => {
              console.log("image uploaded", updateimageURL);
              navigation.goBack(), Toast.show("File Uploaded");
            })
            .catch((err) => {
              console.log(err);
            });
        } catch (error) {
          console.log("Error : " + error);
          Toast.show("There are some errors");
        }
      } else {
        Toast.show("Heavy Load, please try again");
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
            textAlign: "center",
            color: colors.darkgrey,
          }}
        >
          {messdata.messname + "\n" + UploadingS}
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
