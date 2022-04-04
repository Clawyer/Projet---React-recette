import React from "react";
import data_desserts from "../data/data_recipe";
import Dish from "../components/Dish";
import "../assets/css/desserts.css";

export default function Desserts() {
  const desserts = data_desserts.desserts.map((element) => {
    return <Dish key={element.id} {...element} />;
  });
  return <section className="desserts-container">{desserts}</section>;
}
