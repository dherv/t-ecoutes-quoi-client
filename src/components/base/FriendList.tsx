import { FC } from 'react';
import { useQuery } from '@apollo/client';
import { GET_USER } from '../../graphql/queries';
import { IUser } from '../../types/interfaces';

export const FriendList: FC = () => {
  const { loading, error, data } = useQuery(GET_USER);

  if (loading) return <p>...loading</p>;
  if (error) return <p>{error.message}</p>;
  return (
    <ul className="box">
      {data.user.friends.map((friend: IUser) => (
        <li key={friend.id}>
          <img className="inline object-cover w-12 h-12 mr-4 rounded-full" src={friend.avatar} alt={`avatar of friend: ${friend.name}`}/>
          {friend.name}
        </li>
      ))}
    </ul>
  );
};
