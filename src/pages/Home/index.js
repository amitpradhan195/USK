import React, { useEffect, useState } from "react";
import LightSpeed from "react-reveal/LightSpeed";
import Fade from "react-reveal/Fade";
import slider1 from "../../assets/slider1.jpg";
import slider2 from "../../assets/slider2.jpg";
import slider3 from "../../assets/slider3.jpg";

import "./home.css";
import Card from "../../components/Card";
import CData from "../../Data/Carddata";
import { NavLink } from "react-router-dom";

export default function Home() {
  const [isHide, setisHide] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setisHide(false);
    }, 5000);
  }, []);

  return (
    <>
      <div
        className="carousel slide"
        data-ride="carousel"
        id="carouselExampleIndicators"
      >
        <ol className="carousel-indicators">
          <li
            className="active"
            data-slide-to="0"
            data-target="#carouselExampleIndicators"
          ></li>
          <li data-slide-to="1" data-target="#carouselExampleIndicators"></li>
          <li data-slide-to="2" data-target="#carouselExampleIndicators"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img alt="First slide" className="d-block w-100" src={slider1} />
            <div className="carousel-caption d-none d-md-block">
              {/* {isHide && (
                <LightSpeed left>
                  <Fade> */}
              <h1>LET'S FIND YOUR PROPERTY...</h1>
              {/* </Fade>
                </LightSpeed>
              )} */}
            </div>
          </div>
          <div className="carousel-item">
            <img alt="Second slide" className="d-block w-100" src={slider2} />
          </div>
          <div className="carousel-item">
            <img alt="Third slide" className="d-block w-100" src={slider3} />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          data-slide="prev"
          href="#carouselExampleIndicators"
          role="button"
        >
          <span
            aria-hidden="true"
            className="carousel-control-prev-icon"
          ></span>
        </a>
        <a
          className="carousel-control-next"
          data-slide="next"
          href="#carouselExampleIndicators"
          role="button"
        >
          <span
            aria-hidden="true"
            className="carousel-control-next-icon"
          ></span>
        </a>
      </div>

      {/* home navigation section */}
      <section className="nav-container">
        <div className="col-12 mx-auto">
          <ul className="nav nav-pills nav-fill ">
            <li className="nav-item active-link ">
              <a className="nav-link p-3" href="">
                FOR SELL
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link p-3" href="/">
                FOR RENT
              </a>
            </li>
          </ul>
        </div>
      </section>
      {/* featured */}
      <section className="featured-container pt-5 mb-5">
        <h4 className="text-center">Featured Properties</h4>
        <div className="featured-title"></div>
      </section>
      {/* featured card */}
      <div className="container-fluid pb-5 about-myjob">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-5">
              {CData.map((value, indno) => {
                return (
                  <Card
                    key={indno}
                    imgsrc={value.imgsrc}
                    tag={value.tag}
                    css={value.css}
                    prop={value.prop}
                    location={value.location}
                    bed={value.bed}
                    kitchen={value.kitchen}
                    bath={value.bath}
                    contact={value.contact}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {/* build your home */}
      <div class="d-flex justify-content-center flex-column align-items-center pb-5">
        <h3>Do you want to built your home ?</h3>
        <NavLink
          type="button"
          className="btn btn-lg btn-primary mt-3 btnbuilt shadow"
          to="#"
        >
          Chick Here
        </NavLink>
      </div>
    </>
  );
}
