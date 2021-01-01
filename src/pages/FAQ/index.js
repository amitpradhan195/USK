import React from "react";
import "../../css/style.css";
import FaqCard from "../../components/FAQCard";
import FaqData from "../../data/Faqdata";

export default function index() {
  return (
    <>
      <div>
        <section className="details-banner">
          <div className="container col-10 text-light"></div>
        </section>
        <section className="container-fluid section-faq">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row gy-5">
                <div className="accordion">
                  {FaqData.map((value, indno) => {
                    return (
                      <FaqCard
                        key={indno}
                        question={value.questions}
                        ans={value.ans}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
