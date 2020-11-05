import React from "react";

import { useApolloClient, useMutation } from "@apollo/react-hooks";
import { SIGN_IN } from "../graphql/mutation";

import AuthStorageContext from "../contexts/AuthStorageContext";

const useSignIn = () => {
  const authStorage = React.useContext(AuthStorageContext);
  const apolloClient = useApolloClient();

  const [mutate, result] = useMutation(SIGN_IN);

  const signIn = async ({ username, password }) => {
    const { data } = await mutate({
      variables: { credential: { username, password } },
    });

    await authStorage.setAccessToken(data.authorize.accessToken);
    apolloClient.resetStore();

    return data;
  };

  return [signIn, result];
};

export default useSignIn;
