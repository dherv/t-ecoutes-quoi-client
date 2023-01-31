import { FC } from 'react';
import { useQuery } from '@apollo/client';
import { GET_USER } from '../../graphql/queries';
import { FriendAdd } from '../base/FriendAdd';
import { FriendList } from '../base/FriendList';
import { SongAdd } from '../base/SongAdd';
import { SongList } from '../base/SongList';
import { TemplateApp } from '../templates/TemplateApp';

export const SongPage: FC = () => {
  const { loading, error, data } = useQuery(GET_USER);
  if (loading) return <p>loading...</p>;
  if (error) return <p>{error.message}</p>;
  return (
    <TemplateApp>
      <section className="sm:grid sm:grid-cols-4 sm:gap-x-4 sm:items-start">
        <div className="hidden sm:block">
         
          <div className="box mt-2">
            <p>{data.user.name}</p>
            <p>{`songs count: ${data.user.songs.length}`}</p>
          </div>
        </div>
        <div className="col-span-2">
        <SongAdd />
        <SongList />
        </div>
      
        <div className="hidden sm:block">
          <FriendList />
          <FriendAdd onClick={() => console.log("hey")} />
        </div>
      </section>
    </TemplateApp>
  );
};
