import Button from "../../ui/Button/Button";
// import MobileMenu from "../MobileMenu/MobileMenu";
import css from "./Hero.module.css";

function Hero() {
  return (
    <section className={css.section}>
      <div className={css.overlay} />
      <div className={css.pictSmall}>
        <img src="../../../../public/images/pict-small.svg" />
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
