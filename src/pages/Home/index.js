import React, { useEffect, useState } from "react";
import LightSpeed from "react-reveal/LightSpeed";
import Fade from "react-reveal/Fade";
import slider1 from "../../assets/slider1.jpg";
import "./index.css";

export default function Home() {
  const [isHide, setisHide] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setisHide(false);
  //   }, 5000);
  // }, []);

  return (
    <>
      {/* {isHide && (
        <h1 className="text-primary text-center">
          <LightSpeed left><Fade>hello</Fade></LightSpeed>
        </h1>
      )} */}

      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src={slider1} alt="First slide" />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="https://i.postimg.cc/SQXZtrTZ/2.jpg"
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="https://i.postimg.cc/Jh4x3cH5/3.jpg"
              alt="Third slide"
            />
          </div>
        </div>
        <div className="carousel-item">
          <img src="..." alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>...</h5>
            <p>...</p>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
        </a>
      </div>
    </>
  );
}
