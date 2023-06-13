import styled from "styled-components";

const CollectionPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 26px 26px 26px;
  gap: 26px;
  width: 100%;
  .collection {
    &__title {
      font-size: 1.375rem;
      color: ${(props) => props.theme.colors["dark-green"]};
      padding-top: 26px;
    }

    &__load {
      background-color: ${(props) => props.theme.colors.background};
      margin: 30px 0;
    }

    &__message-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      color: ${(props) => props.theme.colors["dark-green"]};
    }

    &__message-title {
      font-size: 1.5rem;
    }

    &__message-subtitle {
      font-size: 1.25rem;
      padding-bottom: 48px;
    }
  }
`;

export default CollectionPageStyled;
