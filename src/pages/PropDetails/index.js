import React, { useEffect, useState } from "react";
import "../../css/style.css";
import { IconContext } from "react-icons";
import { MdLocationOn } from "react-icons/md";
import { FaPhoneAlt, FaBed, FaBath, FaCar, FaWifi, FaLightbulb } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { GiKnifeFork } from "react-icons/gi";
import { ImDroplet } from "react-icons/im";
import { RiBikeFill } from "react-icons/ri";
import ReactPlayer from "react-player";
import cardData from "../../data/Listings";

export default function Details(props) {
  const pID = props.match.params.id;
  const [details, setDetails] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
    cardData.filter(details=>details.id==pID)
      .map((filteredDetails)=>{
        setDetails(filteredDetails);
        return filteredDetails
      })  
  }, [pID]);
  // console.log(pID);
  console.log(details);

  return (
    <IconContext.Provider value={{ color: "#707070", size: "25px" }}>
        <section className="details-banner">
          
        </section>
        {/* slider */}
        <section className="container">
          <section className="d-flex align-items-center details-container mt-5 mb-5">
            <div className="container-fluid">
              <div className="row">
                  <div className="order-1 order-lg-1 track">
                    <ul>
                      <li id="slide1">
                        <img src="/propertyImages/slider1.jpg" className="img-thumbnail"  alt="slider_image" />
                      </li>
                      <li id="slide2">
                        <img src="/propertyImages/s3.jpg" className="img-thumbnail" alt="slider_image" />
                      </li>
                      <li id="slide3">
                        <img src="/propertyImages/s4.jpg" className="img-thumbnail" alt="slider_image" />
                      </li>
                      <li id="slide4">
                        <img src="/propertyImages/s5.jpg" className="img-thumbnail" alt="slider_image" />
                      </li>
                      <li id="slide5">
                        <img src="/propertyImages/slider1.jpg" className="img-thumbnail" alt="slider_image" />
                      </li>
                      <li id="slide6">
                        <img src="/propertyImages/s3.jpg" className="img-thumbnail" alt="slider_image" />
                      </li>
                    </ul>
                  </div>
                  <div className="order-2 order-lg-2 slides">
                    <a href="#slide1">
                      <img src="/propertyImages/slider1.jpg" className="img-thumbnail" alt="slider_image" />
                    </a>
                    <a href="#slide2">
                      <img src="/propertyImages/s3.jpg" className="img-thumbnail" alt="slider_image" />
                    </a>
                    <a href="#slide3">
                      <img src="/propertyImages/s4.jpg" className="img-thumbnail" alt="slider_image" />
                    </a>
                    <a href="#slide4">
                      <img src="/propertyImages/s5.jpg" className="img-thumbnail" alt="slider_image" />
                    </a>
                    <a href="#slide5">
                      <img src="/propertyImages/slider1.jpg" className="img-thumbnail" alt="slider_image" />
                    </a>
                    <a href="#slide6">
                      <img src="/propertyImages/s3.jpg" className="img-thumbnail" alt="slider_image" />
                    </a>
                  </div>
              </div>
            </div>
          </section>
          {/* prop contact part */}
          <section className="contact-info pb-4">
            <div className="contact-info-container pb-3">
              <div className="row">
                <div className="col-md-9">
                  <h2 className="text-uppercase">{details.prop}</h2>
                  <p>
                    <span className="icon pe-1">
                      <MdLocationOn />
                    </span>
                    <small>Dillibazar, kathmandu</small>
                  </p>
                </div>
                <div className="col-md-3 text-right">
                    <p>
                      <span className="icon pe-1">
                        <FaPhoneAlt />
                      </span>
                      <small>{details.contact}</small>
                    </p>
                    <p>
                      <span className="icon pe-1">
                        <IoMail />
                      </span>
                      <small>theusgroup@gmail.com</small>
                    </p>
                </div>
              </div>
            </div>
          </section>
          {/* features */}
          <section className="features mb-4">
            <div className="feature-container">
              <ul className="list-unstyled features-list row">
                <li className="col-md-2">
                  <p className="text-center">
                    <FaBed />
                  </p>
                  <p className="text-center"><span className="facility">{details.bed}</span> Bedrooms</p>
                </li>
                <li className="col-md-2">
                  <p className="text-center">
                    <GiKnifeFork />
                  </p>
                  <p className="text-center"><span className="facility">{details.kitchen}</span> Kitchen</p>
                </li>
                <li className="col-md-2">
                  <p className="text-center">
                    <FaBath />
                  </p>
                  <p className="text-center"><span className="facility">{details.bath}</span> Bathroom</p>
                </li>
                <li className="col-md-2">
                  <p className="text-center">
                    <FaCar />
                  </p>
                  <p className="text-center">Car Parking: <span className="facility">{details.carParking}</span></p>
                </li>
                <li className="col-md-2">
                  <p className="text-center">
                    <RiBikeFill />
                  </p>
                  <p className="text-center">Bike parking: <span className="facility">{details.bikeParking}</span></p>
                </li>
                <li className="col-md-2">
                  <p className="text-center">
                    <ImDroplet />
                  </p>
                  <p className="text-center">Water Supply: <span className="facility">{details.waterSupply}</span></p>
                </li>
                <li className="col-md-2">
                  <p className="text-center">
                    <FaLightbulb />
                  </p>
                  <p className="text-center">Electricity: <span className="facility">{details.electricity}</span></p>
                </li>
                <li className="col-md-2">
                  <p className="text-center">
                    <FaWifi />
                  </p>
                  <p className="text-center">Internet: <span className="facility">{details.internet}</span></p>
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
              url={details.url}
            />
          </section>
          {/* map information */}
          <section className="mapInformation pb-5">
            <div className="mapInformation-container">
              <h4>Map View</h4>
              <img src="/propertyImages/office.png" alt="place" />
            </div>
          </section>
        </section>
    </IconContext.Provider>
  );
}
