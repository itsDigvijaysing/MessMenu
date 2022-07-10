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

// OLD Screen Not Primary Now so No Updates here
const initialmess = [
  {
    id: 1,
    title: "Om sai Mess",
    description: "ambegaon bk",
    image: {
      uri: "../assets/mess-menu.png",
    },
    price: 60,
  },
  {
    id: 2,
    title: "ShivaShri Mess",
    description: "ambegaon bk",
    image: {
      uri: "../assets/mess-menu.png",
    },
    price: 70,
  },
  {
    id: 3,
    title: "Sunny Mess",
    description: "ambegaon bk",
    image: {
      uri: "../assets/mess-menu.png",
    },
    price: 80,
  },
  {
    id: 4,
    title: "Vitthal Mess",
    description: "ambegaon bk",
    image: {
      uri: "../assets/mess-menu.png",
    },
    price: 100,
  },
  {
    id: 5,
    title: "Krishna Mess",
    description: "ambegaon bk",
    image: {
      uri: "../assets/mess-menu.png",
    },
    price: 80,
  },
];

function HomeScreen({ navigation }) {
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
            price={item.price}
            onPress={() => navigation.navigate("DetailsScreen")}
            renderRightActions={() => (
              <ListItemSwipeAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          // setmessmessages([]);
        }}
      />
    </Screen>
  );
}

export default HomeScreen;
