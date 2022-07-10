import React, { useState, useEffect, Component } from "react";
import { ActivityIndicator, FlatList, StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

import listingsApi from "../api/listings";
import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import Toast from "react-native-simple-toast";
import useApi from "../hooks/useApi";
import SearchBar from "react-native-dynamic-search-bar";

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
      <SearchBar
        style={{
          margin: 10,
          marginTop: 0,
          width: "95%",
          borderWidth: 1,
          borderColor: "#3f3f3f",
          backgroundColor: "#fff",
        }}
        fontColor="#c6c6c6"
        iconColor="#c6c6c6"
        cancelIconColor="#c6c6c6"
        placeholder="Search here"
        onChangeText={(text) => console.log(text)}
        onSearchPress={() => Toast.show("Working on it")}
        // onClearPress={(() => (text = null), Toast.show("Clear Pressed"))}
        // onPress={() => alert("onPress")}
      />
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
        renderItem={({ item }) =>
          item.messonline && (
            <Card
              title={item.messname}
              subTitle={"Rs " + item.messthaliprice}
              imageUrl={item.messimage}
              onPress={() =>
                navigation.navigate("DetailsScreen", { Itemid: item })
              }
            />
          )
        }
      />
    </Screen>
  );
}

export default ListingsScreen;

const styles = StyleSheet.create({
  screen: {
    padding: 10,
    backgroundColor: "#f0f0f0",
  },
});
