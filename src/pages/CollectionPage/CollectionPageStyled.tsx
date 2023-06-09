import styled from "styled-components";

const CollectionPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 26px 26px 26px;
  gap: 26px;
  width: 100%;

  .collection-title {
    font-size: 1.375rem;
    color: ${(props) => props.theme.colors["dark-green"]};
    padding-top: 26px;
  }

  .collection-load {
    background-color: ${(props) => props.theme.colors.background};
    margin: 30px 0;
  }
`;

export default CollectionPageStyled;
