import React from "react";
import Constants from "expo-constants";
import { StyleSheet, View } from "react-native";

import Text from "./Text";

import RepositroyList from "./RepositoryList";
import AppBar from "./AppBar";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
    <AppBar/>
      <RepositroyList />
    </View>
  );
};

export default Main;