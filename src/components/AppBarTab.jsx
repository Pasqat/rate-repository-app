import React from "react";
import { TouchableWithoutFeedback, StyleSheet } from "react-native";
import theme from "../theme";

import Text from "./Text";

const AppBarTab = ({ children }) => {
  const styles = StyleSheet.create({
    text: {
      color: "#fff",
      fontSize: theme.fontSizes.subheading,
      padding: 10
    },
  });

  return (
    <Text style={styles.text} fontSize="subheading" fontWeight="bold">
      {children}
    </Text>
  );
};

export default AppBarTab;
