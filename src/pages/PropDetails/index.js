import React, { useEffect, useState, classList } from "react";
import "../../css/style.css";
import slider1 from "../../assets/slider1.jpg";
import slider2 from "../../assets/slider2.jpg";
import slider3 from "../../assets/slider3.jpg";
import slider4 from "../../assets/slider4.jpg";
import slider5 from "../../assets/slider5.jfif";
import { IconContext } from "react-icons";
import { MdLocationOn } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaBed } from "react-icons/fa";
import { GiKnifeFork } from "react-icons/gi";
import { FaBath } from "react-icons/fa";
import { ImDroplet } from "react-icons/im";
import { FaCar } from "react-icons/fa";
import { RiBikeFill, RiMotorbikeFill } from "react-icons/ri";
import { FaWifi } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa";
import { FaParking } from "react-icons/fa";
import mapimage from "../../assets/office.PNG";

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
    <IconContext.Provider value={{ color: "#28c092", size: "25px" }}>
      <>
        <section className="details-banner">
          <div className="container col-10 text-light">
            <h2 className="text-center">Property Details</h2>
          </div>
        </section>
        {/* slider */}
        <section className="container col-10">
          <section className="d-flex align-items-center details-container mb-3">
            <div className="container-fluid">
              <div className="row">
                <div>
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
                        <li class="body-list-item1">
                          <img
                            className="thumbnail mt-4 activepic"
                            src={slider1}
                            alt="main-image"
                          />
                        </li>
                        <li class="body-list-item1">
                          <img
                            className="thumbnail mt-4"
                            src={slider2}
                            alt="main-image"
                          />
                        </li>
                        <li class="body-list-item1">
                          <img
                            className="thumbnail mt-4"
                            src={slider3}
                            alt="main-image"
                          />
                        </li>
                        <li class="body-list-item1">
                          <img
                            className="thumbnail mt-4"
                            src={slider4}
                            alt="main-image"
                          />
                        </li>
                        <li class="body-list-item1">
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
          {/* prop contact part */}
          <section className="contact-info pb-4">
            <div className="contact-info-container pb-3">
              <div className="row">
                <div className="col-md-7 order-1 order-lg-1">
                  <h2 className="text-uppercase">4-Bhk House</h2>
                  <p>
                    <span className="icon pr-1">
                      <MdLocationOn />
                    </span>
                    <small>Dillibazar, kathmandu</small>
                  </p>
                </div>
                <div className="col-md-5 order-2 order-lg-2">
                  <div className="float-lg-right float-sm-left float-md-left">
                    <p>
                      <span className="icon pr-1">
                        <FaPhoneAlt />
                      </span>
                      <small>9869032514</small>
                    </p>
                    <p>
                      <span className="icon pr-1">
                        <IoMail />
                      </span>
                      <small>abc123@gmail.com</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* features */}
          <section className="features mb-4">
            <div className="feature-container">
              <ul className="list-unstyled features-list">
                <li className="pr-5">
                  <p className="text-center">
                    <FaBed />
                  </p>
                  <p className="text-center">2 Bedrooms</p>
                </li>
                <li className="pr-5">
                  <p className="text-center">
                    <GiKnifeFork />
                  </p>
                  <p className="text-center">1 Kitchen</p>
                </li>
                <li className="pr-5">
                  <p className="text-center">
                    <FaBath />
                  </p>
                  <p className="text-center">1 Bathroom</p>
                </li>
                <li className="pr-5">
                  <p className="text-center">
                    <ImDroplet />
                  </p>
                  <p className="text-center">Water Supply</p>
                </li>
                <li className="pr-5">
                  <p className="text-center">
                    <FaLightbulb />
                  </p>
                  <p className="text-center">Electricity</p>
                </li>
                <li className="pr-5">
                  <p className="text-center">
                    <FaParking />
                  </p>
                  <p className="text-center">4 Parking</p>
                </li>
                <li className="pr-5">
                  <p className="text-center">
                    <FaCar />
                  </p>
                  <p className="text-center">2 Car Parking</p>
                </li>
                <li className="pr-5">
                  <p className="text-center">
                    <RiBikeFill />
                  </p>
                  <p className="text-center">2 Bike parking</p>
                </li>
                <li className="pr-5">
                  <p className="text-center">
                    <FaWifi />
                  </p>
                  <p className="text-center">Internet</p>
                </li>
              </ul>
            </div>
          </section>
          {/* property information */}
          <section className="propertyInformation pb-4">
            <div className="propertyInformation-container">
              <h4>More Information</h4>
              <p className="text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                faucibus ac mauris eu imperdiet. Aenean tincidunt tellus quis
                ipsum porttitor molestie. Proin mattis lacinia neque eu
                faucibus. Vestibulum sed magna ut lacus pulvinar varius ac sit
                amet ipsum. Aliquam erat volutpat. Vivamus rhoncus ligula at
                tempus rhoncus. Nunc sodales sodales enim varius gravida. Mauris
                nibh tortor, placerat sed lorem id, gravida ultricies lectus.
                Pellentesque dui dui, auctor ut diam at, egestas vehicula metus.
              </p>
            </div>
          </section>
          {/* map information */}
          <section className="mapInformation pb-5">
            <div className="mapInformation-container">
              <h4>Map View</h4>
              <img src={mapimage} alt="place" />
            </div>
          </section>
        </section>
      </>
    </IconContext.Provider>
  );
}
