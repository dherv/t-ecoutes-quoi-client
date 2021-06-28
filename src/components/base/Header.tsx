import { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { ApolloConsumer, useQuery } from '@apollo/client';
import { GET_USER } from '../../graphql/queries';

export const Header: FC = () => {
  const history = useHistory();
  const { loading, error, data } = useQuery(GET_USER);
  if (loading) return <p>loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <header className="flex justify-between p-4">
      <h1>T'ecoutes quoi?</h1>
      <div>
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
        <img
          className="inline object-cover w-8 h-8 ml-2 rounded-full"
          src={data.user.avatar}
          alt={`avatar of friend: ${data.user.name}`}
        />
      </div>
    </header>
  );
};
