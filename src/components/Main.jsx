import React from "react";
import { StyleSheet, View } from "react-native";
import { Route, Switch, Redirect } from "react-router-native";

import theme from "../theme";

import AppBar from "./AppBar";
import RepositroyList from "./RepositoryList";
import SiginIn from "./SignIn";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.mainBackground,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Switch>
        <Route path="/" exact>
          <RepositroyList />
        </Route>
        <Route path="/signin">
          <SiginIn/>
        </Route>
        <Redirect to="/" />
      </Switch>
    </View>
  );
};

export default Main;
