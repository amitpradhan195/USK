import React from "react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Requirements from "../../components/Requirements";
import Career from "../../components/Career";
import logo from "../../assets/logo_USK.png";

import "../../css/style.css";

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);

  const changeBg = () => {
    if (window.scrollY > 0) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBg);

  return (
    <>
      <Requirements></Requirements>
      <Career></Career>
      <nav
        className={
          navbar
            ? "navbar activenav navbar-expand-lg navbar-dark fixed-top nav"
            : "navbar navbarunactive navbar-expand-lg navbar-dark fixed-top nav"
        }
      >
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <img alt="logo" src={logo} width="100px"/>
          </NavLink>
          <button
            className="navbar-toggler collapsed navbar-toggler-light ml-auto "
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-sm-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  activeClassName="menu_active"
                  exact
                  className="nav-link"
                  to="/listings"
                >
                  Properties
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="menu_active"
                  exact
                  className="nav-link"
                  to="/finance"
                >
                  Finance
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="menu_active"
                  exact
                  className="nav-link"
                  data-toggle="modal"
                  data-target="#exampleModal1"
                  to="#"
                >
                  Requirements
                </NavLink>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto ml-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  activeClassName="menu_active"
                  exact
                  className="nav-link"
                  data-toggle="modal"
                  data-target="#exampleModal2"
                  to="#"
                >
                  Career
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
