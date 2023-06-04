import styled from "styled-components";

const HeaderStyled = styled.header`
  background: radial-gradient(circle, #08424c 40%, transparent 41%),
    radial-gradient(circle at bottom left, #08424c 20%, transparent 21%),
    radial-gradient(circle at bottom right, #08424c 20%, transparent 21%),
    radial-gradient(circle at top left, #08424c 20%, transparent 21%),
    radial-gradient(circle at top right, #08424c 20%, transparent 21%);
  background-size: 3em 3em;
  background-color: #023f4a;
  opacity: 1;
  width: 100%;
  padding: ${(props) => props.theme.padding};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  .header-title {
    font-family: ${(props) => props.theme.fonts.form};
    font-size: 30px;
    font-weight: 600;
    color: ${(props) => props.theme.colors.background};
  }
`;

export default HeaderStyled;
