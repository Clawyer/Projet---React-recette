import React from "react"
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
