import Button from "../../ui/Button/Button";
import Burger from "../../ui/svgElements/Burger";
import LogoMobile from "../../ui/svgElements/LogoMobile";
import "./Header.css";

function Header() {
  return (
    <header className="header-container">
      <Burger />
      <LogoMobile />
      <Button>Зареєстуватись</Button>
    </header>
  );
}

export default Header;
