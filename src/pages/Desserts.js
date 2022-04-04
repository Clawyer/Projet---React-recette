import React from "react";
import foretnoir from "../assets/img/dessert1-fôret-noire.jpg";
import fraisier from "../assets/img/dessert2-fraisier.jpg";
import fondant from "../assets/img/dessert3-gâteaux-fondant-au-chocolat.webp";
import millefeuilles from "../assets/img/dessert4-mille-feuilles.jpg";
import fruits from "../assets/img/dessert5_fruits.jpg";
import tartepomme from "../assets/img/dessert6_tarte-pomme.jpg";
import tiramisu from "../assets/img/dessert7_tiramisu.jpeg";
import truffes from "../assets/img/dessert8_truffes.jpg";
import Titre from "../components/Titre";

export default function Desserts() {
  const tableaudesserts = [
    {
      title: "Fôret noire",
      url: foretnoir,
    },

    {
      title: "Fraisier",
      url: fraisier,
    },

    {
      title: "Fondant",
      url: fondant,
    },

    {
      title: "Mille Feuilles",
      url: millefeuilles,
    },

    {
      title: "Salade de Fruits",
      url: fruits,
    },

    {
      title: "Tarte au Pomme",
      url: tartepomme,
    },

    {
      title: "Tiramisu",
      url: tiramisu,
    },

    {
      title: "Truffes",
      url: truffes,
    },
  ];
  const imgdesserts = tableaudesserts.map((element) => {
    return <Titre key={element.title} {...element} />;
  });
  return <>{imgdesserts}</>;
}
