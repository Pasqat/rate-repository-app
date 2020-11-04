import { gql } from "apollo-boost";

export const SIGN_IN = gql`
  mutation signInMutation($credential: AuthorizeInput) {
    authorize(credentials: $credential) {
      accessToken
    }
  }
`;
