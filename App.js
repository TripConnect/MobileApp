import { StatusBar } from 'expo-status-bar';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import { store } from './store';
import { Provider } from 'react-redux';

import Router from './Router';

const client = new ApolloClient({
  uri: `${process.env.EXPO_PUBLIC_API_URL}/graphql`,
  cache: new InMemoryCache()
});

export default function App() {
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <Router />
        <StatusBar style="auto" />
      </ApolloProvider>
    </Provider>
  );
}
