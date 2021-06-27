import { InMemoryCache } from '@apollo/client';
import { MockedProvider } from '@apollo/client/testing';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ADD_LIKE_MUTATION } from '../../graphql/mutations';
import { GET_SONGS } from '../../graphql/queries';
import {
  NEW_LIKE_SUBSCRIPTION,
  NEW_SONG_SUBSCRIPTION,
} from '../../graphql/subscriptions';
import { SongList } from './SongList';

const mockNewLike = {
  id: "2",
  __typename: "Like",
  user: {
    id: "2",
  },
  song: {
    id: "1",
  },
};

const mockNewSong = {
  id: "3",
  url: "test_me_url",
  type: "type_test",
  duration: "02:00",
  image: "image_url",
  __typename: "Song",
  user: {
    name: "Alice",
    __typename: "User",
  },
  likes: [],
};

const mockGetSongsRequest = {
  request: {
    query: GET_SONGS,
  },
  result: {
    data: {
      songs: [
        {
          id: "1",
          url: "url_test",
          type: "type_test",
          duration: "02:00",
          image: "image_url",
          __typename: "Song",
          user: {
            id: "1",
            name: "Alice",
            __typename: "User",
          },
          likes: [
            {
              id: "1",
              __typename: "Like",
              user: {
                id: "1",
              },
              song: {
                id: "1",
              },
            },
          ],
        },
        {
          id: "2",
          url: "test_me_url",
          type: "type_test",
          duration: "02:00",
          image: "image_url",
          __typename: "Song",
          user: {
            id: "1",
            name: "Alice",
            __typename: "User",
          },
          likes: [],
        },
      ],
    },
  },
};
const mockAddLikeRequest = {
  request: {
    query: ADD_LIKE_MUTATION,
    variables: {
      songId: "1",
    },
  },
  result: {
    data: {
      addLike: {
        __typename: "Like",
        id: "2",
        user: {
          id: "2",
        },
        song: {
          id: "1",
        },
      },
    },
  },
};

const mockLikeSubscription = {
  request: {
    query: NEW_LIKE_SUBSCRIPTION,
  },
  result: {
    data: {
      newLike: {
        id: "2",
        user: {
          id: "2",
          __typename: "User",
        },
        song: {
          id: "1",
          __typename: "Song",
        },
        __typename: "Like",
      },
    },
  },
};
const mockSongSubscription = {
  request: {
    query: NEW_SONG_SUBSCRIPTION,
  },
  result: {
    data: {
      newSong: {
        id: "4",
        url: "new_song",
        type: "new_song",
        duration: "02:00",
        image: "new_song",
        __typename: "Song",
        user: {
          id: "1",
          name: "Alice",
          __typename: "User",
        },
        likes: [],
      },
    },
  },
};

const mockGetSongsRequestAfterSub = {
  request: {
    query: GET_SONGS,
  },
  result: {
    data: {
      songs: [
        ...mockGetSongsRequest.result.data.songs.map((song) => {
          if (song.id === "1") {
            return { ...song, likes: [...song.likes, mockNewLike] };
          }
          return song;
        }),
        mockNewSong,
      ],
    },
  },
};

describe("SongList component", () => {
  const mocks = [
    mockGetSongsRequest,
    mockSongSubscription,
    mockLikeSubscription,
    mockGetSongsRequestAfterSub,
  ];

  beforeEach(() =>
    render(
      <MockedProvider mocks={mocks} cache={new InMemoryCache()}>
        <SongList />
      </MockedProvider>
    )
  );
  test("should display a name for each song", async () => {
    expect(await screen.findByText("url_test")).toBeDefined();
  });

  test("should display a likes count for each song", async () => {
    expect(await screen.findByText("likes: 1")).toBeDefined();
  });

  test("should update the likes count on click song list item", async () => {
    userEvent.click(await screen.findByText("url_test"));
    expect(await screen.findByText("likes: 2")).toBeDefined();
  });

  // TODO: isolate with mock data
  // test("should show the error on second call", async () => {
  //   userEvent.click(await screen.findByText("url_test"))
  //   expect(await screen.findByText("you can only like once")).toBeDefined()
  // })
});
