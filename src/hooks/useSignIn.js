import { useMutation } from '@apollo/client/react';
import { AUTHENTICATE } from '../graphql/queries'; // Use AUTHENTICATE

const useSignIn = () => {
  const [mutate, result] = useMutation(AUTHENTICATE);
  const signIn = async ({ username, password }) => {
    try {
      const { data } = await mutate({
        variables: { credentials: { username, password } }, // CORRECT
      });
      return data;
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  };
  return [signIn, result];
};

export default useSignIn;