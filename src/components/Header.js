import React from "react"
import "../assets/css/header.css"
import "../assets/css/style.css"
import logo from "../assets/img/logo.jpg"

export default function Header() {

  return (
    <header className="header">
      <nav className="nav">
        <img className="logo" src={logo} alt="JM factory" />
        <h1>JM - CUISINE </h1>
        <ul className="menu">
          <li>
            <a href="#">Starters</a>
          </li>
          <li>
            <a href="#"> Main </a>
          </li>
          <li>
            <a href="#"> Dessert </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
