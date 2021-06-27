import { FC } from 'react';
import { useQuery } from '@apollo/client';
import { GET_USER } from '../../graphql/queries';
import { SongAdd } from '../base/SongAdd';
import { SongList } from '../base/SongList';

export const SongPage: FC = () => {
  const { loading, error, data } = useQuery(GET_USER);
  if (loading) return <p>loading...</p>;
  if (error) return <p>{error.message}</p>;
  console.log(data)
  return (
    <div className="grid grid-cols-4 gap-x-4 items-start">
      <div>
        <SongAdd />
        <div className="box mt-2">
          <p>{data.user.name}</p>
          <p>{data.user.songs.length}</p>
        </div>
      </div>

      <SongList />
    </div>
  );
};
