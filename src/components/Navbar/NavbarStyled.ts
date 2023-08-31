import styled from "styled-components";

const NavbarStyled = styled.nav`
  width: 100%;

  .navbar-links {
    display: flex;
    justify-content: space-between;
  }

  .navbar-button {
    background: none;
  }

  .active {
    border-bottom: 3px solid;
  }

  @media (min-width: 600px) {
    width: 600px;
  }
`;

export default NavbarStyled;
