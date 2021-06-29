import { FC, useEffect, useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { ADD_LIKE_MUTATION } from '../../graphql/mutations';
import { GET_SONGS } from '../../graphql/queries';
import {
  NEW_LIKE_SUBSCRIPTION,
  NEW_SONG_SUBSCRIPTION,
} from '../../graphql/subscriptions';
import { ILike, ISong } from '../../types/interfaces';
import { Song } from './Song';

export const SongList: FC = () => {
  const [errorMessage, setErrorMessage] = useState<string>("");
  const {
    loading,
    error,
    data: queryData,
    refetch,
    subscribeToMore,
  } = useQuery(GET_SONGS, { variables: { orderBy: {createdAt: 'desc' }}});
  const [addLike, { error: mutationError }] = useMutation(ADD_LIKE_MUTATION);

  useEffect(() => {
    let unsubscribeSongs = subscribeToMore({
      document: NEW_SONG_SUBSCRIPTION,
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) return prev;
        const newSong = subscriptionData.data.newSong;

        const songs = prev?.songs;
        if (!songs) return prev;
        if (songs && songs.find((song: ISong) => song.id === newSong.id)) {
          return prev;
        }

        return {
          ...prev,
          songs: [...songs, newSong],
        };
      },
      onError: (error) => console.log(error),
    });

    let unsubscribeLikes = subscribeToMore({
      document: NEW_LIKE_SUBSCRIPTION,
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) return prev;
        const newLike = subscriptionData.data.newLike;
        const songs = prev?.songs;
        if (!songs) return prev;

        // find the song && check if already has the like
        const song = songs.find((song: ISong) => song.id === newLike.song.id);

        if (song && song.likes.find((like: ILike) => like.id === newLike.id)) {
          return prev;
        }
        return {
          ...prev,
          songs: songs.map((s: ISong) => {
            if (s.id === song.id) {
              return { ...s, likes: [...s.likes, newLike] };
            }
            return s;
          }),
        };
      },
    });

    return () => {
      unsubscribeSongs();
      unsubscribeLikes();
    };
  }, [subscribeToMore]);

  // refetch on load since logout will clear the cache
  useEffect(() => {
    refetch();
    return () => {}
  }, [refetch]);

  useEffect(() => {
    let timeout: any;
    if (mutationError) {
      setErrorMessage(mutationError.message);
      timeout = setTimeout(() => setErrorMessage(""), 3000);
    } else {
      setErrorMessage("");
    }
    return () => clearTimeout(timeout);
  }, [mutationError]);

  const handleClick = (songId: string) => {
    addLike({
      variables: { songId },
    }).catch((error) => error);
  };

  if (loading) return <p>loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <section className="col-span-2">
      <ul className="shadow-md">
        {queryData.songs.map((song: ISong) => (
          <Song
            key={song.id}
            id={song.id}
            name={song.name}
            artist={song.artist}
            image={song.image}
            url={song.url}
            likesCount={song.likes.length}
            onClick={handleClick}
          />
        ))}
      </ul>
      {errorMessage ? <p>{errorMessage}</p> : null}
    </section>
  );
};
