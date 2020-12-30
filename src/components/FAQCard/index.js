import React from "react";
import "../../css/style.css";

export default function Faq(props) {
  return (
    <>
      <div className="accordion-item mt-3" id="question1">
        <a className="accordion-link" herf="#question1">
          <h5>{props.question}</h5>
        </a>
        <div className="answer">
          <p>{props.ans}</p>
        </div>
      </div>
    </>
  );
}
