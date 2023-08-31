import { useState } from "react";
import LoginFormStyled from "./LoginFormStyled";
import { UserCredentialsStructure } from "../../types";
import Button from "../Button/Button";

interface LoginFormProps {
  submitForm: (userCredentials: UserCredentialsStructure) => void;
}

const LoginForm = ({ submitForm }: LoginFormProps): React.ReactElement => {
  const initialCredentials = { username: "admin", password: "admin" };

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
    <LoginFormStyled className="login-form" onSubmit={handleOnSubmit}>
      <label htmlFor="username" hidden>
        username
      </label>
      <input
        className="login-form__field"
        id="username"
        type="text"
        placeholder="Username"
        value={userCredentials.username}
        onChange={handleOnChange}
      />
      <label htmlFor="password" hidden>
        password
      </label>
      <input
        className="login-form__field"
        id="password"
        type="password"
        placeholder="Password"
        value={userCredentials.password}
        onChange={handleOnChange}
      />
      <Button
        text="Log in"
        className="login-form__button"
        type="submit"
        isDisabled={isDisabled}
      />
    </LoginFormStyled>
  );
};

export default LoginForm;
