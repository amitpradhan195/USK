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
        data-ride="carousel"
        id="carouselExampleIndicators"
        data-interval="3000"
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
            <img alt="First slide" className="carouselImg" src={slider1} style={{backgroundColor:'black'}} />
            <div className="carousel-caption sliderContent">
              <h1 style={{color:'#fffff'}}>LET'S FIND YOU A PROPERTY...</h1>
            </div>
          </div>
          <div className="carousel-item">
            <img alt="Second slide" className="d-block w-100" src={slider2} />
          </div>
          <div className="carousel-item">
            <img alt="Third slide" className="d-block w-100" src={slider3} />
          </div>
        </div>
      </div>
    </>
  );
}
