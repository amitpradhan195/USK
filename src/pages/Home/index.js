import React, { useEffect } from "react";
import "../../css/style.css";
import Card from "../../components/Card";
import CData from "../../data/Carddata";
import Finance from "../../components/Finance";
import HomeSlider from "../../components/HomeSlider";
import DreamModal from "../../components/DreamHouse";
import home1 from "../../assets/home1.png";
import home2 from "../../assets/home2.png";
import AOS from "aos";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({
      duration: 1000,
      anchorPlacement: "top-bottom",
    });
  }, []);
  return (
    <>
      <HomeSlider></HomeSlider>

      {/* featured */}
      <section className="featured-container pt-3 mb-5">
        <h4 className="text-center heading-text" data-aos="fade-down">
          Featured Properties
        </h4>
        <div className="featured-title" data-aos="fade-right"></div>
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
                    id={value.id}
                    imgsrc={value.imgsrc}
                    tag={value.tag}
                    css={value.css}
                    prop={value.prop}
                    location={value.location}
                    bed={value.bed}
                    kitchen={value.kitchen}
                    bath={value.bath}
                    contact={value.contact}
                    parking={value.parking}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* build your home */}
      <div className="d-flex justify-content-center flex-column align-items-center pb-5 pt-5 buildHouse">
        <h4 className="heading-text" data-aos="fade-down">
          Do you want to built your home ?
        </h4>
        <img
          className="mt-2"
          src={home1}
          alt="home pic"
          data-aos="fade-down"
        />
        <img
          className="mb-2"
          src={home2}
          alt="home pic"
          data-aos="fade-up"
        />

        <DreamModal></DreamModal>
      </div>

      {/* financial alliance */}
      <Finance></Finance>
    </>
  );
}
