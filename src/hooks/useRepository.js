import { useState, useEffect } from "react";

import { useQuery } from "@apollo/react-hooks";
import { GET_REPOSITORIES, GET_REPOSITORY } from "../graphql/queries";

// const useRepositories = () => {
//   const [repositories, setRepositories] = useState();
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState();

//   const response = useQuery(GET_REPOSITORIES, {
//     fetchPolicy: "cache-and-network",
//   });

//   useEffect(() => {
//     if (response.loading) {
//       return;
//     }
//     response.data.repositories
//       ? setRepositories(response.data.repositories)
//       : undefined;
//     setError(response.error);
//     setLoading(response.loading);
//   }, [response.loading]);

//   return {
//     // repositories: response.repositories ? response.repositories : null,
//     repositories,
//     error,
//     loading,
//   };
// };

const useRepositories = () => {
  const { data, ...result } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
  });

  return { repositories: data ? data.repositories : undefined, ...result };
};

// this one is the same hook as above but following the
// course solution
export const useRepository = (repositoryId) => {
  const { data, ...result } = useQuery(GET_REPOSITORY, {
    fetchPolicy: "cache-and-network",
    variables: { id: repositoryId },
  });

  return { repository: data ? data.repository : undefined, ...result };
};

export default useRepositories;
