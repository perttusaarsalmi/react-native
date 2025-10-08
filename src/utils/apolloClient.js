import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import crossFetch from 'cross-fetch';
import Constants from 'expo-constants';


const createApolloClient = () => {
  const httpLink = createHttpLink({
    uri: Constants.expoConfig.apolloUri,
    fetch: crossFetch,
  });

  return new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;