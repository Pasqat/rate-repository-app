import ApolloClient, { InMemoryCache } from "apollo-boost";
import Constants from "expo-constants";

const createApolloClient = () => {
  return new ApolloClient({
    uri: Constants.manifest.extra.env,
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;
