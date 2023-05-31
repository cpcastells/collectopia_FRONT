import ContainerStyled from "../shared/ContainerStyled";
import Header from "../Header/Header";
import { Outlet, useLocation } from "react-router-dom";
import paths from "../../routers/paths";

const Layout = (): React.ReactElement => {
  const location = useLocation();

  return (
    <>
      <ContainerStyled>
        {location.pathname !== `${paths.login}` && <Header />}
        <Outlet />
      </ContainerStyled>
    </>
  );
};

export default Layout;
