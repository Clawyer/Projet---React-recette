import React from "react"
// import { Carousel } from "react-carousel-minimal";
import cars_1 from "../assets/img/carousel_img1.jpg"
import cars_2 from "../assets/img/carousel_img2.jpg"
import cars_3 from "../assets/img/carousel_img3.jpg"
import cars_4 from "../assets/img/carousel_img4.jpg"
import cars_5 from "../assets/img/carousel_img5.jpg"
import "../assets/css/header.css"

export default function Header() {
    const data = [
      {
        image:cars_1,
      },
      {
        image:cars_2,
      },
      {
        image:cars_3,
      },
      {
        image:cars_4,
      },
      {
        image:cars_5,
      },

    ];



  return (
    <header className="header">
      {/* <Carousel
        data={data}
        time={2000}
        width="100%"
        height="500px"
        radius="10px"
        automatic={true}
        dots={true}
        pauseIconColor="white"
        pauseIconSize="40px"
        slideBackgroundColor="darkgrey"
        slideImageFit="cover"
        style={{
          textAlign: "center",
          maxWidth: "850px",
          maxHeight: "500px",
          margin: "40px auto",
        }}
      /> */}
      <nav className="nav">
        {/* <img className="logo" src={logo} alt="logo" /> */}
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
