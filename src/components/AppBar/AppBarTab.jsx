import React from "react";
import { StyleSheet } from "react-native";
import theme from "../../theme";

import Text from "../Text";

const AppBarTab = ({ children }) => {
  const styles = StyleSheet.create({
    text: {
      color: "#fff",
      fontSize: theme.fontSizes.subheading,
      padding: 20,
    },
  });

  return (
    <Text style={styles.text} fontSize="subheading" fontWeight="bold">
      {children}
    </Text>
  );
};

export default AppBarTab;
