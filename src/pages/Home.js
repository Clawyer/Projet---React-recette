import "../assets/css/home.css";
import Dish from "../components/Dish";
import dish1 from "../assets/img/dessert1-forêt-noire.jpg";
import dish2 from "../assets/img/entrée1-oeuf-mimosa.jpg";
import dish4 from "../assets/img/plat3-ramen-naruto.jpg";
import dish3 from "../assets/img/plat6_curry.jpg";

export default function Home() {
  let data_dish = [
    {
      title: "Oeufs Mimosa",
      url: dish1,
      description:
        "L'œuf mimosa est un œuf dur farci dont le blanc est rempli de mayonnaise ou d'un mélange à base de mayonnaise puis saupoudré de jaune cuit écrasé en petits grains évoquant la fleur de mimosa et d'herbes vertes, couramment du persil.",
    },
    {
      title: "Fôret Noire",
      url: dish2,
      description:
        "La forêt-noire, en allemand Schwarzwälder Kirschtorte, littéralement « gâteau à la cerise de la Forêt-Noire », est une pâtisserie allemande constituée de génoise au cacao imbibée de kirsch puis fourrée de crème chantilly et de cerises. Elle est recouverte de crème chantilly et décorée de copeaux de chocolat.",
    },
    {
      title: "Poulet Curry",
      url: dish3,
      description:
        "Un curry est un plat ayant son origine dans la gastronomie du sous-continent indien. Il se caractérise par une combinaison complexe d’épices et d’herbes comprenant en général des piments frais ou séchés. L’usage du terme « curry » pour désigner un plat est en général limité aux plats préparés dans une sauce.",
    },
    {
      title: "Nouilles Naruto",
      url: dish4,
      description:
        "Nouilles inspirées par l'illustre anime Naruto/Naruto Shippuden",
    },
  ];
  const top_dish = data_dish.map((x) => {
    return <Dish key={x.title} {...x} />;
  });

  return (
    <section className="top--section">
      <h2 className="top--title">Top 4 des recettes de la semaine ! </h2>
      <article className="top_dish">{top_dish}</article>
    </section>
  );
}
