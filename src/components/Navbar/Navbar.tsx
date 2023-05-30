import { NavLink } from "react-router-dom";
import NavbarStyled from "./NavbarStyled";

const Navbar = (): React.ReactElement => {
  return (
    <NavbarStyled>
      <ul className="navbar-links">
        <li className="navbar-link">
          <NavLink to="/collection">
            <img
              src="/images/home-icon.svg"
              alt="collection boardgames"
              width={48}
              height={48}
            />
          </NavLink>
        </li>
        <li className="navbar-link">
          <NavLink to="/add">
            <img
              src="/images/new-icon.svg"
              alt="add boardgame"
              width={48}
              height={48}
            />
          </NavLink>
        </li>
        <li className="navbar-link">
          <NavLink to="/login">
            <img
              src="/images/logout-icon.svg"
              alt="logout user"
              width={48}
              height={48}
            />
          </NavLink>
        </li>
      </ul>
    </NavbarStyled>
  );
};

export default Navbar;
