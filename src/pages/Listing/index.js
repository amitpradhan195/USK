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
                <ul className="nav">
                  <li className="nav-item bg-light">
                    <form className="form-inline">
                      <div className="form-group">
                        <select className="custom-select form-control">
                          <option selected>Popular</option>
                          <option value="1" to="#!">
                            Sale
                          </option>
                          <option value="2" to="#!">
                            Rent
                          </option>
                        </select>
                      </div>
                    </form>
                  </li>
                  <li className="nav-item bg-light">
                    <NavLink className="nav-link bg-light text-dark" to="#!">
                      Land
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link bg-light text-dark" to="#!">
                      Flat
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link bg-light text-dark" to="#!">
                      Bulding
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link bg-light text-dark" to="#!">
                      Commercial
                    </NavLink>
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
