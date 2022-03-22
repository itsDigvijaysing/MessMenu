import React, { useEffect } from "react";
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
import listingsApi from "../api/listings";
import useApi from "../hooks/useApi";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

function DetailsScreen({ route, navigation }) {
  const { Itemid } = route.params;

  const {
    data: listings,
    error,
    loading,
    request: loadListings,
  } = useApi(listingsApi.getListings);

  useEffect(() => {
    loadListings();
  }, []);

  return (
    <View>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => navigation.navigate("ViewImageScreen")}
      >
        <Image
          style={styles.image}
          source={{
            uri: "https://blobstorageformessmenu.blob.core.windows.net/messmenuimages/Om_Sai_Mess_Menu.jpeg",
          }} //Currently using local value
        />
      </TouchableOpacity>
      <View style={styles.detailsContainer}>
        {/* <AppText style={styles.title}>Om Sai Mess</AppText>
        <AppText style={styles.price}>60rs</AppText> */}
        <ListItem
          title="Om Sai Mess"
          subTitle="Ambegaon Bk"
          image={{
            uri: "https://blobstorageformessmenu.blob.core.windows.net/messimages/Om_Sai_Mess.jpeg",
          }}
          price={Itemid}
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
