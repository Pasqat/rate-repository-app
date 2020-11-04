import { useState, useEffect } from "react";

import { useQuery } from "@apollo/react-hooks";
import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = () => {
  const [repositories, setRepositories] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const response = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "no-cache",
  });

  useEffect(() => {
    if (response.loading) {
      return;
    }
    response.data.repositories
      ? setRepositories(response.data.repositories)
      : null;
    setError(response.error);
    setLoading(response.loading);
  }, [response.loading]);

  return {
    // repositories: response.repositories ? response.repositories : null,
    repositories,
    error,
    loading,
  };
};

export default useRepositories;
