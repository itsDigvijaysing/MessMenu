import React from "react";
import { View, StyleSheet } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

function ListItemSwipeAction({ onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="trash-can"
          size={35}
          color={colors.white}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

export default ListItemSwipeAction;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightred,
    width: 75,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
