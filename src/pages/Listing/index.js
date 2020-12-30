import React from "react";
import { NavLink } from "react-router-dom";

import "../../css/style.css";
import CData from "../../data/Listings";
import Card from "../../components/Card";
// import Btn from "../../components/ListingBtn";
// import BtnData from "../../data/Listingbtn";

export default function index() {
  return (
    <>
      <section className="details-banner">
        <div className="container col-10 text-light">
          <h2 className="text-center">Property Listings</h2>
        </div>
      </section>
      {/* filter section */}
      <section className="filter-section pt-4">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row gy-5">
                <div className="col-lg-6 order-1">
                  <NavLink
                    type="button"
                    className="btn btn-lg btn-block text-light shadow mt-3 viewdetails"
                    to="/details"
                  >
                    Sale
                  </NavLink>
                </div>
                <div className="col-lg-6 order-2">
                  <NavLink
                    type="button"
                    className="btn btn-lg btn-block text-light shadow mt-3 viewdetails"
                    to="/details"
                  >
                    Rent
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row gy-5">
                <div className="col-lg-3 order-1">
                  <NavLink
                    type="button"
                    className="btn btn-lg btn-block text-light shadow mt-3 viewdetails btnblue"
                    to="/details"
                  >
                    Land
                  </NavLink>
                </div>
                <div className="col-lg-3 order-1">
                  <NavLink
                    type="button"
                    className="btn btn-lg btn-block text-light shadow mt-3 viewdetails btnblue"
                    to="/details"
                  >
                    Flat
                  </NavLink>
                </div>
                <div className="col-lg-3 order-1">
                  <NavLink
                    type="button"
                    className="btn btn-lg btn-block text-light shadow mt-3 viewdetails btndark"
                    to="/details"
                  >
                    Bulding
                  </NavLink>
                </div>
                <div className="col-lg-3 order-1">
                  <NavLink
                    type="button"
                    className="btn btn-lg btn-block text-light shadow mt-3 viewdetails btndark"
                    to="/details"
                  >
                    Commercial
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* prop listings */}
      <div className="container-fluid pb-5 about-myjob pt-5">
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
    </>
  );
}
