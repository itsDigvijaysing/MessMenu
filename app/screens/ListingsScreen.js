import React from "react";
import { FlatList, StyleSheet } from "react-native";

import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";

const listings = [
  {
    id: 1,
    title: "Red Jacket",
    price: 100,
    image: require("../assets/cheese-commercial.jpg"),
  },
  {
    id: 2,
    title: "White Jacket",
    price: 200,
    image: require("../assets/clean-food-commercial.jpg"),
  },
];

function ListingsScreen(props) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listings) => listings.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            image={item.image}
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
