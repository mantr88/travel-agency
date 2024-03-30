import React from "react";
import Link from "next/link";

import LogoMobile from "@/app/ui/svgElements/LogoMobile";
import Facebook from "@/app/ui/svgElements/Facebook";
import Twitter from "@/app/ui/svgElements/Twitter";
import Instagram from "@/app/ui/svgElements/Instagram";
import YouTube from "@/app/ui/svgElements/YouTube";

import css from "./Footer.module.css";
import gstyles from "../../page.module.css";

export default function Footer() {
  return (
    <footer className={`${css.footer} ${gstyles.container}`}>
      <div className={css.blocksWrap}>
        <nav>
          <ul className={css.navList}>
            <li>
              <Link href="/">Головна</Link>
            </li>
            <li>
              <Link href="/all-ads">Всі оголошення</Link>
            </li>
            <li>
              <Link href="/favorites">Обране</Link>
            </li>
            <li>
              <Link href="/profile">Особистий кабінет</Link>
            </li>
          </ul>
        </nav>
        <div>
          <div className={css.logo}>
            <LogoMobile />
          </div>
          <ul className={css.socialsList}>
            <li>
              <a href="#">
                <Facebook />
              </a>
            </li>
            <li className={css.socialsListItem}>
              <a href="#">
                <Twitter />
              </a>
            </li>
            <li className={css.socialsListItem}>
              <a href="#">
                <Instagram />
              </a>
            </li>
            <li className={css.socialsListItem}>
              <a href="#">
                <YouTube />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className={css.copyright}> &#169;Всі права захищені.</p>
    </footer>
  );
}
