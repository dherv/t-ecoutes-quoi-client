import { FC } from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

export const MockApolloProvider: FC<{ cache?: any }> = ({
  children,
  cache = new InMemoryCache(),
}) => {
  const client = new ApolloClient({
    uri: "http://localhost:4000",
    cache,
  });
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
