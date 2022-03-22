import React, { useState, useEffect } from "react";
import { ActivityIndicator, FlatList, StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

import listingsApi from "../api/listings";
import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import useApi from "../hooks/useApi";

function ListingsScreen({ navigation }) {
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
    <Screen style={styles.screen}>
      {error && (
        <>
          <AppText>Couldn't Retrieve the listings.</AppText>
          <AppButton title="Retry" onPress={loadListings} />
        </>
      )}
      <ActivityIndicator
        // visible={loading}
        animating={loading}
        size={60}
        color="#fc5c65"
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      />
      <FlatList
        data={listings}
        keyExtractor={(listings) => listings._id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.messname}
            subTitle={"$" + item.messthaliprice}
            imageUrl={item.messimage}
            onPress={() =>
              navigation.navigate("DetailsScreen", { Itemid: item._id })
            }
          />
        )}
      />
    </Screen>
  );
}

export default ListingsScreen;

const styles = StyleSheet.create({
  screen: {
    padding: 10,
    backgroundColor: colors.verylightgrey,
  },
});
