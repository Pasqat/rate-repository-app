import React from "react";
import { TouchableWithoutFeedback, StyleSheet } from "react-native";
import theme from "../theme";

import Text from "./Text";

const AppBarTab = ({ children }) => {
  const styles = StyleSheet.create({
    text: {
      color: '#fff',
      fontSize: theme.fontSizes.subheading
    }
  });

  return (
    <TouchableWithoutFeedback>
      <Text style={styles.text} fontSize='subheading' fontWeight='bold'>{children}</Text>
    </TouchableWithoutFeedback>
  );
};

export default AppBarTab;
