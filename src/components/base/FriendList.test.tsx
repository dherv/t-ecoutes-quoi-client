import { ApolloProvider } from '@apollo/client';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { client } from '../../apollo-client';
import { FriendList } from './FriendList';

describe("FriendList component", () => {
  beforeEach(() =>
    render(
      <ApolloProvider client={client}>
        <FriendList />
      </ApolloProvider>
    )
  );

  test("should show a list of friends", async () => {
    expect(await screen.findByText("Bob")).toBeDefined();
    expect(await screen.findByAltText(`avatar of friend: Bob`)).toBeDefined()
  });
});
