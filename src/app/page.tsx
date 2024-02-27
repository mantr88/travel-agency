import Criteria from "./components/Criteria/Criteria";
import Hero from "./components/Hero/Hero";
import css from "./page.module.css";

export default function Home() {
  return (
    <main className={css.container}>
      <Hero />
      <Criteria />
    </main>
  );
}
