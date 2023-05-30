import { NavLink } from "react-router-dom";
import NavbarStyled from "./NavbarStyled";

const Navbar = (): React.ReactElement => {
  return (
    <NavbarStyled>
      <ul className="navbar-links">
        <li>
          <NavLink to="/collection" aria-label="boardgame collection">
            <img
              src="/images/home-icon.svg"
              alt="collection boardgames"
              width={48}
              height={48}
            />
          </NavLink>
        </li>
        <li>
          <NavLink to="/add" aria-label="add boardgame">
            <img
              src="/images/new-icon.svg"
              alt="add boardgame"
              width={48}
              height={48}
            />
          </NavLink>
        </li>
        <li>
          <button className="navbar-button">
            <img
              src="/images/logout-icon.svg"
              alt="logout user"
              width={48}
              height={48}
            />
          </button>
        </li>
      </ul>
    </NavbarStyled>
  );
};

export default Navbar;
