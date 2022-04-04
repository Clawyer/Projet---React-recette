import Dish from "../components/Dish";
import data_dish from "../data/data_recipe";
import "../assets/css/home.css";

export default function Home() {
  const top_dish = data_dish.top.map((x) => {
    return <Dish key={x.id} {...x} />;
  });

  return (
    <section className="top--section">
      <h2 className="top--title">Top 4 des recettes de la semaine ! </h2>
      <article className="top_dish">{top_dish}</article>
    </section>
  );
}
