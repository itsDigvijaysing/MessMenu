import React from "react";
import {
  Image,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
} from "react-native";
import AppText from "../components/AppText";
import colors from "../config/colors";
import ListItem from "../components/ListItem";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

function DetailsScreen({ navigation }) {
  return (
    <View>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => navigation.navigate("ViewImageScreen")}
      >
        <Image
          style={styles.image}
          source={require("../assets/indian-food-commercial.jpg")}
        />
      </TouchableOpacity>
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Sunny Mess</AppText>
        <AppText style={styles.price}>60rs</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/india-food-commercial.jpg")}
            title="Some Title"
            subTitle="Some SubTitle"
          />
        </View>
      </View>
    </View>
  );
}

export default DetailsScreen;

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  userContainer: {
    marginVertical: 20,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 5,
  },
  title: {
    fontSize: 25,
    fontWeight: "800",
  },
});
