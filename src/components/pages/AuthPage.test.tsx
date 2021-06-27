import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MockApolloProvider } from '../../mocks/providers';
import { AuthPage } from './AuthPage';

describe("AuthPage component", () => {
  const history = createMemoryHistory();
  beforeEach(() => {
    render(
      <MockApolloProvider>
        <Router history={history}>
          <AuthPage />
        </Router>
      </MockApolloProvider>
    );
  });
  test("should toggle the form type between login and signup", async () => {
    expect(screen.queryByLabelText("name")).toBeNull();
    userEvent.click(screen.getByText("need an account"));
    await waitFor(() =>
      expect(screen.getByText("already have an account?")).toBeDefined()
    );
    expect(screen.getByLabelText("name")).toBeDefined();
  });
  test("should clear the current form after submit", async () => {
    userEvent.type(screen.getByLabelText("email"), "email@test.com");
    userEvent.type(screen.getByLabelText("password"), "password");
    userEvent.click(screen.getByText("login"));
    await waitFor(() =>
      expect(screen.getByLabelText("email")).toHaveDisplayValue("")
    );
    expect(screen.getByLabelText("password")).toHaveDisplayValue("");
    expect(history.location.pathname).toBe("/songs");
  });
  test("should submit the form signup", async () => {
    userEvent.click(screen.getByText("need an account"));
    userEvent.type(screen.getByLabelText("name"), "email@test.com");
    userEvent.type(screen.getByLabelText("email"), "email@test.com");
    userEvent.type(screen.getByLabelText("password"), "password");
    userEvent.click(screen.getByText("signup"));
    await waitFor(() =>
      expect(screen.getByLabelText("email")).toHaveDisplayValue("")
    );
    expect(screen.getByLabelText("password")).toHaveDisplayValue("");
    expect(history.location.pathname).toBe("/songs");
  });
});
