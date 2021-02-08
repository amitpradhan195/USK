import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Requirements from "../../components/Requirements";
import Career from "../../components/Career";
import logo from "../../assets/logo_US.png";
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
            ? "navbar activenav navbar-expand-lg navbar-dark fixed-top nav stroke"
            : "navbar navbarunactive navbar-expand-lg navbar-dark fixed-top nav stroke"
        }
      >
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <img alt="logo" src={logo} className="navbarBrandImg"/>
          </NavLink>
          <button
            className="navbar-toggler navbar-toggler-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
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
                  data-bs-toggle="modal"
                  data-bs-target="#requirementsModal"
                  to="#requirements"
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
                  data-bs-toggle="modal"
                  data-bs-target="#careerModal"
                  to="#career"
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
