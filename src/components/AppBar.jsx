import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";

import { Link } from "react-router-native";

import theme from "../theme";
import AppBarTab from "./AppBarTab";

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    backgroundColor: theme.colors.appBarBackground,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Link to="/">
          <AppBarTab>Repository</AppBarTab>
        </Link>
        <Link to="/signin">
          <AppBarTab>Sign in</AppBarTab>
        </Link>
      </ScrollView>
    </View>
  );
};

export default AppBar;
