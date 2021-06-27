import { ChangeEvent, FC, MouseEvent, useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_SONG_MUTATION } from '../../graphql/mutations';
import { GET_SONGS } from '../../graphql/queries';

export const SongAdd: FC = () => {
  const [url, setUrl] = useState<string>("");
  const [addSong] = useMutation(ADD_SONG_MUTATION, {
    update: (cache, { data: { song } }) => {
      cache.modify({
        fields: {
          user() { return },
          songs(existingSongs = []) {
            cache.writeQuery({
              query: GET_SONGS,
              data: {
                songs: [{ song, __typename: "Song" }, ...existingSongs],
              },
            });
          },
        },
      });
    },
    onCompleted: () =>  setUrl("")
  });
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUrl(event.target.value);
  };
  const handleSubmit = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    addSong({ variables: { url } });
  };

  return (
    <form className="box">
      <label className="label" htmlFor="url">
        Add a song
      </label>
      <input
        className="input-text"
        name="url"
        id="url"
        value={url}
        onChange={handleChange}
      />
      <button className="btn mt-2" onClick={handleSubmit}>
        add
      </button>
    </form>
  );
};
