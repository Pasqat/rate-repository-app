import React from "react";
import { useHistory } from "react-router-native";

import { Link } from "react-router-native";
import * as Linking from "expo-linking";

import { View, StyleSheet, TouchableHighlight } from "react-native";
import Text from "../Text";
import Avatar from "../Avatar";
import Stats from "./Stats";

import theme from "../../theme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 15,
  },
  header: {
    display: "flex",
    flexDirection: "row",
  },
  title: {
    paddingLeft: 14,
  },
  titleText: {
    fontSize: theme.fontSizes.title,
    marginBottom: 12,
  },
  language: {
    backgroundColor: theme.colors.primary,
    borderRadius: theme.border.defaultRadius,
    paddingVertical: 6,
    paddingHorizontal: 8,
    marginRight: "auto",
    marginVertical: 12,
  },
  languageText: {
    color: "white",
  },
  button: {
    backgroundColor: theme.colors.primary,
    padding: 16,
    borderRadius: theme.border.defaultRadius,
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 18,
  },
  buttonText: {
    color: "white",
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.fontSizes.title,
  },
});

const RepositoryItem = ({ item, viewUrlButton }) => {
  const {
    id,
    fullName,
    description,
    language,

    ownerAvatarUrl,
  } = item;

  // TODO use of ThouchableOpacity end useHistory for better
  // user experience when click on repo title
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Avatar size="small" source={{ uri: ownerAvatarUrl }} />
        <View style={styles.title}>
          <Link to={`/repository/${id}`}>
            <Text
              fontWeight="bold"
              fontSize="subheading"
              style={styles.titleText}
              testID="repositoryName"
            >
              {fullName}
            </Text>
          </Link>
          <Text color="textSecondary">{description}</Text>
          <View style={styles.language}>
            <Text
              testID="repositoryLanguage"
              style={styles.languageText}
              fontWeight="bold"
            >
              {language}
            </Text>
          </View>
        </View>
      </View>
      <Stats item={item} style={{ paddingVertical: 8 }} />
      {viewUrlButton ? (
        <TouchableHighlight
          style={styles.button}
          onPress={() => Linking.openURL(`${item.url}`)}
        >
          <Text style={styles.buttonText}>View on GitHub</Text>
        </TouchableHighlight>
      ) : null}
    </View>
  );
};

export default RepositoryItem;
