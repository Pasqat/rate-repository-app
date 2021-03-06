import React from "react";
import { StyleSheet, View } from "react-native";
import { Route, Switch, Redirect } from "react-router-native";

import theme from "../theme";

import RepositoryList from "../components/RepositoryList/RepositoryList";
import AppBar from "./AppBar/AppBar";
import SiginIn from "./SignIn/SignIn";
import RepositoryView from "./RepositoryView/RepositoryView";

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
          <RepositoryList />
        </Route>
        <Route path="/repository/:repositoryId">
          <RepositoryView />
        </Route>
        <Route path="/signin">
          <SiginIn />
        </Route>
        <Redirect to="/" />
      </Switch>
    </View>
  );
};

export default Main;
