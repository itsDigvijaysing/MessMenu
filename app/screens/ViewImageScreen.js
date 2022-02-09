import React from "react";
import {
  Button,
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppButton from "../components/AppButton";

function HomeScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <TouchableOpacity onPress={() => console.log("Close Image")}>
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
      </View>
      <View>
        <TouchableOpacity onPress={() => console.log("Image Clicked")}>
          <Image
            resizeMode="contain"
            style={styles.image}
            source={require("../assets/cheese-commercial.jpg")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default HomeScreen;

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
