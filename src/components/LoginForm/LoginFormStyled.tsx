import styled from "styled-components";

const LoginFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.colors.background};
  gap: 42px;
  border-radius: 31px;
  padding: 50px 42px 20px;

  .login-field {
    font-family: ${(props) => props.theme.fonts.form};
    color: ${(props) => props.theme.colors["dark-green"]};
    font-size: 1rem;
    background: none;
    border: none;
    border-bottom: 1.3px solid ${(props) => props.theme.colors["dark-green"]};
    width: 100%;

    &::placeholder {
      color: ${(props) => props.theme.colors["dark-green"]};
    }

    &:focus {
      border-bottom: 2px solid ${(props) => props.theme.colors["dark-green"]};
      outline: none;
    }
  }

  .login-button {
    background: ${(props) => props.theme.colors["dark-green"]};
    color: ${(props) => props.theme.colors.background};
    font-family: ${(props) => props.theme.fonts.form};
    font-size: 1.125rem;
    font-weight: 700;
    border-radius: 15px;
    width: 196px;
    height: 51px;
  }
`;

export default LoginFormStyled;
