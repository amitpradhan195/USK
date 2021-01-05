import React, { useEffect } from "react";
// import about_us from "../../assets/img-2.png";
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
      <div class="about-section">
        {/* <img src={about_us}></img> */}
        <div class="inner-container">
          <h1>About Us</h1>
          <p class="about-text">
            USK.com is a Rental and Real Estate Solution Provider. USK.com is a
            web portal designed to reshape the conventional pattern of rental
            and real estate solution for building, flat, room, space, apartment,
            and land all around Nepal. This portal allows people to search and
            book properties from available property list via online presence.
          </p>
        </div>
      </div>
    </div>
  );
}