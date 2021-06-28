import { FC } from 'react';
import { useQuery } from '@apollo/client';
import { GET_USER } from '../../graphql/queries';
import { FriendAdd } from '../base/FriendAdd';
import { FriendList } from '../base/FriendList';
import { SongAdd } from '../base/SongAdd';
import { SongList } from '../base/SongList';

export const SongPage: FC = () => {
  const { loading, error, data } = useQuery(GET_USER);
  if (loading) return <p>loading...</p>;
  if (error) return <p>{error.message}</p>;
  return (
    <div className="grid grid-cols-4 gap-x-4 items-start">
      <div>
        <SongAdd />
        <div className="box mt-2">
          <p>{data.user.name}</p>
          <p>{`songs count: ${data.user.songs.length}`}</p>
        </div>
      </div>
      <SongList />
      <div>
        <FriendList />
        <FriendAdd onClick={() => console.log("hey")} />
      </div>
    </div>
  );
};
