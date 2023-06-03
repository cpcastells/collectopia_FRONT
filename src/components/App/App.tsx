import { useEffect } from "react";
import useLocalStorage from "../../hooks/useLocalStorage/useLocalStorage";
import useToken from "../../hooks/useToken/useToken";
import { useAppDispatch } from "../../store";
import { loginUserActionCreator } from "../../store/users/userSlice";
import Layout from "../Layout/Layout";
import { useNavigate } from "react-router-dom";
import paths from "../../routers/paths";
import { userApiDataStructure } from "../../store/users/types";

const App = (): JSX.Element => {
  const { getLocalStorageItem } = useLocalStorage();
  const { decodeUserDataToken } = useToken();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const storagedToken = getLocalStorageItem("token");
    if (storagedToken) {
      const userData = decodeUserDataToken(storagedToken);
      dispatch(
        loginUserActionCreator({
          ...userData,
          token: storagedToken,
        } as userApiDataStructure)
      );
      navigate(paths.collection);
    } else {
      navigate(paths.login);
    }
  }, [decodeUserDataToken, dispatch, getLocalStorageItem, navigate]);

  return <Layout />;
};

export default App;
