import React from "react";

import { FlatList, Text, View } from "react-native";

import RepositoryItem from "../RepositoryItem/RepositoryItem";

import { useRepository } from "../../hooks/useRepository";
import { useParams } from "react-router-native";

const RepositoryInfo = ({ repository }) => {
  return <RepositoryItem item={repository} viewUrlButton />;
};

const ReviewItem = ({ review }) => {
  return <Text>review</Text>;
};

const RepositoryView = () => {
  const { repositoryId } = useParams();
  const { repository, loading } = useRepository(repositoryId);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <FlatList
      data={"reviews"}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => <RepositoryInfo repository={repository} />}
    />
  );
};

export default RepositoryView;
