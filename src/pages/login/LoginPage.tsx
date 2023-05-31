import { useNavigate } from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm";
import useUser from "../../hooks/useUser/useUser";
import { useAppDispatch } from "../../store";
import { loginUserActionCreator } from "../../store/users/userSlice";
import { UserCredentialsStructure } from "../../types";
import LoginPageStyled from "./LoginPageStyled";

const LoginPage = (): React.ReactElement => {
  const { getUserToken } = useUser();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const submitForm = async (user: UserCredentialsStructure) => {
    const token = await getUserToken(user);
    dispatch(loginUserActionCreator({ name: "", id: "", token }));
    navigate("/collection", { replace: true });
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
