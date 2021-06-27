import { ApolloProvider } from '@apollo/client';
import { render, screen } from '@testing-library/react';
import { client } from '../../apollo-client';
import { SongList } from './SongList';

describe("SongList component", () => {
  beforeEach(() =>
    render(
      <ApolloProvider client={client}>
        <SongList />
      </ApolloProvider>
    )
  );

  test("should display each song", async () => {
    expect(await screen.findByText("song_1")).toBeDefined();
    expect(await screen.findByText("artist_1")).toBeDefined();
    expect(await screen.findByText("song_url_1")).toBeDefined();
    expect(await screen.findByText("song_2")).toBeDefined();
    expect(await screen.findByText("artist_2")).toBeDefined();
    expect(await screen.findByText("song_url_2")).toBeDefined();
  });

  test("should display likes count for each song", async () => {
    expect(await screen.findByText("likes: 0")).toBeDefined();
    expect(await screen.findByText("likes: 1")).toBeDefined();
  });

  // TODO: subscriptions not handled by msw right now
  // test("should update the likes count on click song list item", async () => {
  //   userEvent.click(await screen.findByText("url_test"));
  //   expect(await screen.findByText("likes: 2")).toBeDefined();
  // });

  // TODO: isolate with mock data
  // test("should show the error on second call", async () => {
  //   userEvent.click(await screen.findByText("url_test"))
  //   expect(await screen.findByText("you can only like once")).toBeDefined()
  // })
});
