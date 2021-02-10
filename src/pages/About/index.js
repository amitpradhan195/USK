import React, { useEffect } from "react";
import "../../css/style.css";

export default function Index() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <section className="details-banner">
        <div className="container col-10 text-light"></div>
      </section>
      <div className="about-section">
        <div className="inner-container">
          <h1>About Us</h1>
          <p className="about-text">
            The US Group is a Rental and Real Estate solution provider company based in Kathmandu, jointly owned by the founders; Ujjawal Bikram Chaudhary and Somjil Lama. We reshape the conventional pattern of rental and real estate solution for building, flat, room, space, apartment and land all around Nepal along with direct consultation to buy and sell the properties.  This portal allows people to search and book properties from available property list via online presence. 
            We are associated with more than 15 different banks of Nepal, providing Home Loan services and related consultation according to your need. We focus on delivering the best suitable property to people in and outside Nepal, dealing with all the processes and procedures ourselves, for your convenience.
            Thank you for trusting us and we always make sure to give best services as possible.
          </p>
        </div>
      </div>
    </div>
  );
}
