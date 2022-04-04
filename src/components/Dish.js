import React from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/dishes.css";

export default function Dish(props) {
  let navigate = useNavigate();
  function handler_getprops(e) {
    const id = e.target.closest(".dish").classList[1];
    navigate("/details/" + id);
  }
  return (
    <div onClick={handler_getprops} className={`dish ${props.id}`}>
      <img className="dish_img" src={props.url} alt={props.title} />
      <div className="card--text">
        <h3 className="dish--title">{props.title}</h3>
        <div className="rates">{props.rates}</div>
      </div>
    </div>
  );
}
