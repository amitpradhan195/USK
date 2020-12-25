import React from "react";
import "../../css/style.css";
import slider1 from "../../assets/slider1.jpg";
import slider2 from "../../assets/slider2.jpg";
import slider3 from "../../assets/slider3.jpg";

export default function index() {
  return (
    <>
      <div className="details-banner">
        <div className="container col-10 text-light">
          <h2 className="text-center">Property Details</h2>
        </div>
      </div>
      <section className="d-flex align-items-center details-container mb-4">
        <div className="container-fluid body-container">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-10 order-1 order-lg-1 d-flex justify-content-center flex-column main-image bg-info">
                  <img
                    className="featured p-4"
                    src={slider1}
                    alt="main-image"
                  />
                </div>

                <div className="col-lg-2 order-2 order-lg-2 d-flex justify-content-center bg-primary image-list">
                  <img className="thumbnail" src="" alt="main-image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
