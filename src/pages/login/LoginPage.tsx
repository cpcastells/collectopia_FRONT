import { useNavigate } from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm";
import useUser from "../../hooks/useUser/useUser";
import { useAppDispatch } from "../../store";
import { loginUserActionCreator } from "../../store/users/userSlice";
import { UserCredentialsStructure } from "../../types";
import LoginPageStyled from "./LoginPageStyled";
import useToken from "../../hooks/useToken/useToken";

const LoginPage = (): React.ReactElement => {
  const { getUserToken } = useUser();
  const { decodeUserDataToken } = useToken();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const submitForm = async (user: UserCredentialsStructure) => {
    const token = await getUserToken(user);
    const userData = decodeUserDataToken(token);
    dispatch(loginUserActionCreator(userData));
    navigate("/", { replace: true });
  };

  return (
    <>
      <LoginPageStyled>
        <img
          src="/images/main-logo.svg"
          alt="collectopia logo"
          width={220}
          height={120}
          className="main-logo"
        />
        <h2>Track your Boardgames here!</h2>
        <LoginForm submitForm={submitForm} />
      </LoginPageStyled>
    </>
  );
};

export default LoginPage;
