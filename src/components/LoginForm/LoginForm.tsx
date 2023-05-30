import { useState } from "react";
import LoginFormStyled from "./LoginFormStyled";
import { UserCredentialsStructure } from "../../types";

interface LoginFormProps {
  submitForm: (userCredentials: UserCredentialsStructure) => void;
}

const LoginForm = ({ submitForm }: LoginFormProps): React.ReactElement => {
  const initialCredentials = { username: "", password: "" };

  const [userCredentials, setUserCredentials] =
    useState<UserCredentialsStructure>(initialCredentials);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserCredentials({
      ...userCredentials,
      [event.target.id]: event.target.value,
    });
  };

  const handleOnSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    submitForm(userCredentials);
  };

  const isDisabled = !userCredentials.username || !userCredentials.password;

  return (
    <LoginFormStyled onSubmit={handleOnSubmit}>
      <label htmlFor="username" className="form-label" hidden>
        username
      </label>
      <input
        className="login-field"
        id="username"
        type="text"
        placeholder="Username"
        value={userCredentials.username}
        onChange={handleOnChange}
      />
      <label htmlFor="password" className="form-label" hidden>
        password
      </label>
      <input
        className="login-field"
        id="password"
        type="text"
        placeholder="Password"
        value={userCredentials.password}
        onChange={handleOnChange}
      />
      <button className="login-button" type="submit" disabled={isDisabled}>
        Log in
      </button>
    </LoginFormStyled>
  );
};

export default LoginForm;
