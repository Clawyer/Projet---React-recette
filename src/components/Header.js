import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "../assets/css/header.css";
import logo from "../assets/img/logo.png";
import Home from "../pages/Home";
import Main from "../pages/Main";
import Starters from "../pages/Starters";
import Desserts from "../pages/Desserts";
import Details from "../pages/Details";

export default function Header() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="starters/*" element={<Starters />} />
        <Route path="main_dish/*" element={<Main />} />
        <Route path="desserts/*" element={<Desserts />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
      <header className="header">
        <nav className="nav">
          <img className="logo" src={logo} alt="JM factory" />
          <h1 className="header--title">JM - CUISINE </h1>
          <ul className="menu">
            <li>
              <Link to="/">Top dishes</Link>
            </li>
            <li>
              <Link to="/starters">Starters</Link>
            </li>
            <li>
              <Link to="/desserts"> Main</Link>
            </li>
            <li>
              <Link to="/main_dish"> Dessert</Link>
            </li>
          </ul>
        </nav>
      </header>
    </Router>
  );
}
