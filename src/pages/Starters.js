import React from "react";
import "../assets/css/starters.css";
import img from "../data/images";
import Dish from "../components/Dish";

export default function Starters(props) {
  const images = img.images.map((x) => {
    return <Dish key={x.title} {...x} />;
  });
  return <section className="starters">{images}</section>;
}
