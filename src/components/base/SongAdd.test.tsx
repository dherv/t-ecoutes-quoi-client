import { ApolloProvider } from '@apollo/client';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { client } from '../../apollo-client';
import { SongAdd } from './SongAdd';

describe("SongAdd component", () => {
  beforeEach(() =>
    render(
      <ApolloProvider client={client}>
        <SongAdd />
      </ApolloProvider>
    )
  );

  test("should submit the url of the song", async () => {
    userEvent.type(screen.getByLabelText("Add a song"), "url");
    userEvent.click(screen.getByRole("button"));
    await waitFor(() =>
      expect(screen.getByLabelText("Add a song")).toHaveDisplayValue("")
    );
  });
});
