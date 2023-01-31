import React, { FC } from 'react';
import { useQuery } from '@apollo/client';
import { GET_USER } from '../../graphql/queries';
import { IUser } from '../../types/interfaces';

export const FriendList: FC = () => {
  const { loading, error, data } = useQuery(GET_USER);
  console.log("FriendList renders")

  if (loading) return <p>...loading</p>;
  if (error) return <p>{error.message}</p>;
  return (
    <ul className="box">
      {data.user.friends.map((friend: IUser) => (
        <li className="mb-4" key={friend.id}>
          <img className="inline object-cover w-10 h-10 mr-4 rounded-full" src={friend.avatar} alt={`avatar of friend: ${friend.name}`}/>
          {friend.name}
        </li>
      ))}
    </ul>
  );
};
