import Criteria from "./components/Criteria/Criteria";
import Hero from "./components/Hero/Hero";
import css from "./page.module.css";

export default function Home() {
  return (
    <main className={css.container}>
      <Hero />
      <Criteria />
      <div style={{ marginTop: "700px" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis esse
        dolorem quod recusandae error quaerat incidunt, rem eligendi veniam
        repellat inventore blanditiis neque. Inventore facere quia incidunt amet
        vitae error soluta adipisci iste similique numquam. Odio hic aperiam
        sunt inventore minus, ad ex, optio molestiae maiores libero corporis
        fugit tempore?
      </div>
    </main>
  );
}
