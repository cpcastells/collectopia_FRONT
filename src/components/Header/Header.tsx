import Navbar from "../Navbar/Navbar";
import HeaderStyled from "./HeaderStyled";

const Header = (): React.ReactElement => {
  return (
    <HeaderStyled>
      <h1 className="header-title">COLLECTOPIA</h1>
      <Navbar />
    </HeaderStyled>
  );
};

export default Header;
