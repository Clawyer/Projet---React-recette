import React from "react"
// import { Carousel } from "react-carousel-minimal";
import cars_1 from "../assets/img/carousel_img1.jpg"
import cars_2 from "../assets/img/carousel_img2.jpg"
import cars_3 from "../assets/img/carousel_img3.jpg"
import cars_4 from "../assets/img/carousel_img4.jpg"
import cars_5 from "../assets/img/carousel_img5.jpg"
import "../assets/css/header.css"

export default function Header() {

  return (
    <header className="header">
      <nav className="nav">
        <h1>JM - CUISINE </h1>
        <ul className="menu">
          <li>
            {" "}
            <a href="#">Starters</a>{" "}
          </li>
          <li>
            {" "}
            <a href="#"> Main </a>{" "}
          </li>
          <li>
            {" "}
            <a href="#"> Dessert </a>{" "}
          </li>
        </ul>
      </nav>
    </header>
  );
}
