import React from "react";
import { NavLink } from "react-router-dom";
import "../../css/style.css";

export default function FinanceCard(props) {
  return (
    <>
      <div className="card">
        <NavLink to="/finance">
          <div className="imgBx">
            <img src={props.imgsrc} alt={props.imgsrc}></img>
          </div>
          <div className="content">
            <div className="contentBx">
              <h3>{props.loan}Home Loan</h3>
              <span>Contact: </span>
              <span>{props.contact}</span>
            </div>
          </div>
        </NavLink>
      </div>
    </>
  );
}
