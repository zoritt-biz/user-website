import {ApolloClient, createHttpLink, InMemoryCache} from '@apollo/client';
import {setContext} from '@apollo/client/link/context';

const cache = new InMemoryCache();

const httpLink = createHttpLink({
  // uri: 'http://localhost:8080/',
  uri: 'https://zoritt-new-api.herokuapp.com/',
});

const authLink = setContext((_, {headers}) => {
  const token = localStorage.getItem("store");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${JSON.parse(token).token}` : "",
    }
  }
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: cache,
});
