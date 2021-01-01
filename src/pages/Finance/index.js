import React from "react";
import FinanceSlider from "../../components/FinanceSlider";
import Finance from "../../components/Finance";

export default function FinanceAlliance() {
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
