import React from "react";
import "../../css/style.css";
import FinanceCard from "../FinanceCard";
import FinanceData from "../../data/finance";

export default function Finance() {
  return (
    <>
      <div className="container">
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
