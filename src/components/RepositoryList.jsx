import React from "react";
import { FlatList, View, StyleSheet, Text } from "react-native";
import useRepositories from "../hooks/useRepository";

import RepositroyItem from "./RepositoryItem";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  const { repositories, error, loading } = useRepositories();
  const [repositoryNodes, setRepositoryNodes] = React.useState([]);

  React.useEffect(() => {
    if (loading) {
      return;
    }
    if (repositories) {
      const newRepositoryNodes = repositories
        ? repositories.edges.map((edge) => edge.node)
        : [];

      return setRepositoryNodes(newRepositoryNodes);
    }
  }, [repositories]);

  if (loading) {
    return <Text>Loading...</Text>;
  }
  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={RepositroyItem}
    />
  );
};

export default RepositoryList;
