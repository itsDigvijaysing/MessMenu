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
    title: "Om sai Mess",
    description: "ambegaon bk",
    image: {
      uri: "https://imgmediagumlet.lbb.in/media/2019/11/5dccf7dcb93b792583cb0728_1573713884592.jpg?fm=webp&w=750&h=500&dpr=1",
    },
    price: 60,
  },
  {
    id: 2,
    title: "ShivaShri Mess",
    description: "ambegaon bk",
    image: {
      uri: "https://media-cdn.tripadvisor.com/media/photo-s/1b/69/d5/58/punjabi-thali.jpg",
    },
    price: 70,
  },
  {
    id: 3,
    title: "Sunny Mess",
    description: "ambegaon bk",
    image: {
      uri: "https://ribbonstopastas.com/wp-content/uploads/2020/01/up-thali.jpg",
    },
    price: 80,
  },
  {
    id: 4,
    title: "Vitthal Mess",
    description: "ambegaon bk",
    image: {
      uri: "https://images.indulgexpress.com/uploads/user/ckeditor_images/article/2021/8/19/GRT.jpg?w=576&dpr=1.3",
    },
    price: 100,
  },
  {
    id: 5,
    title: "Krishna Mess",
    description: "ambegaon bk",
    image: {
      uri: "https://5.imimg.com/data5/WX/BQ/MY-64410820/indian-food-500x500.jpg",
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
