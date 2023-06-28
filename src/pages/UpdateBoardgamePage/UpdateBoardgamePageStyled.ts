import styled from "styled-components";

const UpdateBoardgamePageStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(props) => props.theme.colors["dark-green"]};
  font-size: 1.25rem;

  .modify-title {
    font-family: ${(props) => props.theme.fonts.form};
    font-weight: 700;
    text-transform: uppercase;
    padding-top: 25px;
  }

  .modify-subtitle {
    padding-bottom: 25px;
  }
`;

export default UpdateBoardgamePageStyled;
