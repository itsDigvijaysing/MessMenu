import React, { useState, useEffect } from "react";
import { StyleSheet, FlatList, View, Text, Button } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import Constants from "expo-constants";
import colors from "../config/colors";
import ItemSeparator from "../components/ItemSeparator";
import ListItemSwipeAction from "../components/ListItemSwipeAction";

const initialmess = [
  {
    id: 1,
    title: "Om sai",
    description: "ambegaon bk",
    image: require("../assets/india-food-commercial.jpg"),
  },
  {
    id: 2,
    title: "ShivaShri",
    description: "ambegaon bk",
    image: require("../assets/indian-food-commercial.jpg"),
  },
];

function HomeScreen(props) {
  const [messmessages, setmessmessages] = useState(initialmess);
  const [refreshing, setrefreshing] = useState(false);

  const handleDelete = (messmessage) => {
    //Delete this message from array
    setmessmessages(messmessages.filter((m) => m.id !== messmessage.id));
  };

  return (
    <Screen>
      <FlatList
        data={messmessages}
        keyExtractor={(messmessages) => messmessages.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message Selected", item)}
            renderRightActions={() => (
              <ListItemSwipeAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setmessmessages([
            {
              id: 2,
              title: "ShivaShri",
              description: "ambegaon bk",
              image: require("../assets/indian-food-commercial.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
}

export default HomeScreen;
