import React, { useEffect, useState, classList } from "react";
import "../../css/style.css";
import slider1 from "../../assets/slider1.jpg";
import slider2 from "../../assets/slider2.jpg";
import slider3 from "../../assets/slider3.jpg";
import slider4 from "../../assets/slider4.jpg";
import slider5 from "../../assets/slider5.jfif";

export default function Details() {
  const [activeStatues, setActiveStatus] = useState(false);

  let thumbnails = document.getElementsByClassName("thumbnail");
  let activepic = document.getElementsByClassName("activepic");

  // const selectPic = () => {
  //   for (var i = 0; i < thumbnails.length; i++) {
  //     console.log(activepic);
  //     if (activepic.length > 0) {
  //       activepic[0].classList.remove("activepic");
  //     }

  //     this.classList.add("activepic");
  //     document.getElementsByClassName("featured").src = this.src;
  //   }
  // };

  // window.addEventListener("mouseover", selectPic);

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
                <div className="col-md-10 order-1 order-lg-1 d-flex justify-content-center flex-column main-image">
                  <img
                    className="featured mb-4 mt-4"
                    src={slider1}
                    alt="main-image"
                  />
                </div>

                <div className="col-lg-2 order-2 order-lg-2 image-thumbnails">
                  <ul class="list-unstyled image-list">
                    <li class="body-list-item1 mr-4">
                      <img
                        className="thumbnail mt-4 activepic"
                        src={slider1}
                        alt="main-image"
                      />
                    </li>
                    <li class="body-list-item1 mr-4">
                      <img
                        className="thumbnail mt-4"
                        src={slider2}
                        alt="main-image"
                      />
                    </li>
                    <li class="body-list-item1 mr-4">
                      <img
                        className="thumbnail mt-4"
                        src={slider3}
                        alt="main-image"
                      />
                    </li>
                    <li class="body-list-item1 mr-4">
                      <img
                        className="thumbnail mt-4"
                        src={slider4}
                        alt="main-image"
                      />
                    </li>
                    <li class="body-list-item1 mr-4">
                      <img
                        className="thumbnail mt-4"
                        src={slider5}
                        alt="main-image"
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
