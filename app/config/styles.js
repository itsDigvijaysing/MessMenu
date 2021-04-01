import { Platform } from "react-native";

import colors from "./colors";

export default {
  colors: colors,
  text: {
    fontSize: 18,
    color: colors.darkgrey,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
};
