import { useMutation, useApolloClient } from '@apollo/client/react';
import { CREATE_USER } from '../graphql/queries';

const useCreateUser = () => {
  const apolloClient = useApolloClient();
  const [mutate, result] = useMutation(CREATE_USER);

const createUser = async ({ username, password }) => {
  try {
    const { data } = await mutate({
        variables: {
            user: {
                username,
                password
            }
        }
    });
    return data;
  } catch (error) {
    console.error('Creating a new user failed:', error);
    throw error;
  }
};
  return [createUser, result];
};

export default useCreateUser;