import ContainerStyled from "../shared/ContainerStyled";
import Header from "../Header/Header";
import { Outlet, useLocation } from "react-router-dom";
import paths from "../../routers/paths";
import { useAppSelector } from "../../store";
import Loader from "../Loader/Loader";

const Layout = (): React.ReactElement => {
  const location = useLocation();
  const { isLoading } = useAppSelector((state) => state.uiStore);

  return (
    <>
      <ContainerStyled>
        {isLoading && <Loader />}
        {location.pathname !== `${paths.login}` && <Header />}
        <Outlet />
      </ContainerStyled>
    </>
  );
};

export default Layout;
