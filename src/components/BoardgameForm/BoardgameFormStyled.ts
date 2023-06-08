import styled from "styled-components";

const BoardgameFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(props) => props.theme.colors["dark-green"]};
  gap: 20px;

  .form {
    &__select {
      width: 240px;
      height: 48px;
      border-radius: 8px;
      background-color: ${(props) => props.theme.colors["medium-green"]};
      font-family: ${(props) => props.theme.fonts.form};
      color: ${(props) => props.theme.colors.background};
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      padding: 16px;
    }

    &__control-form {
      display: flex;
      flex-direction: column;
      width: 100%;
      gap: 8px;
      font-family: ${(props) => props.theme.fonts.form};
      font-size: 1.25rem;
      font-weight: 500;

      & input {
        width: 240px;
        height: 48px;
        border-radius: 8px;
        background-color: ${(props) => props.theme.colors["medium-green"]};
        color: ${(props) => props.theme.colors.background};
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        padding: 16px;

        &::placeholder {
          color: ${(props) => props.theme.colors["light-green"]}dd;
          font-weight: normal;
          font-size: 1.2rem;
        }
      }

      & textarea {
        min-height: 160px;
        border-radius: 8px;
        background-color: ${(props) => props.theme.colors["medium-green"]};
        color: ${(props) => props.theme.colors.background};
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        padding: 16px;
        width: 240px;
        resize: vertical;
      }
    }

    &__button {
      width: 86px;
      height: 48px;
      background: ${(props) => props.theme.colors["dark-green"]};
      border-radius: 5px;
      font-size: 1.125rem;
      color: ${(props) => props.theme.colors["light-green"]};
      margin: 20px 0 40px 0;
    }
  }
`;

export default BoardgameFormStyled;
