import React from "react";

import { View, StyleSheet } from "react-native";
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
    marginBottom: 8,
  },
  language: {
    backgroundColor: theme.colors.primary,
    borderRadius: theme.border.defaultRadius,
    paddingVertical: 4,
    paddingHorizontal: 8,
    marginRight: "auto",
    marginVertical: 8,
  },
  languageText: {
    color: "white",
  },
});

const RepositoryItem = ({ item }) => {
  const {
    fullName,
    description,
    language,

    ownerAvatarUrl,
  } = item;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Avatar size="small" source={{ uri: ownerAvatarUrl }} />
        <View style={styles.title}>
          <Text
            fontWeight="bold"
            fontSize="subheading"
            style={styles.titleText}
            testID="repositoryName"
          >
            {fullName}
          </Text>
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
    </View>
  );
};

export default RepositoryItem;
