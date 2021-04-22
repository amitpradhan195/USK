import React, { useEffect, useState, useRef } from "react";
import "../../css/style.css";
import HomeSlider from "../../components/HomeSlider";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import clip from '../../assets/videos/clip.mp4';
import "video-react/dist/video-react.css";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({
      duration: 1000,
      anchorPlacement: "top-bottom",
    });
  }, []);
  window.addEventListener('load', AOS.refresh);

  return (
    <>
      {/* <HomeSlider></HomeSlider> */}
      {/* featured */}
      {/* <section className="featured-container pt-3 mb-5">
        <h4 className="text-center heading-text">
          Latest Properties
        </h4>
        <div className="featured-title"></div>
      </section> */}

    <section>
      <video autoPlay muted loop className="w-100 h-100">
        <source src={clip} type="video/mp4"/>
      </video>
    </section>

      <section className="heroCard">
          <div className="row">
            <div className="col-md-8 pb-4 imageHero">
              <img src="/propertyImages/slider1.jpg" className="img w-100 mb-3 bg-body rounded" alt="propertyImage"/>
              <div className="row propertyInfo">
                <span className="col text-center">
                  <h6>BONE HOUSE</h6>
                  <p>2014</p>
                </span>
                <span className="col text-start">
                  <h6>LAMA GROUP, ON</h6>
                  <p>Architect: <span>BONE Structure</span></p>
                </span>
              </div>
            </div>
            <div className="col-md-4 align-self-center align-items-center content">
              <h3 className="pb-2">5 BHK Flat</h3>
              <p>We also build using traditional construction methods of wood frame houses, affording freedom of design and creativity and yielding unique and beautiful results. Our hands-on approach will bring your dream to life.</p>
              <NavLink to={"/details/"}>
                <button type="button" className="btn btn-outline-secondary">
                  View portfolio &nbsp;
                  <span className="shift">⟶</span> 
                </button>
              </NavLink>
            </div>
          </div>

          <div className="row">
            <div className="col-md-8 pb-4 imageHero1">
              <img src="/propertyImages/slider1.jpg" className="img w-100 mb-3 bg-body rounded" alt="propertyImage"/>
              <div className="row propertyInfo">
                <span className="col text-center">
                  <h6>BONE HOUSE</h6>
                  <p>2014</p>
                </span>
                <span className="col text-start">
                  <h6>LAMA GROUP, ON</h6>
                  <p>Architect: <span>BONE Structure</span></p>
                </span>
              </div>
            </div>
            <div className="col-md-4 align-self-center align-items-center content1">
              <h3 className="pb-2">5 BHK Flat</h3>
              <p>We also build using traditional construction methods of wood frame houses, affording freedom of design and creativity and yielding unique and beautiful results. Our hands-on approach will bring your dream to life.</p>
              <NavLink to={"/details/"}>
                <button type="button" className="btn btn-outline-secondary">
                  View portfolio &nbsp;
                  <span className="shift">⟶</span> 
                </button>
              </NavLink>
            </div>
          </div>

          <div className="row">
            <div className="col-md-8 pb-4 imageHero">
              <img src="/propertyImages/slider1.jpg" className="img w-100 mb-3 bg-body rounded" alt="propertyImage"/>
              <div className="row propertyInfo">
                <span className="col text-center">
                  <h6>BONE HOUSE</h6>
                  <p>2014</p>
                </span>
                <span className="col text-start">
                  <h6>LAMA GROUP, ON</h6>
                  <p>Architect: <span>BONE Structure</span></p>
                </span>
              </div>
            </div>
            <div className="col-md-4 align-self-center align-items-center content">
              <h3 className="pb-2">5 BHK Flat</h3>
              <p>We also build using traditional construction methods of wood frame houses, affording freedom of design and creativity and yielding unique and beautiful results. Our hands-on approach will bring your dream to life.</p>
              <NavLink to={"/details/"}>
                <button type="button" className="btn btn-outline-secondary">
                  View portfolio &nbsp;
                  <span className="shift">⟶</span> 
                </button>
              </NavLink>
            </div>
          </div>
      </section>
      {/* financial alliance */}
      {/* <Finance></Finance> */}
    </>
  );
}
