import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { client } from '../../apollo-client';
import { Header } from './Header';

describe("Header component", () => {
  const history = createMemoryHistory();
  beforeEach(() =>
    render(
      <ApolloProvider client={client}>
        <Router history={history}>
          <Header />
        </Router>
      </ApolloProvider>
    )
  );
  test("should logout user", async () => {
    window.localStorage.setItem("token", "token")
    userEvent.click(await screen.findByText("logout"))
    expect(window.localStorage.getItem("token")).toBeNull()
    expect(history.location.pathname).toBe("/");
  });
});
