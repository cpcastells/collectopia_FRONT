import { Outlet } from "react-router";
import ContainerStyled from "../shared/ContainerStyled";
import Header from "../Header/Header";

const Layout = (): React.ReactElement => {
  return (
    <>
      <ContainerStyled>
        <Header />
        <Outlet />
      </ContainerStyled>
    </>
  );
};

export default Layout;
