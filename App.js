import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import Home from './screens/Home';
import Login from './screens/Login';

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  cache: new InMemoryCache()
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <View>
        {/* <Home /> */}
        <Login />
        <StatusBar style="auto" />
      </View>
    </ApolloProvider>
  );
}
