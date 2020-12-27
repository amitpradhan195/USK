import React from "react";
import "../../css/style.css";
import CData from "../../data/Listings";
import Card from "../../components/Card";

export default function index() {
  return (
    <>
      <section className="details-banner">
        <div className="container col-10 text-light">
          <h2 className="text-center">Property Listings</h2>
        </div>
      </section>
      {/* filter section */}
      <section className="filter-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 order-1"></div>
            <div className="col-lg-6 order-2"></div>
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
