import Button from "../../ui/Button/Button";

import Burger from "../../ui/svgElements/Burger";
import LogoMobile from "../../ui/svgElements/LogoMobile";
import css from "./Header.module.css";

function Header() {
  return (
    <header className={css.headerContainer}>
      <Burger />
      <LogoMobile />
      <Button>Зареєструватись</Button>
    </header>
  );
}

export default Header;
