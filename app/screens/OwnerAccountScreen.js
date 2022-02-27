import React from "react";
import { View, StyleSheet, FlatList } from "react-native";

// Let's change it to the mess owners info page.

import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import colors from "../config/colors";
import Icon from "../components/Icon";
import ItemSeaprator from "../components/ItemSeparator";

const menuItems = [
  {
    title: "Update Menu Images",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "Views",
    icon: {
      name: "eye",
      backgroundColor: colors.medium,
    },
  },
  {
    title: "Update Mess Details",
    icon: {
      name: "details",
      backgroundColor: colors.secondary,
    },
  },
];

function OwnerAccountScreen({ navigation }) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="Om Sai Mess"
          subTitle="omsaimess@gmail.abc"
          image={{
            uri: "https://imgmediagumlet.lbb.in/media/2019/11/5dccf7dcb93b792583cb0728_1573713884592.jpg?fm=webp&w=750&h=500&dpr=1",
          }}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ItemSeaprator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>
      <ListItem
        title="Log Out"
        IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
        onPress={() => navigation.navigate("WelcomeScreen")}
      />
    </Screen>
  );
}

export default OwnerAccountScreen;

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen: {
    backgroundColor: colors.verylightgrey,
  },
});
