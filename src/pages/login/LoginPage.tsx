import LoginPageStyled from "./LoginPageStyled";

const LoginPage = (): React.ReactElement => {
  return (
    <>
      <LoginPageStyled>
        <img
          src="/images/main-logo.svg"
          alt="collectopia logo"
          width={220}
          height={120}
          className="main-logo"
        />
        <h2>Track your Boardgames here!</h2>
      </LoginPageStyled>
    </>
  );
};

export default LoginPage;
