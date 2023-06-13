import styled from "styled-components";

const DetailPageStyled = styled.div`
  .detail {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 450px;
    font-size: 1.125rem;

    &__page-title {
      font-size: 1.7rem;
      font-family: ${(props) => props.theme.fonts.form};
      color: ${(props) => props.theme.colors["dark-green"]};
      padding-block: 20px;
      font-weight: bold;
    }

    &__info-container {
      background: radial-gradient(circle, #08424c 40%, transparent 41%),
        radial-gradient(circle at bottom left, #08424c 20%, transparent 21%),
        radial-gradient(circle at bottom right, #08424c 20%, transparent 21%),
        radial-gradient(circle at top left, #08424c 20%, transparent 21%),
        radial-gradient(circle at top right, #08424c 20%, transparent 21%);
      background-size: 3em 3em;
      background-color: #023f4a;
      opacity: 1;
      display: flex;
      flex-direction: column;
      gap: 5px;
      padding: 20px;
      border-radius: 15px 15px 15px 15px;
      width: 100%;
    }

    &__image-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-bottom: 31px;
    }

    &__image {
      border-radius: 15px;
    }

    &__secondary-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 30px;
    }

    &__title-container {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    &__price-container {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 5px;
      color: ${(props) => props.theme.colors["dark-green"]};
      background: ${(props) => props.theme.colors.background};
      height: 63px;
      width: 78px;
      font-family: ${(props) => props.theme.fonts.secondary};
      font-size: 1.125rem;
      font-weight: bold;
      gap: 8px;
    }

    &__main-title {
      font-family: "Luckiest Guy";
      font-size: 1.5rem;
    }

    &__author {
      font-size: 1rem;
    }

    &__data {
      font-weight: bold;
      padding-left: 8px;
    }

    &__description-container {
      padding: 20px;
      color: ${(props) => props.theme.colors["dark-green"]};
      background-color: ${(props) => props.theme.colors.background};
      width: 100%;
    }

    &__description-title {
      font-family: "Luckiest Guy";
      font-size: 1.5rem;
    }

    &__description {
      font-family: ${(props) => props.theme.fonts.secondary};
    }

    &__button-container {
      display: flex;
      padding: 20px;
      justify-content: space-around;
      width: 100%;
    }

    &__button {
      font-size: 1.125rem;
      border-radius: 5px;
      width: 100px;
      height: 48px;
      color: ${(props) => props.theme.colors.background};

      &--modify {
        background-color: ${(props) => props.theme.colors["dark-green"]};
      }

      &--delete {
        background-color: ${(props) => props.theme.colors.error};
      }
    }
  }
`;

export default DetailPageStyled;
