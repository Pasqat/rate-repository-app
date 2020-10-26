import React from "react";
import { View, StyleSheet } from "react-native";
import Text from "./Text";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  block: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  textStat: {
    fontWeight: "bold",
  },
});

const thousandToK = (num) => {
  if (num > 1000) {
    return `${Math.round((num / 1000) * 10) / 10}K`;
  }
  return num;
};

const Stats = ({ item }) => {
  const { stargazersCount, forksCount, reviewCount, ratingAverage } = item;

  return (
    <View style={styles.container}>
      <View style={styles.block}>
        <Text style={styles.textStat}>{thousandToK(stargazersCount)}</Text>
        <Text color="textSecondary">Stars</Text>
      </View>
      <View style={styles.block}>
        <Text style={styles.textStat}>{thousandToK(forksCount)}</Text>
        <Text color="textSecondary">Forks</Text>
      </View>
      <View style={styles.block}>
        <Text style={styles.textStat}>{thousandToK(reviewCount)}</Text>
        <Text color="textSecondary">Reviews</Text>
      </View>
      <View style={styles.block}>
        <Text style={styles.textStat}>{thousandToK(ratingAverage)}</Text>
        <Text color="textSecondary">Rating</Text>
      </View>
    </View>
  );
};

export default Stats;
