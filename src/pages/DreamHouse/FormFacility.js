import React from "react";
import bedroom from "../../assets/bedroom.png";
import kitchen from "../../assets/kitchen.png";
import bathroom from "../../assets/bathroom.png";
import parking from "../../assets/parking.png";
import "./index.css";
import {AiOutlineDoubleLeft, AiOutlineDoubleRight} from "react-icons/ai";

export default function FormFacility({
  formData,
  nextStep,
  prevStep,
  handleChange,
}) {
  const forwardStep = (e) => {
    e.preventDefault();
    if (
      formData.bedroom == "" ||
      formData.kitchen == "" ||
      formData.bathroom == ""
    ) {
      alert("Please fill up all the fields.");
    } else {
      nextStep();
    }
  };

  console.log(
    "Form facility : " + formData.bedroom,
    formData.kitchen,
    formData.bathroom,
    formData.bikeParking,
    formData.carParking
  );

  return (
    <>
      <section className="details-banner"></section>

      <div className="container text-center mb-5">
        <h1 className="mb-4">Fill the number of rooms</h1>
        <form id="formFacility" onSubmit={forwardStep}>
          <div className="row">
            <div className="col-md-3 m-auto border-end border-3 border-secondary formFacility ">
              <img alt="bedroomImg" src={bedroom} className="img-fluid p-5" />
              <h3>Bedroom</h3>
              <input
                type="number"
                max="1000"
                min="1"
                name="bedroom"
                className="form-control text-center w-75 p-3 m-auto"
                placeholder="No. of Bedroom"
                defaultValue={formData.bedroom}
                required
                onChange={handleChange}
              />
            </div>
            <div className="col-md-3 m-auto border-end border-3 border-secondary formFacility">
              <img alt="kitchenImg" src={kitchen} className="img-fluid p-5" />
              <h3>kitchen</h3>
              <input
                type="number"
                max="100"
                min="1"
                name="kitchen"
                className="form-control text-center w-75 p-3 m-auto"
                placeholder="No. of Kitchen"
                defaultValue={formData.kitchen}
                required
                onChange={handleChange}
              />
            </div>
            <div className="col-md-3 m-auto border-end border-3 border-secondary formFacility">
              <img alt="bathroomImg" src={bathroom} className="img-fluid p-5" />
              <h3>Bathroom</h3>
              <input
                type="number"
                name="bathroom"
                min="1"
                className="form-control text-center w-75 p-3 m-auto"
                placeholder="No. of Bathroom"
                defaultValue={formData.bathroom}
                required
                onChange={handleChange}
              />
            </div>
            <div className="col-md-3 m-auto formFacility">
              <img alt="parkingImg" src={parking} className="img-fluid p-5" />
              <h3>Select Parking</h3>
              <div
                name="parking"
                className="btn-group btn-group-lg"
                role="group"
                aria-label="Basic checkbox toggle button group"
                id="btnCheck"
              >
                <input
                  type="checkbox"
                  className="btn-check"
                  id="btnBike"
                  name="bikeParking"
                  checked={formData.bikeParking}
                  onChange={handleChange}
                />
                <label className="btn btn-outline-secondary" htmlFor="btnBike">
                  Bike
                </label>

                <input
                  type="checkbox"
                  className="btn-check"
                  id="btnCar"
                  name="carParking"
                  checked={formData.carParking}
                  onChange={handleChange}
                />
                <label className="btn btn-outline-secondary" htmlFor="btnCar">
                  Car
                </label>
              </div>
            </div>
          </div>
        </form>
      </div>

      <div className="customFormPagination row mb-3">
        <ol className="progress-meter col-md-8">
          <li className="progress-point done">House Type</li>
          <li className="progress-point done">Area</li>
          <li className="progress-point done">Details</li>
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
            <AiOutlineDoubleLeft size='2.5em'/>
          </button>
          <button
            className="btn btn-outline-dark offset-md-1 col-md-5"
            type="submit"
            form="formFacility"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            title="Go to Next Step"
          >
            <AiOutlineDoubleRight size='2.5em'/>
          </button>
        </div>
      </div>
    </>
  );
}
