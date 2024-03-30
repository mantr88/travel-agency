"use client";

import { useState } from "react";
import Button from "../../ui/Button/Button";

import Burger from "../../ui/svgElements/Burger";
import LogoMobile from "../../ui/svgElements/LogoMobile";
import NavMenu from "../NavMenu/NavMenu";
import css from "./Header.module.css";
import gstyles from "../../page.module.css";

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const toggleShowMenu = () => {
    setShowMenu((prevState) => !prevState);
  };
  return (
    <>
      <header className={`${css.headerContainer} ${gstyles.container}`}>
        <button className={css.menuBtn} onClick={toggleShowMenu}>
          <Burger />
        </button>

        <LogoMobile />
        <Button>Зареєструватись</Button>
      </header>
      <NavMenu show={showMenu} setShow={() => toggleShowMenu()} />
    </>
  );
}

export default Header;
