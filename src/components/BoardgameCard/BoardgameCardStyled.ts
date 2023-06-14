import styled from "styled-components";

const BoardgameCardStyled = styled.article`
  background: ${(props) => props.theme.colors["dark-green"]};
  width: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 15px;
  border: 3px solid ${(props) => props.theme.colors["dark-green"]};
  gap: 12px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  overflow: hidden;

  .card {
    &__header {
      display: flex;
      flex-direction: column;
      width: 100%;
      gap: 5px;
      padding: 12px 12px 0 12px;
      text-align: center;
    }

    &__image {
      object-fit: cover;
    }

    &__title {
      font-family: ${(props) => props.theme.fonts.secondary};
      font-size: 1.125rem;
      font-weight: 700;
    }

    &__info {
      display: flex;
      align-items: center;
      width: 100%;
      padding-bottom: 7px;
    }

    &__playtime {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 15px;
    }

    &__players {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 15px;
    }

    &__buttons-container {
      display: flex;
      align-items: center;
      width: 100%;
    }

    &__delete-button {
      width: 140px;
      background: ${(props) => props.theme.colors.background};
      padding: 11px 14px;
      font-size: 1.125rem;
      font-weight: 500;
    }

    &__details-button {
      width: 140px;
      background: ${(props) => props.theme.colors.background};
      font-size: 1.125rem;
      font-weight: 500;
      padding: 11px 14px;
      border-style: solid;
      border-width: 0 3px 0 0;
      border-color: ${(props) => props.theme.colors["dark-green"]};
    }
  }
`;

export default BoardgameCardStyled;
