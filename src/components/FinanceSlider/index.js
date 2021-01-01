import { Slider, Typography } from "@material-ui/core";
import { Button } from "bootstrap";
import React, { useState } from "react";
import "./index.css";
import "../../css/style.css";

export default function FinanceSlider() {
  const [Value, setValue] = useState(20);
  const [interestValue, setInterestValue] = useState(20);
  const [yearValue, setYearValue] = useState(20);

  const handleChange = (e, newVal) => {
    setValue(newVal);
  };

  const handleInterestChange = (e, newIntVal) => {
    setInterestValue(newIntVal);
  };

  const handleYearChange = (e, newYearVal) => {
    setYearValue(newYearVal);
  };
  return (
    <>
      <section className="slider-section mt-5">
        <div className="container-fluid">
          <div className="col-10 mx-auto">
            <div className="row">
              <div className="col-8">
                <section className="featured-container pt-5 mb-5">
                  <h4 className="heading-text">
                    Check interest & installment.
                  </h4>
                  <p>Find out how much would you need to pay monthly ?</p>
                </section>
                <div className="row ">
                  <div className="col-8">
                    <Slider
                      defaultValue={Value}
                      step={1}
                      aria-labelledby="discrete-slider"
                      valueLabelDisplay="auto"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-4">
                    <Typography id="amount" gutterBottom>
                      RS.{Value}
                      <span className="font-weight-bold"> (Loan Amount)</span>
                    </Typography>
                  </div>
                </div>
                {/* Interest rate */}
                <div className="row mt-3">
                  <div className="col-8">
                    <Slider
                      defaultValue={interestValue}
                      step={1}
                      aria-labelledby="discrete-slider"
                      valueLabelDisplay="auto"
                      onChange={handleInterestChange}
                    />
                  </div>
                  <div className="col-4">
                    <Typography id="amount" gutterBottom>
                      {interestValue} p.a.
                      <span className="font-weight-bold"> (Interest Rate)</span>
                    </Typography>
                  </div>
                </div>
                {/* loan term */}
                <div className="row mt-3">
                  <div className="col-8">
                    <Slider
                      defaultValue={yearValue}
                      step={1}
                      aria-labelledby="discrete-slider"
                      valueLabelDisplay="auto"
                      onChange={handleYearChange}
                    />
                  </div>
                  <div className="col-4">
                    <Typography id="amount" gutterBottom>
                      {yearValue} Years
                      <span className="font-weight-bold"> (Loan Term)</span>
                    </Typography>
                  </div>
                </div>
              </div>
              <div className="col-4 p-5">
                <p className="text-center">Monthly EMI</p>
                <h1 className="text-center text-danger">Rs. 29,629.66</h1>
                <p className="">
                  Principal
                  <span className="pl-2 text-danger">Rs. 30,00,000</span>
                </p>
                <p className="">
                  Interest Payable
                  <span className="pl-2 text-danger">Rs. 30,00,000</span>
                </p>
                <p className="">
                  Total Amount Payable
                  <span className="pl-2 text-danger">Rs. 30,00,000</span>
                </p>
                <button
                  type="button"
                  className="btn btn-lg btn-block shadow btnbuilt btn-primary"
                >
                  Apply For Loan
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
