import React from 'react';
import img1 from "../assets/img/plat1-blanquette-de-veau.jpg";
import img2 from "../assets/img/plat2-choucroute.webp";
import img3 from "../assets/img/plat3-ramen-naruto.jpg";
import img4 from "../assets/img/plat4-boeuf-bourguignon.jpg";
import img5 from "../assets/img/plat5_ribs.jpg";
import img6 from "../assets/img/plat6_curry.jpg";
import img7 from "../assets/img/plat7_carry.jpeg";
import img8 from "../assets/img/plat8_sushis.jpg";
import img9 from "../assets/img/entrée1-oeuf-mimoza.jpg";
import img10 from "../assets/img/entrée2-saumon-avec-aneth.webp";
import img11 from "../assets/img/entrée3-terrine-froide-poulet.jpg";
import img12 from "../assets/img/entrée4-verrine-de-crevettes-et-saumon-fume-.webp";
import img13 from "../assets/img/entree5_reine.jpg";
import img14 from "../assets/img/entree6_rouleaux.jpg";
import img15 from "../assets/img/entree7_samoussas.jpg";
import img16 from "../assets/img/entree8_nem.jpg";
import foretnoir from "../assets/img/dessert1-fôret-noire.jpg";
import fraisier from "../assets/img/dessert2-fraisier.jpg";
import fondant from "../assets/img/dessert3-gâteaux-fondant au-chocolat.webp";
import millefeuilles from "../assets/img/dessert4-mille-feuilles.jpg";
import fruits from "../assets/img/dessert5_fruits.jpg";
import tartepomme from "../assets/img/dessert6_tarte-pomme.jpg";
import tiramisu from "../assets/img/dessert7_tiramisu.jpeg";
import truffes from "../assets/img/dessert8_truffes.jpg";
import Propsdetails from "../components/Props-details"

export default function Details() {
    const tableaudetails = [
      {
        title: "Blanquette De Veau",
        url: img1,
      },

      {
        title: "Choucroute",
        url: img2,
      },

      {
        title: "Ramen-Naruto",
        url: img3,
      },

      {
        title: "Boeuf Bourguignon",
        url: img4,
      },

      {
        title: "Ribs",
        url: img5,
      },

      {
        title: "Curry",
        url: img6,
      },

      {
        title: "Carry",
        url: img7,
      },

      {
        title: "Sushi",
        url: img8,
      },

      {
        title: "Oeuf Mimoza",
        url: img9,
      },

      {
        title: "Saumon",
        url: img10,
      },

      {
        title: "Terrine Froide au Poulet",
        url: img11,
      },

      {
        title: "Verrine de Crevette et Saumon Fumé",
        url: img12,
      },

      {
        title: "Bouchée a la Reine",
        url: img13,
      },

      {
        title: "Rouleaux de Printemps",
        url: img14,
      },

      {
        title: "Samoussa",
        url: img15,
      },

      {
        title: "Nem",
        url: img16,
      },
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


const detailsrecette = tableaudetails.map((description) => {
    return  <Propsdetails key={description.details} {...description} />;
});
    return <div className='details-container'>{detailsrecette}</div>;

}
