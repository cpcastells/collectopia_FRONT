import LoginFormStyled from "./LoginFormStyled";

const LoginForm = (): React.ReactElement => {
  return (
    <LoginFormStyled>
      <label htmlFor="username" className="form-label" hidden>
        username
      </label>
      <input
        className="login-field"
        id="username"
        type="text"
        placeholder="Username"
      />
      <label htmlFor="password" className="form-label" hidden>
        password
      </label>
      <input
        className="login-field"
        id="username"
        type="text"
        placeholder="Password"
      />
      <button className="login-button" type="submit">
        Log in
      </button>
    </LoginFormStyled>
  );
};

export default LoginForm;
