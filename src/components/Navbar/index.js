import React from "react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../../css/style.css";

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);

  const changeBg = () => {
    // console.log(window.scrollY);
    if (window.scrollY > 400) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBg);

  return (
    <>
      <nav
        className={
          navbar
            ? "navbar activenav navbar-expand-lg navbar-dark fixed-top nav"
            : "navbar navbar-expand-lg navbar-dark fixed-top nav"
        }
      >
        <div className="container">
          <NavLink className="navbar-brand text-light" to="/">
            LOGO
          </NavLink>
          <button
            className="navbar-toggler navbar-toggler-light ml-auto "
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
                  to="#"
                >
                  Properties
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="menu_active"
                  exact
                  className="nav-link"
                  to="#"
                >
                  Finance
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="menu_active"
                  exact
                  className="nav-link"
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
