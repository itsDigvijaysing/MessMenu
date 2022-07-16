import React, { useEffect } from "react";
import {
  Image,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import AppText from "../components/AppText";
import colors from "../config/colors";
import ListItem from "../components/ListItem";
// import listingsApi from "../api/listings";
// import useApi from "../hooks/useApi";
// import { MaterialCommunityIcons } from "@expo/vector-icons";
import Icon from "../components/Icon";

// import { createStackNavigator } from "@react-navigation/stack";
// import { NavigationContainer, useNavigation } from "@react-navigation/native";

function DetailsScreen({ route, navigation }) {
  const { Itemid } = route.params;

  var parcelinfo = "Not Present";
  if (Itemid.messparcel) {
    parcelinfo = "Present";
  }
  // const {
  //   data: listings,
  //   error,
  //   loading,
  //   request: loadListings,
  // } = useApi(listingsApi.getListings);

  // useEffect(() => {
  //   loadListings();
  // }, []);

  return (
    <View>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() =>
          navigation.navigate("ViewImageScreen", {
            onemessimage: Itemid.messmenuimage,
            onemessname: Itemid.messname,
          })
        }
      >
        <Image
          style={styles.image}
          source={{
            uri: Itemid.messmenuimage,
          }}
        />
      </TouchableOpacity>
      <View style={styles.detailsContainer}>
        <ListItem
          title={Itemid.messname}
          subTitle={Itemid.messaddress}
          image={{
            uri: Itemid.messimage,
          }}
          price={Itemid.messthaliprice}
          // onPress={() => navigation.navigate("DetailsScreen")}
        />
      </View>

      <View style={styles.userContainer}>
        <View style={{ flexDirection: "row" }}>
          <View
            style={{
              padding: 15,
              paddingRight: 0,
            }}
          >
            <Icon name="eye" backgroundColor="lightgrey" size={35} />
          </View>
          <AppText style={styles.data}>
            <Text style={styles.forText}>Daily Views : {Itemid.messviews}</Text>
          </AppText>
        </View>
      </View>
      <View style={styles.foodtypeContainer}>
        {Itemid.messveg && (
          <View
            style={{
              backgroundColor: colors.secondary,
              borderRadius: 10,
              flex: 1,
              padding: 10,
            }}
          >
            <Text
              style={{
                color: colors.white,
                fontWeight: "bold",
                alignSelf: "center",
              }}
            >
              Veg
            </Text>
          </View>
        )}
        {Itemid.messnonveg && (
          <View
            style={{
              backgroundColor: colors.primary,
              borderRadius: 10,
              flex: 1,
            }}
          >
            <Text
              style={{
                color: colors.white,
                fontWeight: "bold",
                alignSelf: "center",
                padding: 10,
              }}
            >
              Non Veg
            </Text>
          </View>
        )}
      </View>

      <View style={styles.userContainer}>
        <AppText style={styles.data}>
          <Text style={styles.forText}>Thali Price: </Text>
          {Itemid.messthaliprice}
          {"\n"}
          <Text style={styles.forText}>Monthly Mess Price (60T): </Text>
          {Itemid.messmonthlyprice}
          {"\n"}
          <Text style={styles.forText}>Parcel System: </Text>
          {parcelinfo}
          {/* {String(Itemid.messparcel)} */}
          {"\n"}
          <Text style={styles.forText}>Contact No: </Text>
          {Itemid.messcontact}
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
    marginTop: 0,
    backgroundColor: "#fff",
  },
  foodtypeContainer: {
    margin: 15,
    marginTop: 0,
    padding: 15,
    backgroundColor: "#fff",
    flexDirection: "row",
  },
  forText: {
    fontWeight: "bold",
  },
  data: {
    // alignContent: "center",
    // alignItems: "center",
    alignSelf: "center",
    padding: 15,
    fontWeight: "500",
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
