import React from "react";
import Link from "next/link";
import Heart from "@/app/ui/svgElements/Heart";
import User from "@/app/ui/svgElements/User";

import css from "./NavMenu.module.css";
import { useScrollLock } from "@/app/hooks/useScrollLock";

interface MenuProps {
  show: boolean;
  setShow: () => void;
}

function NavMenu({ show, setShow }: MenuProps) {
  useScrollLock(show);
  return (
    <div className={`${css.container} ${show ? "" : css.hidden}`}>
      <nav className={css.menu_navigation}>
        <ul className={css.menu_list}>
          <li>
            <Link className={css.menu_link} href="/" onClick={setShow}>
              Головна
            </Link>
          </li>
          <li>
            <Link className={css.menu_link} href="/all-ads" onClick={setShow}>
              Всі оголошення
            </Link>
          </li>
          <li className={css.menu_item}>
            <Link className={css.menu_link} href="/favorites" onClick={setShow}>
              Обране
              <div>
                <Heart />
              </div>
            </Link>
          </li>
          <li className={css.menu_item}>
            <Link className={css.menu_link} href="/profile" onClick={setShow}>
              Особистий кабінет
              <div>
                <User />
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavMenu;
