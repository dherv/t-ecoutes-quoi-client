import { ApolloProvider } from '@apollo/client';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { client } from '../../apollo-client';
import { FriendAdd } from './FriendAdd';

describe("FriendAdd component", () => {
  const props = {
    onClick: jest.fn(),
  };
  beforeEach(() =>
    render(
      <ApolloProvider client={client}>
        <FriendAdd {...props} />
      </ApolloProvider>
    )
  );

  test("should call onClick when clicking add button", async () => {
    userEvent.type(
      screen.getByLabelText("Invite a friend"),
      "friend@example.com"
    );
    userEvent.click(screen.getByRole("button"));
    await waitFor(() =>
      expect(screen.getByLabelText("Invite a friend")).toHaveDisplayValue("")
    );
  });
});
