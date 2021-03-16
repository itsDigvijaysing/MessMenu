//It's just trial screen to test different components and other topics...

import React, { useState } from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import {
  TouchableHighlight,
  TouchableOpacity,
} from "react-native-gesture-handler";

function TestScreen(props) {
  const [count, setcount] = useState(0);

  return (
    <View style={styles.container}>
      <Text> Counter </Text>
      <Text
        style={{
          fontSize: 100,
        }}
      >
        {count}
      </Text>
      <TouchableOpacity>
        <Button title="Count Up" onPress={() => setcount(count + 1)} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Button title="Count Down" onPress={() => setcount(count - 1)} />
      </TouchableOpacity>
    </View>
  );
}

export default TestScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 25,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
