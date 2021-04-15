import React, { useEffect } from "react";
import "../../css/style.css";
import Card from "../../components/Card";
import CData from "../../data/Carddata";
import Finance from "../../components/Finance";
import HomeSlider from "../../components/HomeSlider";
import DreamModal from "../../components/DreamHouse";
import home1 from "../../assets/home1.png";
import home2 from "../../assets/home2.png";
import {BiCheckCircle, BiChevronRight} from 'react-icons/bi';
import {GoLocation} from 'react-icons/go';
import { NavLink } from "react-router-dom";
import AOS from "aos";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({
      duration: 1000,
      anchorPlacement: "top-bottom",
    });
  }, []);
  window.addEventListener('load', AOS.refresh);
  return (
    <>
      <HomeSlider></HomeSlider>
      {/* featured */}
      {/* <section className="featured-container pt-3 mb-5">
        <h4 className="text-center heading-text">
          Latest Properties
        </h4>
        <div className="featured-title"></div>
      </section> */}

      <section className="heroCard">
          <div className="row">
            <div className="col-md-8 pb-4 imageHero">
              <img src="/propertyImages/slider1.jpg" className="img w-100 mb-3 bg-body rounded" alt="propertyImage"/>
              <div className="row propertyInfo">
                <span className="col text-center">
                  <h6>BONE HOUSE</h6>
                  <p>2014</p>
                </span>
                <span className="col text-start">
                  <h6>LAMA GROUP, ON</h6>
                  <p>Architect: <span>BONE Structure</span></p>
                </span>
              </div>
            </div>
            <div className="col-md-4 align-self-center align-items-center content">
              <h3 className="pb-2">5 BHK Flat</h3>
              <p>We also build using traditional construction methods of wood frame houses, affording freedom of design and creativity and yielding unique and beautiful results. Our hands-on approach will bring your dream to life.</p>
              <NavLink to={"/details/"}>
                <button type="button" className="btn btn-outline-secondary">
                  View portfolio &nbsp;
                  <span className="shift">⟶</span> 
                </button>
              </NavLink>
            </div>
          </div>

          <div className="row">
            <div className="col-md-8 pb-4 imageHero1">
              <img src="/propertyImages/slider1.jpg" className="img w-100 mb-3 bg-body rounded" alt="propertyImage"/>
              <div className="row propertyInfo">
                <span className="col text-center">
                  <h6>BONE HOUSE</h6>
                  <p>2014</p>
                </span>
                <span className="col text-start">
                  <h6>LAMA GROUP, ON</h6>
                  <p>Architect: <span>BONE Structure</span></p>
                </span>
              </div>
            </div>
            <div className="col-md-4 align-self-center align-items-center content1">
              <h3 className="pb-2">5 BHK Flat</h3>
              <p>We also build using traditional construction methods of wood frame houses, affording freedom of design and creativity and yielding unique and beautiful results. Our hands-on approach will bring your dream to life.</p>
              <NavLink to={"/details/"}>
                <button type="button" className="btn btn-outline-secondary">
                  View portfolio &nbsp;
                  <span className="shift">⟶</span> 
                </button>
              </NavLink>
            </div>
          </div>

          <div className="row">
            <div className="col-md-8 pb-4 imageHero">
              <img src="/propertyImages/slider1.jpg" className="img w-100 mb-3 bg-body rounded" alt="propertyImage"/>
              <div className="row propertyInfo">
                <span className="col text-center">
                  <h6>BONE HOUSE</h6>
                  <p>2014</p>
                </span>
                <span className="col text-start">
                  <h6>LAMA GROUP, ON</h6>
                  <p>Architect: <span>BONE Structure</span></p>
                </span>
              </div>
            </div>
            <div className="col-md-4 align-self-center align-items-center content">
              <h3 className="pb-2">5 BHK Flat</h3>
              <p>We also build using traditional construction methods of wood frame houses, affording freedom of design and creativity and yielding unique and beautiful results. Our hands-on approach will bring your dream to life.</p>
              <NavLink to={"/details/"}>
                <button type="button" className="btn btn-outline-secondary">
                  View portfolio &nbsp;
                  <span className="shift">⟶</span> 
                </button>
              </NavLink>
            </div>
          </div>

          {/* <div className="row">
            <div className="col-lg-6 imageHero1">
              <img src="/propertyImages/slider1.jpg" className="img-fluid shadow-lg mb-3 bg-body rounded" alt=""/>
            </div>
            <div className="offset-md-2 col-lg-4 content1">
              <h1>6 BHK Flat</h1>
              <p className="heroLocation"><GoLocation/> Kirtpur, Kathmandu</p>
              <div>
                <ul className="float-start">
                  <li><span><BiCheckCircle/></span>Bedroom</li>
                  <li><span><BiCheckCircle/></span>Bathroom</li>
                </ul>
                <ul>
                  <li><span><BiCheckCircle/></span>Kitchen</li>
                  <li><span><BiCheckCircle/></span>Parking</li>
                </ul>
                <NavLink to={"/details/"} className="navLink">Click here to view
                  <BiChevronRight size="1.5em"/>
                </NavLink>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6 imageHero">
              <img src="/propertyImages/slider1.jpg" className="img-fluid shadow-lg mb-3 bg-body rounded" alt="featuredImage"/>
            </div>
            <div className="col-lg-4 offset-md-2 content">
              <h1>7 BHK Flat</h1>
              <p className="heroLocation"><GoLocation/> Kirtpur, Kathmandu</p>
              <div>
                <ul className="float-start">
                  <li><span><BiCheckCircle/></span>Bedroom</li>
                  <li><span><BiCheckCircle/></span>Bathroom</li>
                </ul>
                <ul>
                  <li><span><BiCheckCircle/></span>Kitchen</li>
                  <li><span><BiCheckCircle/></span>Parking</li>
                </ul>
                <NavLink to={"/details/"} className="navLink">Click here to view
                  <BiChevronRight size="1.5em"/>
                </NavLink>
              </div>
            </div>
          </div> */}
      </section>

      {/* featured card */}
      {/* <div className="container-fluid pb-5 about-myjob">
        <div className="row">
          <div className="col-12">
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
      </div> */}

      {/* build your home */}
      {/* <div className="d-flex justify-content-center flex-column align-items-center pb-5 pt-5 buildHouse">
        <h4 className="heading-text text-center" data-aos="fade-down">
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
        <p className="mt-2 availableNote">Opportunity avaliable for people outside nepal</p>

      </div> */}

      {/* financial alliance */}
      {/* <Finance></Finance> */}
    </>
  );
}
