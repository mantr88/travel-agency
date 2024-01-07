import Button from "../../ui/Button/Button";
import MobileMenu from "../MobileMenu/MobileMenu";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero-section">
      <div className="pict-small">
        <img src="./public/images/pict-small.svg" />
      </div>
      <div className="hero-text-wrap">
        <p className="hero-slogan">Знайди своє місце</p>
        <p className="hero-title">Подорожуй зі смаком</p>
      </div>
      <div className="hero-btn-wrap">
        <Button extraСlassName="hero-btn-find">Знайти оголошення</Button>
        <Button extraСlassName="hero-btn-create">Подати оголошення</Button>
      </div>
      <MobileMenu />
    </section>
  );
}

export default Hero;
