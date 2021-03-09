import React from "react";
import { useState } from "react";
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
            ? "navbar activenav navbar-expand-lg navbar-dark fixed-top stroke"
            : "navbar navbarunactive navbar-expand-lg navbar-light fixed-top stroke"
        }>
        <div className="container">
          <a className="navbar-brand" href="/">
            <img alt="logo" src={logo} className="navbarBrandImg"/>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/listings"> Properties </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/finance"> Finance </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="modal" data-bs-target="#requirementsModal" href="#requirements">
                  Requirements
                </a>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto ml-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="modal" data-bs-target="#careerModal" href="#career">
                  Career
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
