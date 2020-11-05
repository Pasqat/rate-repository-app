import React from "react";
import { View, StyleSheet, ScrollView, TouchableHighlight } from "react-native";
import { useApolloClient } from "@apollo/react-hooks";
import { Link } from "react-router-native";

import theme from "../theme";
import AppBarTab from "./AppBarTab";

import { useQuery } from "@apollo/react-hooks";
import { AUTHORIZED_USER } from "../graphql/queries";

import AuthStorageContext from "../contexts/AuthStorageContext";

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    backgroundColor: theme.colors.appBarBackground,
  },
});

const AppBar = () => {
  const { data } = useQuery(AUTHORIZED_USER, {
    fetchPolicy: "cache-and-network",
  });
  const authStorage = React.useContext(AuthStorageContext);
  const apolloClient = useApolloClient();

  async function handleSignOut() {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
  }

  console.log("data in AppBar", data);
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Link to="/">
          <AppBarTab>Repositories</AppBarTab>
        </Link>
        {data && data.authorizedUser !== null ? (
          <TouchableHighlight onPress={handleSignOut}>
            <AppBarTab>Sign out</AppBarTab>
          </TouchableHighlight>
        ) : (
          <Link to="/signin">
            <AppBarTab>Sign in</AppBarTab>
          </Link>
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
