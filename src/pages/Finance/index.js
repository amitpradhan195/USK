import React, { useEffect } from "react";
import FinanceSlider from "../../components/FinanceSlider";
import Finance from "../../components/Finance";
import AOS from "aos";

export default function FinanceAlliance() {
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
      <section className="details-banner">
        <div className="container col-10 text-light"></div>
      </section>
      <FinanceSlider></FinanceSlider>
      <Finance></Finance>
    </>
  );
}
