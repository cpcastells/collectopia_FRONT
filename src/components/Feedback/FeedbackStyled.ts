import styled from "styled-components";

const FeedbackStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(2, 63, 74, 0.9);
  backdrop-filter: blur(3px);

  .modal {
    background: ${(props) => props.theme.colors["light-green"]};
    width: 100%;
    height: 361px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;

    &__icon {
      margin: 25px 0;
    }

    &__exit {
      background: none;
      padding: 0;
      align-self: flex-end;
    }

    &__info {
      display: flex;
      flex-direction: column;
      align-items: center;
      color: ${(props) => props.theme.colors["dark-green"]};
      font-size: 1.25rem;
      text-align: center;
    }

    &__second-message {
      text-transform: uppercase;
      font-weight: 700;
    }

    .error {
      color: ${(props) => props.theme.colors.error};
    }
  }
`;

export default FeedbackStyled;
