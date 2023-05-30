import { NavLink } from "react-router-dom";
import NavbarStyled from "./NavbarStyled";

const Navbar = (): React.ReactElement => {
  return (
    <NavbarStyled>
      <ul className="navbar-links">
        <li className="navbar-link">
          <NavLink to="/collection">
            <img src="/images/Home.svg" alt="collection boardgames" />
          </NavLink>
        </li>
        <li className="navbar-link">
          <NavLink to="/add">
            <img src="/images/New.svg" alt="add boardgame" />
          </NavLink>
        </li>
        <li className="navbar-link">
          <NavLink to="/login">
            <img src="/images/Logout.svg" alt="logout user" />
          </NavLink>
        </li>
      </ul>
    </NavbarStyled>
  );
};

export default Navbar;
