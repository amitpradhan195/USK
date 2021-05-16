import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
// import "./index.css";
import "../../css/style.css"

export default function VIP() {
  const [classH1, setClassH1] = useState("#EEEEEE");
  useEffect(() => {
    setTimeout(() => {
      document.body.classList.add("loaded");
    }, 1500);
  }, []);

  return (
    <>
      <section className="details-banner"></section>

      <div id="loader-wrapper">
        <div id="loader"></div>

        <div className="loader-section section-left"></div>
        <div className="loader-section section-right"></div>
      </div>

      <section className="heroCard">
        <div className="row">
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-8 pb-4 imageHero">
                <div
                  id="carouselExampleFade"
                  className="carousel slide carousel-fade"
                  data-bs-pause="false"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner carousel-overflow">
                    <div className="carousel-item active">
                      <img
                        src="/propertyImages/slider1.jpg"
                        className="d-block img w-100 mb-3 bg-body"
                        alt="propertyImg"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="/propertyImages/slider2.jpg"
                        className="d-block img w-100 mb-3 bg-body"
                        alt="propertyImg"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="/propertyImages/slider3.jpg"
                        className="d-block img w-100 mb-3 bg-body"
                        alt="propertyImg"
                      />
                    </div>
                  </div>
                </div>

                <div className="row propertyInfo">
                  <span className="col text-center">
                    <h6>BONE HOUSE</h6>
                    <p>2014</p>
                  </span>
                  <span className="col text-start">
                    <h6>LAMA GROUP, ON</h6>
                    <p>
                      Architect: <span>BONE Structure</span>
                    </p>
                  </span>
                </div>
              </div>

              <div className="col-md-4 align-self-center align-items-center content">
                <h3 className="pb-2">5 BHK Flat</h3>
                <p>
                  We also build using traditional construction methods of wood
                  frame houses, affording freedom of design and creativity and
                  yielding unique and beautiful results. Our hands-on approach
                  will bring your dream to life.
                </p>
                <NavLink to={"/details/1"}>
                  <button type="button" className="btn btn-outline-secondary">
                    View more &nbsp;
                    <span className="shift">⟶</span>
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-8 pb-4 imageHero1">
                <div
                  id="carouselExampleFade"
                  className="carousel slide carousel-fade"
                  data-bs-pause="false"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner carousel-overflow">
                    <div className="carousel-item active">
                      <img
                        src="/propertyImages/slider1.jpg"
                        className="d-block img w-100 mb-3 bg-body"
                        alt="propertyImg"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="/propertyImages/slider2.jpg"
                        className="d-block img w-100 mb-3 bg-body"
                        alt="propertyImg"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="/propertyImages/slider3.jpg"
                        className="d-block img w-100 mb-3 bg-body"
                        alt="propertyImg"
                      />
                    </div>
                  </div>
                </div>

                <div className="row propertyInfo">
                  <span className="col text-center">
                    <h6>BONE HOUSE</h6>
                    <p>2014</p>
                  </span>
                  <span className="col text-start">
                    <h6>LAMA GROUP, ON</h6>
                    <p>
                      Architect: <span>BONE Structure</span>
                    </p>
                  </span>
                </div>
              </div>

              <div className="col-md-4 align-self-center align-items-center content1">
                <h3 className="pb-2">5 BHK Flat</h3>
                <p>
                  We also build using traditional construction methods of wood
                  frame houses, affording freedom of design and creativity and
                  yielding unique and beautiful results. Our hands-on approach
                  will bring your dream to life.
                </p>
                <NavLink to={"/details/2"}>
                  <button type="button" className="btn btn-outline-secondary">
                    View more &nbsp;
                    <span className="shift">⟶</span>
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-8 pb-4 imageHero">
                <div
                  id="carouselExampleFade"
                  className="carousel slide carousel-fade"
                  data-bs-pause="false"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner carousel-overflow">
                    <div className="carousel-item active">
                      <img
                        src="/propertyImages/slider1.jpg"
                        className="d-block img w-100 mb-3 bg-body"
                        alt="propertyImg"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="/propertyImages/slider2.jpg"
                        className="d-block img w-100 mb-3 bg-body"
                        alt="propertyImg"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="/propertyImages/slider3.jpg"
                        className="d-block img w-100 mb-3 bg-body"
                        alt="propertyImg"
                      />
                    </div>
                  </div>
                </div>

                <div className="row propertyInfo">
                  <span className="col text-center">
                    <h6>BONE HOUSE</h6>
                    <p>2014</p>
                  </span>
                  <span className="col text-start">
                    <h6>LAMA GROUP, ON</h6>
                    <p>
                      Architect: <span>BONE Structure</span>
                    </p>
                  </span>
                </div>
              </div>

              <div className="col-md-4 align-self-center align-items-center content">
                <h3 className="pb-2">5 BHK Flat</h3>
                <p>
                  We also build using traditional construction methods of wood
                  frame houses, affording freedom of design and creativity and
                  yielding unique and beautiful results. Our hands-on approach
                  will bring your dream to life.
                </p>
                <NavLink to={"/details/3"}>
                  <button type="button" className="btn btn-outline-secondary">
                    View more &nbsp;
                    <span className="shift">⟶</span>
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
