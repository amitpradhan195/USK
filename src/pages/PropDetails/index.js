import React, { useEffect } from "react";
import "../../css/style.css";
import slider2 from "../../assets/s2.jpg";
import slider3 from "../../assets/s3.jpg";
import slider4 from "../../assets/s4.jpg";
import slider5 from "../../assets/s5.jpg";
import { IconContext } from "react-icons";
import { MdLocationOn } from "react-icons/md";
import { FaPhoneAlt, FaBed, FaBath, FaCar, FaWifi, FaLightbulb, FaParking } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { GiKnifeFork } from "react-icons/gi";
import { ImDroplet } from "react-icons/im";
import { RiBikeFill } from "react-icons/ri";
import mapimage from "../../assets/office.PNG";
import ReactPlayer from "react-player";

export default function Details(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const pID = props.match.params.id;
  console.log(pID);
  return (
    <IconContext.Provider value={{ color: "#707070", size: "25px" }}>
      <>
        <section className="details-banner">
          <div className="container col-10 text-light">
            {/* <h2 className="text-center heading-text">Property Details</h2> */}
          </div>
        </section>
        {/* slider */}
        <section className="container col-10">
          <section className="d-flex align-items-center details-container mt-5 mb-5">
            <div className="container-fluid">
              <div className="row">
                <div className="main">
                  <div className="order-1 order-lg-1 track">
                    <ul>
                      <li id="slide1">
                        <img src={slider3} alt="slider_image" />
                      </li>
                      <li id="slide2">
                        <img src={slider2} alt="slider_image" />
                      </li>
                      <li id="slide3">
                        <img src={slider3} alt="slider_image" />
                      </li>
                      <li id="slide4">
                        <img src={slider4} alt="slider_image" />
                      </li>
                      <li id="slide5">
                        <img src={slider5} alt="slider_image" />
                      </li>
                      <li id="slide6">
                        <img src={slider4} alt="slider_image" />
                      </li>
                    </ul>
                  </div>
                  <div className="order-2 order-lg-2 slides">
                    <a href="#slide1">
                      <img src={slider3} alt="slider_image" />
                    </a>
                    <a href="#slide2">
                      <img src={slider2} alt="slider_image" />
                    </a>
                    <a href="#slide3">
                      <img src={slider3} alt="slider_image" />
                    </a>
                    <a href="#slide4">
                      <img src={slider4} alt="slider_image" />
                    </a>
                    <a href="#slide5">
                      <img src={slider5} alt="slider_image" />
                    </a>
                    <a href="#slide6">
                      <img src={slider4} alt="slider_image" />
                    </a>
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
                  <h2 className="text-uppercase">{pID.prop}</h2>
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
          <section className="propertyInformation pb-2">
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
          {/* reactplayer  */}
          <section className="propertyVideo pb-5">
            <ReactPlayer
              width="auto"
              controls
              url="https://www.youtube.com/watch?v=M5hQ5KOOOoc"
            />
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
