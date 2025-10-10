import { useQuery } from "@apollo/client/react";
import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = ({
  orderBy = "CREATED_AT",
  orderDirection = "DESC"
} = {}) => {
  const { data, error, loading, refetch } = useQuery(GET_REPOSITORIES, {
    variables: { orderBy, orderDirection },
    fetchPolicy: "cache-and-network",
  });

  const repositories = data?.repositories ?? null;

  return { repositories, loading, error, refetch };
};

export default useRepositories;