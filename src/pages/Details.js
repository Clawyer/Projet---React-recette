import React from "react";
import { useParams } from "react-router-dom";
import Propsdetails from "../components/Props-details";
import data_all from "../data/data_recipe";
import "../assets/css/details.css";

export default function Details() {
  let { id } = useParams();

  const data = [...data_all.main, ...data_all.starters, ...data_all.desserts];
  const detailsrecette = data.map((plats) => {
    if (plats.id === parseInt(id)) {
      return <Propsdetails key={plats.id} {...plats} />;
    }
  });
  return <div className="details-container">{detailsrecette}</div>;
}
