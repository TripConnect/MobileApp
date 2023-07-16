import { StatusBar } from 'expo-status-bar';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import Router from './Router';

const client = new ApolloClient({
  uri: `${process.env.EXPO_PUBLIC_API_URL}/graphql`,
  cache: new InMemoryCache()
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Router />
      <StatusBar style="auto" />
    </ApolloProvider>
  );
}
