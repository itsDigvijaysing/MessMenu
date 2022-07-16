import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";
// import Swipeable from "react-native-gesture-handler/Swipeable";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

function ListItem({
  title,
  subTitle,
  imageUrl,
  onPress,
  price,
  renderRightActions,
  IconComponent,
}) {
  const navigation = useNavigation();
  return (
    // <Swipeable renderRightActions={renderRightActions}>   //It will be good to delete item
    <TouchableHighlight underlayColor={colors.medium} onPress={onPress}>
      <View style={styles.container}>
        {IconComponent}
        {imageUrl && <Image style={styles.image} source={{ uri: imageUrl }} />}
        <View style={styles.detailContainer}>
          <AppText style={styles.title}>{title}</AppText>
          {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
        </View>
        {price && (
          <View style={styles.prices}>
            <AppText style={{ fontWeight: "bold" }}>{price}</AppText>
          </View>
        )}
      </View>
    </TouchableHighlight>
    //</Swipeable>
  );
}

export default ListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: colors.white,
  },
  detailContainer: {
    marginLeft: 10,
    justifyContent: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  subTitle: {
    color: colors.medium,
  },
  title: {
    fontWeight: "bold",
  },
  prices: {
    justifyContent: "center",
    position: "absolute",
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
    right: 20,
    backgroundColor: "#f8f4f4",
    width: 60,
    height: 60,
    borderRadius: 20,
  },
});
