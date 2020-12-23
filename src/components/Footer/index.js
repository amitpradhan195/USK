import React from "react";
import "../../css/style.css";
import mapimage from "../../assets/office.PNG";
import { NavLink } from "react-router-dom";

import { IconContext } from "react-icons";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
// import FacebookIcon from "@material-ui/icons/Facebook";

export default function Footer() {
  return (
    <IconContext.Provider value={{ color: "#28c092", size: "40px" }}>
      <>
        <footer className="bg-light text-lg-start footer">
          <div className="container p-4">
            <div className="row">
              <div className="col-lg-6 col-md-12 mb-4 mb-md-0 footer-info pr-lg-3 pb-md-3 pb-sm-3 pt-3">
                <img className="map-image" src={mapimage} alt="map" />
                {/* <Map google={this.props.google} zoom={14}>
                <Marker
                  onClick={this.onMarkerClick}
                  name={"Current location"}
                />

                <InfoWindow onClose={this.onInfoWindowClose}>
                  <div>
                    <h1>{this.state.selectedPlace.name}</h1>
                  </div>
                </InfoWindow>
              </Map> */}

                <h3 className="pt-3">Head Office</h3>
                <h6>Airport, Kathmandu</h6>
                <h6>Phone: 9851125478, 9851236547</h6>
              </div>

              <div className="col-lg-6 col-md-12 mb-4 mb-md-0 pl-lg-5 pt-md-3 pt-sm-3">
                <ul className="list-unstyled mb-0">
                  <li>
                    <NavLink to="#!" className="a">
                      <h2>About Us</h2>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="#!" className="a">
                      <h2>Our Agents</h2>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="#!" className="a">
                      <h2>FAQ</h2>
                    </NavLink>
                  </li>
                </ul>
                <h2>Find Us On: </h2>
                <ul className="list-unstyled body-list-social">
                  <li className="body-list-item1 pr-3">
                    <NavLink to="#!" target="_blank">
                      <FaFacebook />
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="#!" target="_blank">
                      <FaInstagramSquare />
                    </NavLink>
                  </li>
                </ul>
                <h4>
                  <small>Mail: moysti@gmail.com</small>
                </h4>
              </div>
            </div>
          </div>
        </footer>
      </>
    </IconContext.Provider>
  );
}

// export default GoogleApiWrapper({
//   apiKey: "AIzaSyC7W6tR69P7duXtfn-3hiXo7yEQ1NYVLQQ",
// })(Footer);
