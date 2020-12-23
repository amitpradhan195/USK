import React from "react";

import slider1 from "../../assets/slider1.jpg";
import slider2 from "../../assets/slider2.jpg";
import slider3 from "../../assets/slider3.jpg";
import { FaBeer } from "react-icons/fa";

import { IconContext } from "react-icons";
import { MdLocationOn } from "react-icons/md";
import "./Card.css";

export default function index() {
  return (
    <IconContext.Provider value={{ color: "#28c092", size: "20px" }}>
      <>
        <section className="featured-container">
          <h4 className="text-center pt-5">Featured Properties</h4>
          <div className="featured-title mb-5"></div>

          <div className="featured-card">
            <div className="container-fluid pb-5 about-myjob">
              <div className="row">
                <div className="col-10 mx-auto">
                  <div className="row gy-5">
                    <div className="col-md-4 col-10 mx-auto">
                      <div className="card shadow about-card">
                        <div className="card-body">
                          <img
                            alt="First slide"
                            className="d-block w-100"
                            src={slider1}
                          />
                          <h4 className=" text-center text-capitalize font-weight-bold pt-3">
                            4 BHK Flat
                          </h4>
                          <p className="text-center">
                            <span className="icon">
                              <MdLocationOn />
                            </span>
                            Sinamangal, Kathmandu
                          </p>

                          <div class="d-flex justify-content-center"></div>

                          <button
                            type="button"
                            class="btn btn-primary d-flex align-items-center"
                          >
                            Primary
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </IconContext.Provider>
  );
}
