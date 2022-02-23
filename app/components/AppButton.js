import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../config/colors";

import { useNavigation } from "@react-navigation/core";

function AppButton({ title, screen, onPress, color = "primary" }) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[color] }]}
      // onPress={() => navigation.navigate(screen)}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

export default AppButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
    marginVertical: 3,
  },
  text: {
    color: colors.white,
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});
