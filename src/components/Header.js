import React from "react"
import logo from "../assets/img/logo.jpg"
import "../assets/css/style.css";

export default function Header(){
    return (
        <nav className="nav">
            <img className="logo" src={logo} alt="logo" />
            <ul className="menu">
                <li> <a href="#">Starters</a> </li>
                <li> <a href="#"> Main </a> </li>
                <li> <a href="#"> Dessert </a> </li>
            </ul>
        </nav>
    )
}