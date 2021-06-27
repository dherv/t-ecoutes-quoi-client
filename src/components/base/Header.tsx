import { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { ApolloConsumer } from '@apollo/client';

export const Header: FC = () => {
  const history = useHistory();
  return (
    <header className="flex justify-between p-4">
      <h1>T'ecoutes quoi?</h1>
      <ApolloConsumer>
        {(client) => (
          <button
            onClick={() => {
              localStorage.removeItem("token");
              client.cache.reset().then(() => {
                history.push("/");
              });
            }}
          >
            logout
          </button>
        )}
      </ApolloConsumer>
    </header>
  );
};
