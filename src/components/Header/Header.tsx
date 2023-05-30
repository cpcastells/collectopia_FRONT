import Navbar from "../Navbar/Navbar";
import HeaderStyled from "./Header.styled";

const Header = (): React.ReactElement => {
  return (
    <HeaderStyled>
      <h1 className="header-title">COLLECTOPIA</h1>
      <Navbar />
    </HeaderStyled>
  );
};

export default Header;
