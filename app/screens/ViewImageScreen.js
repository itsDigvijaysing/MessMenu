import React from "react";
import {
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";
import colors from "../config/colors";
// import { MaterialCommunityIcons } from "@expo/vector-icons";
// import AppButton from "../components/AppButton";
// import { NavigationContainer } from "@react-navigation/native";

function ViewImageScreen({ route, navigation }) {
  // react-native-share has problem with expo so using basic fucnctionality only txt share
  // const myCustomShare = async () => {
  //   const ShareOptions = {
  //     message: "Welcome to Mess Menu",
  //   };

  //   try {
  //     const ShareResponse = await Share.open(ShareOptions);
  //   } catch (err) {
  //     console.log("Error: " + err);
  //   }
  // };

  // Basic Only Txt sending

  const onemess = route.params;
  return (
    <View style={styles.container}>
      {/* <View style={styles.closeIcon}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialCommunityIcons name="close" color="white" size={32} />
        </TouchableOpacity>
      </View>
      <View style={styles.shareIcon}>
        <TouchableOpacity onPress={() => console.log("Share Image")}>
          <MaterialCommunityIcons
            name="share-variant"
            color="white"
            size={32}
          />
        </TouchableOpacity>
      </View> */}
      <View>
        <TouchableOpacity onPress={() => console.log("Image Clicked")}>
          <Image
            resizeMode="contain"
            style={styles.image}
            // source={{
            //   uri: "https://imgmediagumlet.lbb.in/media/2019/11/5dccf7dcb93b792583cb0728_1573713884592.jpg?fm=webp&w=750&h=500&dpr=1",
            // }}
            source={{ uri: onemess.onemessimage }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default ViewImageScreen;

const styles = StyleSheet.create({
  closeIcon: {
    position: "absolute",
    top: 30,
    left: 30,
    zIndex: 3,
  },
  shareIcon: {
    position: "absolute",
    top: 30,
    right: 30,
    zIndex: 3,
  },
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
