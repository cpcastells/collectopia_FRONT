import styled from "styled-components";

const NotFoundPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 26px;
  gap: 10px;
  font-size: 1.625rem;
  color: ${(props) => props.theme.colors["dark-green"]};

  .not-found {
    &__second-comment {
      font-weight: 700;
    }

    &__image {
      margin: 30px 0;
    }

    &__title {
      font-family: ${(props) => props.theme.fonts.form};
      font-size: 2.2rem;
      font-weight: 700;
      text-transform: uppercase;
    }
  }
`;
export default NotFoundPageStyled;
