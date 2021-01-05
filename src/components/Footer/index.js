import React from "react";
import "../../css/style.css";
import mapimage from "../../assets/office.PNG";
import { NavLink } from "react-router-dom";

import { IconContext } from "react-icons";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { VscDebugBreakpointLog } from "react-icons/vsc";

import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
// import FacebookIcon from "@material-ui/icons/Facebook";

export default function Footer() {
  return (
    <>
      <footer className="text-lg-start footer mt-4 pt-1 pb-3">
        <div className="container p-4">
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
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

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <ul className="list-unstyled mb-0">
                <li>
                  <NavLink to="/about" className="a">
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

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h4 className="">Service</h4>

              <ul className="list-unstyled mb-0">
                <li>
                  <NavLink to="/finance" className="a">
                    <IconContext.Provider value={{ color: "#F54D53" }}>
                      <VscDebugBreakpointLog className="mr-2" />
                    </IconContext.Provider>
                    Finance
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="a"
                    data-toggle="modal"
                    data-target="#exampleModal2"
                    to="#"
                  >
                    <IconContext.Provider value={{ color: "#F54D53" }}>
                      <VscDebugBreakpointLog className="mr-2" />
                    </IconContext.Provider>
                    Career
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h4 className="">Social</h4>

              <ul className="list-unstyled mb-0">
                <li className="pb-3">
                  <NavLink to="#!">
                    <IconContext.Provider
                      value={{ color: "#166FE5", size: "25px" }}
                    >
                      <FaFacebook className="mr-2" />
                    </IconContext.Provider>
                    Facebook
                  </NavLink>
                </li>
                <li className="pb-3">
                  <NavLink to="#!">
                    <IconContext.Provider
                      value={{ color: "#F54D53", size: "25px" }}
                    >
                      <FaInstagram className="mr-2" />
                    </IconContext.Provider>
                    Instagram
                  </NavLink>
                </li>
                <li className="pb-3">
                  <NavLink to="#!">
                    <IconContext.Provider
                      value={{ color: "#0A66C2", size: "25px" }}
                    >
                      <FaLinkedinIn className="mr-2" />
                    </IconContext.Provider>
                    LinkedIn
                  </NavLink>
                </li>
                <li className="pb-3">
                  <NavLink to="#!">
                    <IconContext.Provider
                      value={{ color: "#1C9CEA", size: "25px" }}
                    >
                      <FaTwitter className="mr-2" />
                    </IconContext.Provider>
                    Twitter
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

// export default GoogleApiWrapper({
//   apiKey: "AIzaSyC7W6tR69P7duXtfn-3hiXo7yEQ1NYVLQQ",
// })(Footer);
