import { useMutation, useApolloClient } from '@apollo/client/react';
import { CREATE_REVIEW } from '../graphql/queries';

const useCreateReview = () => {
  const apolloClient = useApolloClient();
  const [mutate, result] = useMutation(CREATE_REVIEW);

const createReview = async ({ repositoryName, ownerName, rating, text }) => {
  try {
    const { data } = await mutate({
      variables: {
        review: {
          repositoryName,
          ownerName,
          rating: Number(rating), // ensure rating is a number
          text,
        }
      }
    });
    return data;
  } catch (error) {
    console.error('Creating review failed:', error);
    throw error;
  }
};
  return [createReview, result];
};

export default useCreateReview;