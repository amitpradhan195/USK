import React, { useState, useEffect } from "react";
import "./index.css";
import Town from "../../assets/town.png";
import Commercial from "../../assets/commercial.png";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import AOS from "aos";

export default function FormHouseType({
  formData,
  setFormData,
  nextStep,
  prevStep,
}) {
  const [selected, setSelected] = useState(formData.houseType);

  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({
      duration: 1000,
      anchorPlacement: "top-bottom",
    });
    if (selected == "Town") {
      document.getElementById("townImg").style.filter = "invert(0.30)";
      document.getElementById("commercialImg").style.filter = "invert(0)";
    } else if (selected == "Commercial") {
      document.getElementById("commercialImg").style.filter = "invert(0.30)";
      document.getElementById("townImg").style.filter = "invert(0)";
    } else {
      document.getElementById("townImg").style.filter = "invert(0)";
      document.getElementById("commercialImg").style.filter = "invert(0)";
    }
  }, [selected]);

  const forwardStep = (e) => {
    e.preventDefault();
    if (formData.houseType == "") {
      alert(
        "Please select any one of the house type.\n   Click on the picture to select."
      );
    } else {
      nextStep();
    }
  };

  const selectHouseType = (hType) => (e) => {
    e.preventDefault();
    setFormData({ ...formData, ["houseType"]: hType });
    setSelected(hType);
  };
  console.log(
    "Initial form Data are :  " + formData.fullName,
    formData.phoneNumber,
    formData.email,
    formData.houseType
  );

  return (
    <div>
      <section className="details-banner"></section>

      <div
        className="container text-center formHouseType"
        data-aos="fade-left"
      >
        <h1>Select Your House Type</h1>
        <div className="row">
          <div className="col-md-6">
            <img
              alt="townImg"
              id="townImg"
              src={Town}
              onClick={selectHouseType("Town")}
            />
            <h3>TOWN HOUSE</h3>
          </div>
          <div className="col-md-6">
            <img
              alt="commercialImg"
              id="commercialImg"
              src={Commercial}
              onClick={selectHouseType("Commercial")}
            />
            <h3>COMMERCIAL</h3>
          </div>
        </div>
      </div>

      <div className="customFormPagination row mb-3">
        <ol className="progress-meter col-md-8">
          <li className="progress-point done">House Type</li>
          <li className="progress-point todo">Location | Area</li>
          <li className="progress-point todo">Details</li>
          <li className="progress-point todo">Budget</li>
        </ol>

        <div className="col-md-4 text-center">
          <button
            className="btn btn-outline-dark col-md-5"
            onClick={prevStep}
            data-bs-toggle="tooltip"
            data-bs-placement="left"
            title="Go to Previous Step"
          >
            <AiOutlineDoubleLeft size="2.5em" />
          </button>
          <button
            className="btn btn-outline-dark offset-md-1 col-md-5"
            onClick={forwardStep}
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            title="Go to Next Step"
          >
            <AiOutlineDoubleRight size="2.5em" />
          </button>
        </div>
      </div>
    </div>
  );
}
