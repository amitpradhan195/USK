import React from "react";
import "../../css/style.css";
import mapimage from "../../assets/office.PNG";
import { NavLink } from "react-router-dom";

import { IconContext } from "react-icons";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
// import FacebookIcon from "@material-ui/icons/Facebook";

export default function Footer() {
  return (
    <IconContext.Provider value={{ color: "#28c092", size: "25px" }}>
      <>
        <footer className="text-lg-start footer mt-4 pt-3 pb-3">
          <div class="container p-4">
            <div class="row">
              <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
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

                <h4 className="pt-3">Head Office</h4>
                <h6>Airport, Kathmandu</h6>
                <h6>Phone: 9851125478, 9851236547</h6>
                <h6>Mail: moysti@gmail.com</h6>
              </div>

              <div class="col-lg-3 col-md-6 mb-4 mb-md-0 pl-5">
                <ul className="list-unstyled mb-0">
                  <li>
                    <NavLink to="#!" className="a">
                      <h4>About Us</h4>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/faq" className="a">
                      <h4>FAQ</h4>
                    </NavLink>
                  </li>
                </ul>
              </div>

              <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h4 class="">Service</h4>

                <ul className="list-unstyled mb-0">
                  <li>
                    <NavLink to="#!" className="a">
                      Finance
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="#!" className="a">
                      Career
                    </NavLink>
                  </li>
                </ul>
              </div>

              <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h4 class="">Social</h4>

                <ul className="list-unstyled mb-0">
                  <li className="pb-3">
                    <NavLink to="#!">
                      <FaFacebook /> Facebook
                    </NavLink>
                  </li>
                  <li className="pb-3">
                    <NavLink to="#!">
                      <FaInstagramSquare /> Instagram
                    </NavLink>
                  </li>
                  <li className="pb-3">
                    <NavLink to="#!">
                      <FaLinkedinIn /> LinkedIn
                    </NavLink>
                  </li>
                </ul>
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
