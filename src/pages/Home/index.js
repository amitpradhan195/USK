import React from "react";

import "../../css/style.css";
import Card from "../../components/Card";
import CData from "../../data/Carddata";
import { NavLink } from "react-router-dom";
import Finance from "../../components/Finance";
import HomeSlider from "../../components/HomeSlider";
import DreamModal from "../../components/DreamHouse";

export default function Home() {
  return (
    <>
      <HomeSlider></HomeSlider>
      {/* home navigation section */}
      <section className="nav-container">
        <div className="col-12 mx-auto">
          <ul className="nav nav-pills nav-fill ">
            <li className="nav-item active-link ">
              <a className="nav-link p-3" to="/">
                FOR SELL
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link p-3" to="/">
                FOR RENT
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* featured */}
      <section className="featured-container pt-5 mb-5">
        <h4 className="text-center heading-text">Featured Properties</h4>
        <div className="featured-title"></div>
      </section>

      {/* featured card */}
      <div className="container-fluid pb-5 about-myjob">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-5">
              {CData.map((value, indno) => {
                return (
                  <Card
                    key={indno}
                    imgsrc={value.imgsrc}
                    tag={value.tag}
                    css={value.css}
                    prop={value.prop}
                    location={value.location}
                    bed={value.bed}
                    kitchen={value.kitchen}
                    bath={value.bath}
                    contact={value.contact}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* build your home */}
      <div className="d-flex justify-content-center flex-column align-items-center pb-5 pt-5 ">
        <h4 className="heading-text">Do you want to built your home ?</h4>
        {/* <NavLink
          type="button"
          className="btn btn-lg btn-primary mt-3 btnbuilt shadow"
          to="#"
        >
          Click Here
        </NavLink> */}
        <DreamModal></DreamModal>
      </div>

      {/* financial alliance */}
      <Finance></Finance>
    </>
  );
}
