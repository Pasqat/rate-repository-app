import { useMutation } from "@apollo/react-hooks";
import { SIGN_IN } from "../graphql/mutation";

const useSignIn = () => {
  const [mutate, result] = useMutation(SIGN_IN);

  const signIn = async ({ username, password }) => {
    return await mutate({ variables: { credential: { username, password } } });
  };

  return [signIn, result];
};

export default useSignIn;
