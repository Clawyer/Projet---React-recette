import "../assets/css/home.css";
import Dish from "../components/Dish";
import dish1 from "../assets/img/dessert1-fôret-noire.jpg";
import dish2 from "../assets/img/entree1-oeuf-mimosa.jpg";
import dish4 from "../assets/img/plat3-ramen-naruto.jpg";
import dish3 from "../assets/img/plat6_curry.jpg";

export default function Home() {
  let data_dish = [
    {
      title: "Fôret Noire",
      url: dish1,
    },
    {
      title: "Oeufs Mimosa",
      url: dish2,
    },
    {
      title: "Poulet Curry",
      url: dish3,
    },
    {
      title: "Nouilles Naruto",
      url: dish4,
    },
  ];

  const top_dish = data_dish.map((x) => {
    return (
      <Dish
        key={x.title}
        {...x}
      />
    );
  });

  return (
    <section className="top--section">
      <h2 className="top--title">Top 4 des recettes de la semaine ! </h2>
      <article className="top_dish">
        {top_dish}
      </article>
    </section>
  );
}
