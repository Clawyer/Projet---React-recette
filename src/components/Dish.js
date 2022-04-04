import React from "react";
import "../assets/css/dishes.css";

export default function Dish(props) {

  return (
    <div  className={`dish ${props.title}`}>
      <img className="dish_img" src={props.url} alt={props.title} />
      <h3 className="dish--title">{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
}
