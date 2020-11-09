import React from "react";

import { Text } from "react-native";

import RepositoryItem from "../RepositoryItem/RepositoryItem";

import { useRepository } from "../../hooks/useRepository";
import { useParams } from "react-router-native";

const RepositoryView = () => {
  // const [repositoyItem, setRepositroyItem] = React.useState();
  const { repositoryId } = useParams();
  const { repository, loading } = useRepository(repositoryId);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return <RepositoryItem item={repository} viewUrlButton />;
};

export default RepositoryView;
