import React from "react";
import { TouchableWithoutFeedback, StyleSheet } from "react-native";
import Theme from "../theme";

import Text from "./Text";

const AppBarTab = ({ children }) => {
  const styles = StyleSheet.create({});

  return (
    <TouchableWithoutFeedback>
      <Text style={{ color: "#fff" }} fontSize='subheading' fontWeight='bold'>{children}</Text>
    </TouchableWithoutFeedback>
  );
};

export default AppBarTab;
