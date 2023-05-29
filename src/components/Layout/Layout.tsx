import { Outlet } from "react-router";
import ContainerStyled from "../shared/ContainerStyled";

const Layout = (): React.ReactElement => {
  return (
    <ContainerStyled>
      <Outlet />
    </ContainerStyled>
  );
};

export default Layout;
