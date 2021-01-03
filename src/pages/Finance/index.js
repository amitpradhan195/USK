import React, { useEffect } from "react";
import FinanceSlider from "../../components/FinanceSlider";
import Finance from "../../components/Finance";

export default function FinanceAlliance() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
