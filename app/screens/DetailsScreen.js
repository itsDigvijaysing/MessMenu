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
          source={require("../assets/om_sai_menu_sample.jpg")} //Currently using local value
        />
      </TouchableOpacity>
      <View style={styles.detailsContainer}>
        {/* <AppText style={styles.title}>Om Sai Mess</AppText>
        <AppText style={styles.price}>60rs</AppText> */}
        <ListItem
          title="Om Sai Mess"
          subTitle="Ambegaon Bk"
          image={{
            uri: "https://imgmediagumlet.lbb.in/media/2019/11/5dccf7dcb93b792583cb0728_1573713884592.jpg?fm=webp&w=750&h=500&dpr=1",
          }}
          price="60"
          onPress={() => navigation.navigate("DetailsScreen")}
        />
      </View>
      <View style={styles.userContainer}>
        <AppText
          style={{ fontWeight: "bold", padding: 15, paddingBottom: -15 }}
        >
          Menu Highlights:
        </AppText>
        <AppText style={styles.data}>
          Mashroom Paneer Masala {"\n"}
          Matki Fry Usal{"\n"}
          Gajar Halwa{"\n"}
        </AppText>
      </View>

      <View style={styles.userContainer}>
        <AppText style={styles.data}>
          Mess Type: Veg and Non Veg{"\n"}
          Mess Parcal System: Present{"\n"}1 Month Mess Charge (60t): 3000{" "}
          {"\n"}
          Contact No: 1234568790
        </AppText>
      </View>
    </View>
  );
}

export default DetailsScreen;

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 15,
  },
  image: {
    width: "100%",
    height: 300,
  },
  userContainer: {
    margin: 15,
    backgroundColor: "#fff",
  },
  data: {
    padding: 15,
    fontWeight: "300",
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
