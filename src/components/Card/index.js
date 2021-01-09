import React from "react";

import { IconContext } from "react-icons";
import { MdLocationOn } from "react-icons/md";
import { FaBed } from "react-icons/fa";
import { GiKnifeFork } from "react-icons/gi";
import { FaBath } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

import "../../css/style.css";
import { NavLink } from "react-router-dom";

export default function Card(props) {
  return (
    <IconContext.Provider value={{ color: "#707070", size: "20px" }}>
      <>
        <div className="col-md-4 col-10 mx-auto">
          <div className="card shadow about-card" data-aos="fade-down">
            <div className="card-body">
              {/* title */}
              <img
                alt={props.imgsrc}
                className="d-block w-100"
                src={props.imgsrc}
              />
              <div className="tag shadow" name="ppfor" style={props.css}>
                {props.tag}
              </div>
              <h4 className=" text-center text-capitalize font-weight-bold pt-3">
                {props.prop}
              </h4>
              <p className="text-center">
                <span className="icon">
                  <MdLocationOn />
                </span>
                <small>{props.location}</small>
              </p>
              {/* feature */}
              <div className="facilities row pb-3 pt-4">
                <div className="col-md-5 mx-auto">
                  <span className="pr-2">
                    <FaBed />
                  </span>
                  <small>{props.bed} Bedrooms</small>
                </div>
                <div className="col-md-5 mx-auto">
                  <span className="pr-2">
                    <GiKnifeFork />
                  </span>
                  <small>{props.kitchen} Kitchen</small>
                </div>
              </div>

              <div className="facilities1 row pb-4">
                <div className="col-md-5 mx-auto">
                  <span className="pr-2">
                    <FaBath />
                  </span>
                  <small>{props.bath} Bathroom</small>
                </div>
                <div className="col-md-5 mx-auto">
                  <span className="pr-2">
                    <FaPhoneAlt />
                  </span>
                  <small>{props.contact}</small>
                </div>
              </div>
              {/* feature end */}
              <NavLink
                type="button"
                className="btn btn-lg btn-block shadow mt-3 viewdetails"
                to={"/details/" + props.id}
              >
                View Details
              </NavLink>
            </div>
          </div>
        </div>
      </>
    </IconContext.Provider>
  );
}
