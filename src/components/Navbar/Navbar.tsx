import { useNavigate } from "react-router-dom";
import useLocalStorage from "../../hooks/useLocalStorage/useLocalStorage";
import { useAppDispatch } from "../../store";
import { logoutUserActionCreator } from "../../store/users/userSlice";
import { NavLink } from "react-router-dom";
import NavbarStyled from "./NavbarStyled";
import paths from "../../routers/paths";
import newIcon from "../../assets/icons/new-icon.svg";
import homeIcon from "../../assets/icons/home-icon.svg";
import logoutIcon from "../../assets/icons/logout-icon.svg";

const Navbar = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { removeLocalStorageItem } = useLocalStorage();
  const navigate = useNavigate();

  const onLogoutUser = () => {
    dispatch(logoutUserActionCreator());
    removeLocalStorageItem("token");
    navigate(paths.login);
  };

  return (
    <NavbarStyled>
      <ul className="navbar-links">
        <li>
          <NavLink to="/collection" aria-label="boardgame collection">
            <img
              src={homeIcon}
              alt="collection boardgames"
              width={48}
              height={48}
            />
          </NavLink>
        </li>
        <li>
          <NavLink to="/add" aria-label="add boardgame">
            <img src={newIcon} alt="add boardgame" width={48} height={48} />
          </NavLink>
        </li>
        <li>
          <button className="navbar-button" onClick={onLogoutUser}>
            <img src={logoutIcon} alt="logout user" width={48} height={48} />
          </button>
        </li>
      </ul>
    </NavbarStyled>
  );
};

export default Navbar;
