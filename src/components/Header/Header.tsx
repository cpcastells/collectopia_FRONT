import { useNavigate } from "react-router-dom";
import useLocalStorage from "../../hooks/useLocalStorage/useLocalStorage";
import { useAppDispatch } from "../../store";
import { logoutUserActionCreator } from "../../store/users/userSlice";
import Navbar from "../Navbar/Navbar";
import HeaderStyled from "./HeaderStyled";
import paths from "../../routers/paths";

const Header = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { removeLocalStorageItem } = useLocalStorage();
  const navigate = useNavigate();

  const onLogoutUser = () => {
    dispatch(logoutUserActionCreator());
    removeLocalStorageItem("token");
    navigate(paths.login);
  };

  return (
    <HeaderStyled>
      <h1 className="header-title">COLLECTOPIA</h1>
      <Navbar onLogoutUser={onLogoutUser} />
    </HeaderStyled>
  );
};

export default Header;
