import { ChangeEvent, FC, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_MUTATION, SIGNUP_MUTATION } from '../../graphql/mutations';
import { TemplateAuth } from '../templates/TemplateAuth';

const initialState = {
  login: true,
  email: "",
  password: "",
  name: "",
};
export const AuthPage: FC = () => {
  const history = useHistory();
  const [formState, setFormState] = useState(initialState);

  const [login] = useMutation(LOGIN_MUTATION, {
    variables: {
      email: formState.email,
      password: formState.password,
    },
    onCompleted: ({ login }) => {
      setTokenAndRedirect(login.token);
    },
  });

  const [signup] = useMutation(SIGNUP_MUTATION, {
    variables: {
      name: formState.name,
      email: formState.email,
      password: formState.password,
    },
    onCompleted: ({ signup }) => {
      setTokenAndRedirect(signup.token);
    },
  });

  const setTokenAndRedirect = (token: string) => {
    localStorage.setItem("token", token);
    setFormState(initialState);
    history.push("/songs");
  };

  const handleSubmit = () => {
    formState.login ? login() : signup();
  };

  const handleChange = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <TemplateAuth>
      <section>
        <form>
          {!formState.login ? (
            <>
              <label htmlFor="name">name</label>
              <input
                className="input-text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
              ></input>
            </>
          ) : null}
          <label htmlFor="email">email</label>
          <input
            className="input-text"
            id="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
          ></input>
          <label htmlFor="password">password</label>
          <input
            className="input-text"
            id="password"
            name="password"
            value={formState.password}
            onChange={handleChange}
          ></input>
        </form>
        <button onClick={handleSubmit}>
          {formState.login ? "login" : "signup"}
        </button>
        <button
          onClick={() =>
            setFormState({ ...formState, login: !formState.login })
          }
        >
          {formState.login ? "need an account" : "already have an account?"}
        </button>
      </section>
    </TemplateAuth>
  );
};
