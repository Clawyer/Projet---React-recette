import React from "react";
import "../assets/css/starters.css";
import Dish from "../components/Dish";
import data_starters from "../data/data_recipe";

export default function Starters(props) {
  const starters = data_starters.starters.map((x) => {
    return <Dish key={x.id} {...x} />;
  });

  return <section className="starters hide">{starters}</section>;
}
