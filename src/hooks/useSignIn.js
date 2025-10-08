import { useMutation, useApolloClient } from '@apollo/client/react';
import { AUTHENTICATE } from '../graphql/queries'; // Use AUTHENTICATE
import { useContext } from 'react';
import useAuthStorage from '../hooks/useAuthStorage';

const useSignIn = () => {
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const [mutate, result] = useMutation(AUTHENTICATE);
  const signIn = async ({ username, password }) => {
  try {
    const { data } = await mutate({
        variables: { credentials: { username, password } },
    });
    await authStorage.setAccessToken(data.authenticate.accessToken);
    await apolloClient.resetStore();
    return data;
  } catch (error) {
    console.error('Login failed:', error);
    throw error;
  }
 };
  return [signIn, result];
};

export default useSignIn;