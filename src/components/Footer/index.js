import React from "react";
import "../../css/style.css";
import { NavLink } from "react-router-dom";
import { IconContext } from "react-icons";
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { VscDebugBreakpointLog } from "react-icons/vsc";

export default function Footer(props) {
  return (
    <>
      <footer className="text-lg-start footer mt-4 pt-1 pb-1">
        <div className="container p-4">
          <div className="row">
            <div className="col-md-5">
              <iframe className="map-image" title="footerMap" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1050.0572117778795!2d85.36415030200747!3d27.718602138871947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1615866354767!5m2!1sen!2snp" style={{border:'0px'}} allowFullScreen="" loading="lazy"></iframe>
              <div className="pt-3 pb-4">
                <h4>Head Office</h4>
                <h6>Pipalbot, Boudha</h6>
                <h6>Phone: 9841504552, 9813955307</h6>
                <h6>Mail: us@gmail.com</h6>
              </div>
            </div>

            <div className="col-md-2 pb-5">
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

            <div className="col-md-2 pb-4">
              <h4 className="">Service</h4>

              <ul className="list-unstyled mb-0">
                <li>
                  <NavLink to="/finance" className="a">
                    <IconContext.Provider value={{ color: "#F54D53" }}>
                      <VscDebugBreakpointLog className="me-2" />
                    </IconContext.Provider>
                    Finance
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="a"
                    data-bs-toggle="modal"
                    data-bs-target="#careerModal"
                    to="#career"
                  >
                    <IconContext.Provider value={{ color: "#F54D53" }}>
                      <VscDebugBreakpointLog className="me-2" />
                    </IconContext.Provider>
                    Career
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="col-md-3 pb-4">
              <h4 className="">Social</h4>

              <ul className="list-unstyled mb-0">
                <li className="pb-3">
                  <NavLink to="#!">
                    <IconContext.Provider
                      value={{ color: "#166FE5", size: "25px" }}
                    >
                      <FaFacebook className="me-2" />
                    </IconContext.Provider>
                    Facebook
                  </NavLink>
                </li>
                <li className="pb-3">
                  <NavLink to="#!">
                    <IconContext.Provider
                      value={{ color: "#F54D53", size: "25px" }}
                    >
                      <FaInstagram className="me-2" />
                    </IconContext.Provider>
                    Instagram
                  </NavLink>
                </li>
                <li className="pb-3">
                  <NavLink to="#!">
                    <IconContext.Provider
                      value={{ color: "#0A66C2", size: "25px" }}
                    >
                      <FaLinkedinIn className="me-2" />
                    </IconContext.Provider>
                    LinkedIn
                  </NavLink>
                </li>
                <li className="pb-3">
                  <NavLink to="#!">
                    <IconContext.Provider
                      value={{ color: "#1C9CEA", size: "25px" }}
                    >
                      <FaTwitter className="me-2" />
                    </IconContext.Provider>
                    Twitter
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p className="copyright text-center">
          All right reserved | US group Estate &copy; {new Date().getFullYear()}
          <br/>
          Designed by @<a href="https://zoektech.com/" target="_blank" rel="noopener noreferrer">Zoek Tech</a>
        </p>
      </footer>
    </>
  );
}

// export default GoogleApiWrapper({
//   apiKey: "AIzaSyBlheLBggIk0p-E2fhamggFxrH5B-jAdc8",
// })(Footer);
