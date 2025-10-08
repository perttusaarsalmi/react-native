import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import crossFetch from 'cross-fetch';

const createApolloClient = () => {
  const httpLink = createHttpLink({
    uri: 'http://192.168.1.109:4000/graphql',
    fetch: crossFetch,
  });

  return new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;