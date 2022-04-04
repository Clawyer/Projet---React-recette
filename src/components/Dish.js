import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Details from "../pages/Details";
import "../assets/css/dishes.css";

export default function Dish(props) {
  function handler_getprops(e) {
    const title = e.target.parentNode.className.split('dish')[1];
    console.log(title)
  }
  return (
    <div onClick={handler_getprops} className={`dish ${props.title}`}>
      <img className="dish_img" src={props.url} alt={props.title} />
      <h3 className="dish--title">{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
}
