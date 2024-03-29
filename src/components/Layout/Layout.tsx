import ContainerStyled from "../shared/ContainerStyled";
import Header from "../Header/Header";
import { Outlet, useLocation } from "react-router-dom";
import paths from "../../routers/paths";
import { useAppSelector } from "../../store";
import Loader from "../Loader/Loader";
import Feedback from "../Feedback/Feedback";

const Layout = (): React.ReactElement => {
  const location = useLocation();
  const {
    isLoading,
    modalData: { isSuccess, isError },
  } = useAppSelector((state) => state.uiStore);

  return (
    <ContainerStyled>
      {isLoading && <Loader />}
      {isSuccess && <Feedback />}
      {isError && <Feedback />}
      {location.pathname !== `${paths.login}` && <Header />}
      <Outlet />
    </ContainerStyled>
  );
};

export default Layout;
