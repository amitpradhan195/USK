import React from "react";
import { BiChevronRight } from "react-icons/bi";
import "../../css/style.css";
import { NavLink } from "react-router-dom";

export default function Card(props) {
  return (
          <div className="col-md-4">
              <div className="card-box-a card-shadow">
                <div className="img-box-a">
                  <img src={`propertyImages/${props.imgsrc}`} alt="imageProperty" className="img-a img-fluid"/>
                </div>
                <div className="card-overlay">
                  <div className="card-overlay-a-content">
                    <div className="card-header-a">
                      <h2 className="card-title-a">
                        <NavLink to={"/details/" + props.id}>{props.prop}
                          <br /> {props.location}</NavLink>
                      </h2>
                    </div>
                    <div className="card-body-a">
                      <div className="price-box d-flex">
                        <span className="price-a">{props.tag}</span>
                      </div>
                      <NavLink to={"/details/" + props.id} className="link-a">Click here to view
                        <BiChevronRight size="1.5em"/>
                      </NavLink>
                    </div>
                    <div className="card-footer-a">
                      <ul className="card-info d-flex justify-content-around">
                        <li className="text-center">
                          <h4 className="card-info-title">Area</h4>
                          <span>340m
                            <sup>2</sup>
                          </span>
                        </li>
                        <li className="text-center">
                          <h4 className="card-info-title">Beds</h4>
                          <span>{props.bed}</span>
                        </li>
                        <li className="text-center">
                          <h4 className="card-info-title">Baths</h4>
                          <span>{props.bath}</span>
                        </li>
                        <li className="text-center">
                          <h4 className="card-info-title">Parking</h4>
                          <span>{props.parking}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  );
}
