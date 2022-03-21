import React from "react";
import { Image, View, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

function Card({ title, subTitle, imageUrl, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image style={styles.image} source={{ uri: imageUrl }} />
      <View style={styles.detail}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </TouchableOpacity>
  );
}

export default Card;

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 10,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  detail: {
    padding: 10,
  },
  title: {
    marginBottom: 6,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
});
