import React from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  TouchableOpacity,
} from "react-native";

// Let's change it to the mess owners info page.

import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import colors from "../config/colors";
import Icon from "../components/Icon";
import ItemSeaprator from "../components/ItemSeparator";
import AppText from "../components/AppText";

function OwnerAccountScreen({ route, navigation }) {
  const { alldata } = route.params;

  return (
    <Screen style={styles.screen}>
      <TouchableOpacity style={styles.container}>
        <ListItem
          title={alldata.messname}
          subTitle={alldata.messaddress}
          imageUrl={alldata.messimage}
          onPress={() =>
            navigation.navigate("DetailsScreen", { Itemid: alldata })
          }
        />
      </TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.separatecontainer}>
          <ListItem
            title={"Daily Views : " + alldata.messviews}
            IconComponent={<Icon name="eye" backgroundColor={colors.medium} />}
          />
        </View>
        <TouchableOpacity style={styles.separatecontainer}>
          <ListItem
            title="Update Daily Menu Image"
            IconComponent={
              <Icon name="camera" backgroundColor={colors.primary} />
            }
            onPress={() => navigation.navigate("UpdateImageScreen")}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.innercontainer}>
          <ListItem
            title="Update Mess Details"
            IconComponent={
              <Icon
                name="format-list-bulleted"
                backgroundColor={colors.secondary}
              />
            }
            onPress={() =>
              navigation.navigate("UpdateDetailsScreen", {
                messdata: alldata,
              })
            }
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.innercontainer}>
          <ListItem
            title="Update Mess Image"
            IconComponent={<Icon name="image" backgroundColor="#767FFF" />}
            onPress={() => navigation.navigate("UpdateImageScreen")}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.innercontainer}>
          <ListItem
            title="All Mess Menus"
            IconComponent={
              <Icon name="find-replace" backgroundColor="#54CC5C" />
            }
            onPress={() => navigation.navigate("ListingsScreen")}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.separatecontainer}>
          <ListItem
            title="Log Out"
            IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
            onPress={() => navigation.navigate("WelcomeScreen")}
          />
        </TouchableOpacity>
      </View>
    </Screen>
  );
}

export default OwnerAccountScreen;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  innercontainer: {
    margin: 5,
    padding: 5,
    marginTop: 0,
  },
  separatecontainer: {
    margin: 5,
    padding: 5,
    marginTop: 15,
  },
  screen: {
    backgroundColor: colors.verylightgrey,
  },
});
