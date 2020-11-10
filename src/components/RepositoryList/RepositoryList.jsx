import React from "react";
import { FlatList, View, StyleSheet, Text } from "react-native";
import useRepositories from "../../hooks/useRepository";

import RepositoryItem from "../RepositoryItem/RepositoryItem";
import ItemSeparator from "../ItemSeparator";

export const RepositoryListContainer = ({ repositories }) => {
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={RepositoryItem}
    />
  );
};

const RepositoryList = () => {
  const { repositories, loading } = useRepositories();

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return <RepositoryListContainer repositories={repositories} />;
};

export default RepositoryList;
