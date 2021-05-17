import React, { useEffect, useState } from "react";
import "../../css/style.css";
import { IconContext } from "react-icons";
import { MdLocationOn } from "react-icons/md";
import { FaPhoneAlt, FaBed, FaBath, FaCar } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { GiKnifeFork } from "react-icons/gi";
import {BiCheckCircle, BiArea, BiBuilding} from "react-icons/bi";
import clip from '../../assets/videos/clip.mp4';
import {Player,ControlBar,BigPlayButton} from 'video-react';
import "video-react/dist/video-react.css";
import cardData from "../../data/Listings";


import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Zoom, EffectFade, Navigation, Thumbs } from 'swiper/core';
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/zoom/zoom.min.css"
import "swiper/components/effect-fade/effect-fade.min.css"
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/thumbs/thumbs.min.css"

// install Swiper modules
SwiperCore.use([Zoom,EffectFade,Navigation,Thumbs]);

export default function Details(props) {
  const pID = props.match.params.id;
  const [details, setDetails] = useState({});
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    cardData.filter(details=>details.id+''===pID)
      .map((filteredDetails)=>{
        setDetails(filteredDetails);
        return filteredDetails
      })  
  }, [pID]);
  // console.log(pID);
  console.log(details);

  return (
    <IconContext.Provider value={{ color: "#707070", size: "25px" }}>
        <section className="details-banner"></section>

        {/* slider */}
        <section className="container">
            <Swiper effect={'fade'} style={{'--swiper-navigation-color': '#fff','--swiper-pagination-color': '#fff'}} spaceBetween={10} zoom={true} navigation={true} thumbs={{ swiper: thumbsSwiper }} className="mySwiper2 mb-1">
              <SwiperSlide><div className="swiper-zoom-container"><img src="/propertyImages/slider1.jpg" /></div></SwiperSlide>
              <SwiperSlide><div className="swiper-zoom-container"><img src="/propertyImages/s4.jpg" /></div></SwiperSlide>
              <SwiperSlide><div className="swiper-zoom-container"><img src="/propertyImages/slider2.jpg" /></div></SwiperSlide>
              <SwiperSlide><div className="swiper-zoom-container"><img src="/propertyImages/slider3.jpg" /></div></SwiperSlide>
              <SwiperSlide><div className="swiper-zoom-container"><img src="/propertyImages/s5.jpg" /></div></SwiperSlide>
              <SwiperSlide><div className="swiper-zoom-container"><img src="/propertyImages/s3.jpg" /></div></SwiperSlide>
            </Swiper>
            <Swiper onSwiper={setThumbsSwiper} spaceBetween={5} slidesPerView={6} freeMode={true} watchSlidesVisibility={true} watchSlidesProgress={true} className="mySwiper mb-3">
              <SwiperSlide><img src="/propertyImages/slider1.jpg" /></SwiperSlide>
              <SwiperSlide><img src="/propertyImages/s4.jpg" /></SwiperSlide>
              <SwiperSlide><img src="/propertyImages/slider2.jpg" /></SwiperSlide>
              <SwiperSlide><img src="/propertyImages/slider3.jpg" /></SwiperSlide>
              <SwiperSlide><img src="/propertyImages/s5.jpg" /></SwiperSlide>
              <SwiperSlide><img src="/propertyImages/s3.jpg" /></SwiperSlide>
            </Swiper>
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
                  <p className="text-center">Parking: <span className="facility">{details.parking}</span></p>
                </li>
                <li className="col-md-2">
                  <p className="text-center">
                    <BiArea />
                  </p>
                  <p className="text-center">Area: <span className="facility">340m<sup>2</sup></span></p>
                </li>
                <li className="col-md-2">
                  <p className="text-center">
                    <BiBuilding />
                  </p>
                  <p className="text-center">No. of Story: <span className="facility">4</span></p>
                </li>
              </ul>
            </div>
          </section>

          {/* reactplayer  */}
          <section className="propertyVideo pb-5">
            <Player
              src={clip}
            >
              <ControlBar autoHide={false}/>
              <BigPlayButton position="center" />
            </Player>
          </section>

          {/* property information */}
          <section className="propertyInformation pb-2">
            <div className="propertyInformation-container">
              <h4>More Information</h4>
              <ul className="list-group mb-2">
                <li className="list-group-item"><BiCheckCircle color="green" className="me-2"/>An item</li>
                <li className="list-group-item"><BiCheckCircle color="green" className="me-2"/>A second item</li>
                <li className="list-group-item"><BiCheckCircle color="green" className="me-2"/>A third item</li>
                <li className="list-group-item"><BiCheckCircle color="green" className="me-2"/>A fourth item</li>
                <li className="list-group-item"><BiCheckCircle color="green" className="me-2"/>And a fifth one</li>
              </ul>
            </div>
          </section>

          {/* map information */}
          <section className="mapInformation pb-5">
              <h4>Map View</h4>
            <div className="mapInformation-container row p-2">
                <iframe className="col-md-12" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1765.9289955934978!2d85.36202048236176!3d27.721670556234532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1619110445708!5m2!1sen!2snp" allowfullscreen="true" loading="lazy"></iframe>
            </div>
          </section>
        </section>
    </IconContext.Provider>
  );
}
