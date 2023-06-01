import styled from "styled-components";

const CollectionPageStyled = styled.div`
  .collection-title {
    font-size: 1.375rem;
    color: ${(props) => props.theme.colors["dark-green"]};
    padding: 26px;
  }
`;

export default CollectionPageStyled;
