import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *,
  ::before,
  ::after {
    box-sizing: border-box;
    
  }

  html {
    font-family: ${(props) => props.theme.fonts.primary} 
  }

  body {
    background-color: ${(props) => props.theme.colors.background}; 
    color: ${(props) => props.theme.colors["light-green"]}; 
    margin: 0;
  }


  h1,
  h2,
  h3,
  h4,
  h5
  p {
    margin: 0;
    font: inherit;
  }

  a{
    text-decoration: none;
    color: inherit;
  }

  img {
    max-width: 100%;
  }

  ul{
    list-style: none;
    padding-left: 0;
    margin-bottom: 0;
    margin-top: 0;
  }

  button {
    padding: 0;
    border: none;
    cursor: pointer;
    font-family: inherit;
  }

  input {
    border: none;
    font: inherit;
  }

  textarea {
    border: none;
    font: inherit;
  }

`;
