import ApolloClient, {InMemoryCache} from "apollo-boost";

const createApolloClient = () => {
  return new ApolloClient({
    uri: "http://192.168.178.24:5000/graphql",
    cache: new InMemoryCache()
  });
};

export default createApolloClient;
