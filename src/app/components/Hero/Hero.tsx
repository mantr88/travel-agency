import Button from "../../ui/Button/Button";
import css from "./Hero.module.css";

import balloonPic from "../../../../public/images/pict-small.svg";
import Image from "next/image";

function Hero() {
  return (
    <section className={css.section}>
      <div className={css.overlay} />
      <div className={css.pictSmall}>
        <Image src={balloonPic} alt="balloon" />
      </div>
      <div className={css.textWrap}>
        <p className={css.slogan}>Знайди своє місце</p>
        <p className={css.title}>Подорожуй зі смаком</p>
      </div>
      <div className={css.btnWrap}>
        <Button extraСlassName={css.btnFind}>Знайти оголошення</Button>
        <Button extraСlassName={css.btnCreate}>Подати оголошення</Button>
      </div>
      {/* <MobileMenu /> */}
    </section>
  );
}

export default Hero;
