import React from "react";
import "../../css/style.css";
import FinanceCard from "../FinanceCard";
import FinanceData from "../../data/finance";

export default function Finance() {
  return (
    <>
      <section className="featured-container pt-5 mb-5">
        <h4 className="text-center heading-text">Finance Alliances</h4>
        <div className="featured-title"></div>
      </section>
      <div className="container-finance mb-5 mt-5">
        {FinanceData.map((value, indno) => {
          return (
            <FinanceCard
              key={indno}
              imgsrc={value.imgsrc}
              loan={value.loan}
              contact={value.contact}
            />
          );
        })}
      </div>
    </>
  );
}