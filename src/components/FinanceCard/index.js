import React from "react";
import "../../css/style.css";


export default function FinanceCard(props){
  return (
      <div className="card">
        <img src={props.imgsrc} alt={props.imgsrc}></img>
        <div className="content">
          <div className="contentBx">
            <h3>{props.loan}Home Loan</h3>
          </div>
        </div>
      </div>
  );
};
