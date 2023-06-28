import { useNavigate, NavLink } from "react-router-dom";
import useLocalStorage from "../../hooks/useLocalStorage/useLocalStorage";
import { useAppDispatch } from "../../store";
import { logoutUserActionCreator } from "../../store/users/userSlice";
import NavbarStyled from "./NavbarStyled";
import paths from "../../routers/paths";
import newIcon from "../../assets/icons/new-icon.svg";
import homeIcon from "../../assets/icons/home-icon.svg";
import logoutIcon from "../../assets/icons/logout-icon.svg";
import Button from "../Button/Button";
import { resetFilterActionCreator } from "../../store/ui/uiSlice";

const Navbar = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { removeLocalStorageItem } = useLocalStorage();
  const navigate = useNavigate();

  const onLogoutUser = () => {
    dispatch(logoutUserActionCreator());
    dispatch(resetFilterActionCreator());
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
          <NavLink to={paths.addBoardgame} aria-label="add boardgame">
            <img src={newIcon} alt="add boardgame" width={48} height={48} />
          </NavLink>
        </li>
        <li>
          <Button
            className="navbar-button"
            onClick={onLogoutUser}
            url={logoutIcon}
            altText="logout user"
            width="48"
            height="48"
          />
        </li>
      </ul>
    </NavbarStyled>
  );
};

export default Navbar;
