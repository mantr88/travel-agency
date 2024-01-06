import Button from "../../ui/Button/Button";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-text-wrap">
        <p className="hero-slogan">Знайди своє місце</p>
        <p className="hero-title">Подорожуй зі смаком</p>
      </div>
      <div className="hero-btn-wrap">
        <Button className="hero-btn-find">Знайти оголошення</Button>
        <Button className="hero-btn-create">Подати оголошення</Button>
      </div>
    </section>
  );
}

export default Hero;
