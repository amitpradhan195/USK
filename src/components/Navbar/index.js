import React, { useState } from "react";
import Requirements from "../../components/Requirements";
import logo from "../../assets/logo_US.png";
import "../../css/style.css";
import { BiSearch } from 'react-icons/bi';
import { MdLocationOn } from 'react-icons/md';
import { NavLink } from "react-router-dom";

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
                <NavLink activeClassName="navbar__link--active" className="nav-link" to="/listings"> Properties </NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeClassName="navbar__link--active" className="nav-link" to="/finance"> Finance </NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeClassName="navbar__link--active" className="nav-link" to="/vip"> VIP </NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeClassName="navbar__link--active" className="nav-link" to="/dream-house"> DreamHouse </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" data-bs-toggle="modal" data-bs-target="#requirementsModal" to="#requirements">
                  Requirements
                </NavLink>
              </li>
            </ul>
            <form className="text-end searchForm">
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1"><BiSearch size="1.3em"/></span>
                  <input type="text" id="searchInput" className="" placeholder="Search" aria-label="Kathmandu" aria-describedby="basic-addon1"/>
                  {/* <button type="button" className="btn btn-b-n navbar-toggle-box" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01">
                    <BiSearch size="1.3em"/>
                  </button> */}
                </div>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
