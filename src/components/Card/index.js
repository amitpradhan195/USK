import React from "react";
import { IconContext } from "react-icons";
import { MdLocationOn } from "react-icons/md";
import { GiKnifeFork } from "react-icons/gi";
import { FaBed, FaPhoneAlt, FaBath, FaParking } from "react-icons/fa";
import "../../css/style.css";
import { NavLink } from "react-router-dom";

export default function Card(props) {
  return (
    <IconContext.Provider value={{ color: "#707070", size: "20px" }}>
      <>
        <div className="col-md-4 pb-5">
          <div className="card shadow" data-aos="fade-down">
            <div className="card-body">
              {/* title */}
              <img
                alt={props.imgsrc}
                className="d-block"
                // src={props.imgsrc}
                src={`propertyImages/${props.imgsrc}`}
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
              <div className="row pb-1">
                <div className="col-md-6 mx-auto">
                  <span className="pe-2">
                    <FaBed />
                  </span>
                  <small>Bedrooms: <span style={{fontWeight:'bold'}}>{props.bed}</span></small>
                </div>
                <div className="col-md-6 mx-auto">
                  <span className="pe-2">
                    <GiKnifeFork />
                  </span>
                  <small>Kitchen: <span style={{fontWeight:'bold'}}>{props.kitchen}</span></small>
                </div>
              </div>

              <div className="row pb-3">
                <div className=" col-md-6 mx-auto">
                  <span className="pe-2">
                    <FaBath />
                  </span>
                  <small>Bathroom: <span style={{fontWeight:'bold'}}>{props.bath}</span></small>
                </div>
                <div className="col-md-6 mx-auto">
                  <span className="pe-2">
                    <FaParking/>
                  </span>
                  <small>Parking: <span style={{fontWeight:'bold'}}>{props.parking}</span></small>
                </div>
              </div>
              <div className="text-center">
                <span>
                  <FaPhoneAlt className="pe-1"/>
                  <small>{props.contact}</small>
                </span>
              </div>
              {/* feature end */}
              <NavLink
                type="button"
                className="btn btn-lg w-100 btn-block shadow mt-3 viewdetails"
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
