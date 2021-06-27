export const user_1 = {
  id: "1",
  name: "Alice",
  __typename: "User",
};

export const user_1_withsong = {
  ...user_1,
  songs: [
    {
      id: "1",
      url: "test_url",
      __typename: "Song",
    },
  ],
};

export const song_1 = {
  id: "1",
  url: "song_url_1",
  name: "song_1",
  artist: "artist_1",
  type: "type_test",
  duration: "02:00",
  image: "song_image_1",
  __typename: "Song",
  user: user_1,
  likes: [
    {
      id: "1",
      __typename: "Like",
      user: {
        id: "1",
        __typename: "User",
      },
      song: {
        id: "1",
        __typename: "Song",
      },
    },
  ],
};
export const song_2 = {
  id: "2",
  url: "song_url_2",
  name: "song_2",
  artist: "artist_2",
  type: "type_test",
  duration: "02:00",
  image: "song_image_2",
  __typename: "Song",
  user: {
    id: "1",
    name: "Alice",
    __typename: "User",
  },
  likes: [],
};

export const song_3 = {
  id: "3",
  name: "song_3",
  artist: "artist_3",
  url: "song_url_3",
  type: "playlist",
  duration: "02:00",
  image: "song_image_3",
  __typename: "Song",
  user: user_1,
  likes: [],
};

export const like_1 = {
  __typename: "Like",
  id: "1",
  user: {
    id: "1",
  },
  song: {
    id: "1",
  },
};
