import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import logo from "./assets/img/logo.png";
import Home from "./pages/Home";
import Main from "./pages/Main";
import Starters from "./pages/Starters";
import Desserts from "./pages/Desserts";
import Details from "./pages/Details";
import "./App.css";
import "./assets/css/header.css";

function App() {
  return (
    <>
      <Router forceRefresh={true}>
        <header className="header">
          <nav className="nav">
            <Link to="/">
              <img className="logo" src={logo} alt="JM factory" />
            </Link>

            <h1 className="header--title">JM - CUISINE </h1>
            <ul className="menu">
              <li>
                <Link to="/">Top dishes</Link>
              </li>
              <li>
                <Link to="/starters">Starters</Link>
              </li>
              <li>
                <Link to="/main_dish"> Main dish</Link>
              </li>
              <li>
                <Link to="/desserts"> Desserts</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="starters/*" element={<Starters />} />
          <Route path="main_dish/*" element={<Main />} />
          <Route path="desserts/*" element={<Desserts />} />
          <Route path="details/:id" element={<Details />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
