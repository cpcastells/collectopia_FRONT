import styled from "styled-components";

const ContainerStyled = styled.div`
  padding: ${(props) => props.theme.padding};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 450px;
`;

export default ContainerStyled;
