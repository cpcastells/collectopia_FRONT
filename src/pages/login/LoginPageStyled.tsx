import styled from "styled-components";

const LoginPageStyled = styled.div`
  background: radial-gradient(circle, #08424c 40%, transparent 41%),
    radial-gradient(circle at bottom left, #08424c 20%, transparent 21%),
    radial-gradient(circle at bottom right, #08424c 20%, transparent 21%),
    radial-gradient(circle at top left, #08424c 20%, transparent 21%),
    radial-gradient(circle at top right, #08424c 20%, transparent 21%);
  background-size: 3em 3em;
  background-color: #023f4a;
  opacity: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  padding: 50px 0;
  gap: 40px;
`;
export default LoginPageStyled;
