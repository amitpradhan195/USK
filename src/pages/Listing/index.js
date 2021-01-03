import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

import "../../css/style.css";
import CData from "../../data/Listings";
import Card from "../../components/Card";

export default function Listing() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className="details-banner">
        <div className="container col-10 text-light">
          {/* <h2 className="text-center">Property Listings</h2> */}
        </div>
      </section>
      {/* filter section */}
      <section className="filter-section pt-4">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row gy-5">
                <ul class="nav">
                  <li class="nav-item bg-light">
                    <form class="form-inline">
                      <div class="form-group">
                        <select class="custom-select form-control">
                          <option selected>Popular</option>
                          <option value="1">Sale</option>
                          <option value="2">Rent</option>
                        </select>
                      </div>
                    </form>
                  </li>
                  <li class="nav-item bg-light">
                    <a class="nav-link bg-light text-dark" href="#">
                      Land
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link bg-light text-dark" href="#">
                      Flat
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link bg-light text-dark" href="#">
                      Bulding
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link bg-light text-dark" href="#">
                      Commercial
                    </a>
                  </li>
                </ul>
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
