import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MockApolloProvider } from '../../mocks/providers';
import { Header } from './Header';

describe("Header component", () => {
  const history = createMemoryHistory();
  beforeEach(() =>
    render(
      <MockApolloProvider>
        <Router history={history}>
          <Header />
        </Router>
      </MockApolloProvider>
    )
  );
  test("should logout user", () => {
    window.localStorage.setItem("token", "token")
    userEvent.click(screen.getByText("logout"))
    expect(window.localStorage.getItem("token")).toBeNull()
    expect(history.location.pathname).toBe("/");
  });
});
