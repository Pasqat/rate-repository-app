import React from "react";

import { FlatList, View, StyleSheet } from "react-native";
import Text from "../Text";

import RepositoryItem from "../RepositoryItem/RepositoryItem";
import ItemSeparator from "../ItemSeparator";

import theme from "../../theme";

import { useRepository } from "../../hooks/useRepository";
import { useParams } from "react-router-native";

const ratingCircle = {
  width: 40,
  height: 40,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 15,
  },
  main: {
    display: "flex",
    flexDirection: "row",
  },
  rating: {
    width: ratingCircle.width,
    height: ratingCircle.height,
    borderRadius: ratingCircle.width / 2,
    borderColor: theme.colors.primary,
    borderStyle: "solid",
    borderWidth: 2,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },
  content: {
    flex: 1, //otherwise text will overflow Screen
  },
});

const RepositoryInfo = ({ repository }) => {
  return (
    <>
      <RepositoryItem item={repository} viewUrlButton />
      <ItemSeparator />
    </>
  );
};

const ReviewItem = ({ review }) => {
  console.log("reviewItem ➡️", review);
  const { createdAt, rating, text, user } = review;
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <View style={styles.rating}>
          <Text color="primary" fontWeight="bold" fontSize="subheading">
            {rating}
          </Text>
        </View>
        <View style={styles.content}>
          <Text fontWeight="bold" fontSize="subheading">
            {user.username}
          </Text>
          <Text color="textSecondary">{createdAt}</Text>
          <Text>{text}</Text>
        </View>
      </View>
    </View>
  );
};

const RepositoryView = () => {
  const { repositoryId } = useParams();
  const { repository, loading } = useRepository(repositoryId);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  const reviews = repository.reviews
    ? repository.reviews.edges.map((edge) => edge.node)
    : [];

  console.log(repository);
  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => <RepositoryInfo repository={repository} />}
      ItemSeparatorComponent={ItemSeparator}
    />
  );
};

export default RepositoryView;
