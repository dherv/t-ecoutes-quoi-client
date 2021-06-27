import { ApolloProvider } from '@apollo/client';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { client } from '../../apollo-client';
import { SongPage } from './SongPage';

describe("SongPage component", () => {
  beforeAll(() => {
    render(
      <ApolloProvider client={client}>
        <SongPage />
      </ApolloProvider>
    );
  });

  test("should display the user information", async () => {
    expect(await screen.findByText("Alice")).toBeDefined();
    expect(await screen.findByText("songs count: 1")).toBeDefined();
  });

  //TODO: update cache does not work, it seems the query is refetched which could explain the data is not udpated
  test.skip("should update the user song count when adding a song", async () => {
    userEvent.type(await screen.findByLabelText("Add a song"), "new song");
    userEvent.click(screen.getByText("add"));
    expect(await screen.findByText("songs count: 2")).toBeDefined();
  });

  //TODO: update cache does not work, it seems the query is refetched which could explain the data is not udpated
  test.skip("should update the song list count when adding a song", async () => {
    userEvent.type(await screen.findByLabelText("Add a song"), "new song");
    userEvent.click(screen.getByText("add"));
    expect(await screen.findByText("new song")).toBeDefined();
  });
});
