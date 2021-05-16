import React, { useState } from "react";
import Requirements from "../../components/Requirements";
import logo from "../../assets/logo_US.png";
import "../../css/style.css";
import "../../css/style.scss";
import { NavLink } from "react-router-dom";
import DreamHouse from "../DreamHouse/index";

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
      <DreamHouse></DreamHouse>

      <nav
        className={
          navbar
            ? "navbar activenav font-sm navbar-expand-lg fixed-top stroke"
            : "navbar navbarunactive font-sm navbar-expand-lg fixed-top stroke"
        }>
        <div className="container">
          <a className="navbar-brand" href="/">
            <img alt="logo" src={logo} className="navbarBrandImg"/>
          </a>
          <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink activeClassName="navbar__link--active" className="nav-link text-capitalize" to="/listings"> Listings </NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeClassName="navbar__link--active" className="nav-link text-capitalize" to="/finance"> Finance </NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeClassName="navbar__link--active" className="nav-link text-capitalize" to="/vip"> VIP </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-capitalize" to="/dream-house"> DreamHouse </NavLink>
              </li>
              {/* <li className="nav-item">
                <NavLink className="nav-link text-capitalize" data-bs-toggle="modal" id="three" data-bs-target="#dreamhouseModal" to="#dream-house"> DreamHouse </NavLink>
              </li> */}
              {/* <li className="nav-item">
                <NavLink className="nav-link text-capitalize" data-bs-toggle="modal" data-bs-target="#requirementsModal" to="#requirements">
                  Requirements
                </NavLink>
              </li> */}
            </ul>
            <div className="container-search">
              <input type="text" placeholder="Search..."/>
              <div className="search"></div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
