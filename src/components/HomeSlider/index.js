import React, { useEffect } from "react";
import slider1 from "../../assets/slider3.jpg";
import slider2 from "../../assets/slider2.jpg";
import slider3 from "../../assets/slider4.jpeg";
import "../../css/style.css";

export default function HomeSlider() {

  useEffect(() => {
    setTimeout(() => {
    }, 2000);
  }, []);
  
  return (
    <>
      <div
        className="carousel slide"
        data-bs-ride="carousel"
        id="carouselExampleIndicators"
        data-bs-interval="3000"
      >
        <ol className="carousel-indicators">
          <li
            className="active"
            data-bs-slide-to="0"
            data-bs-target="#carouselExampleIndicators"
          ></li>
          <li data-bs-slide-to="1" data-bs-target="#carouselExampleIndicators"></li>
          <li data-bs-slide-to="2" data-bs-target="#carouselExampleIndicators"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img alt="First slide" className="d-block w-100" src={slider1} style={{backgroundColor:'black'}} />
            <div className="carousel-caption sliderContent">
              <h1>LET'S FIND YOU A PROPERTY...</h1>
            </div>
          </div>
          <div className="carousel-item">
            <img alt="Second slide" className="d-block w-100" src={slider2} />
          </div>
          <div className="carousel-item">
            <img alt="Third slide" className="d-block w-100" src={slider3} />
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
            <span className="carousel-control-prev-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
            <span className="carousel-control-next-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </a>
        </div>
      </div>
    </>
  );
}
