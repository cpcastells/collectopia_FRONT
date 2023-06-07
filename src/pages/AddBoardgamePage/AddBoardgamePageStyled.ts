import styled from "styled-components";

const AddBoardgamePageStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(props) => props.theme.colors["dark-green"]};
  font-size: 1.25rem;

  .add-title {
    font-family: ${(props) => props.theme.fonts.form};
    font-weight: 700;
    text-transform: uppercase;
    padding-top: 25px;
  }

  .add-subtitle {
    padding-bottom: 25px;
  }
`;

export default AddBoardgamePageStyled;
