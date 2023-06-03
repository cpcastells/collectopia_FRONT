import styled from "styled-components";

const CollectionPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 26px;

  .collection-title {
    font-size: 1.375rem;
    color: ${(props) => props.theme.colors["dark-green"]};
    padding-top: 26px;
  }
`;

export default CollectionPageStyled;
