import React from "react";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

export default function FormConfirmation({ formData, nextStep, prevStep, }) {

  const handleSubmit = (e) => {
    e.preventDefault();
    confirmAlert({
      title: "Confirm to Send",
      message: "Are you sure the details are correct?",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            localStorage.setItem('dreamHouseSuccess', 'true');
            window.location.reload();
          },
        },
        {
          label: "No",
        },
      ],
    });
  };
  const parkings = () => {
    if (formData.bikeParking && formData.carParking) {
      return "Bike and Car";
    } else if (formData.bikeParking || formData.carParking) {
      if (formData.bikeParking) {
        return "Bike";
      } else {
        return "Car";
      }
    }
    else{
      return "None";
    }
  };
  return (
    <>
      <section className="details-banner"></section>

      <div className="container px-5">
        <h1 className="mb-4">Confirm your details:</h1>

        <div className="row">
          <div className="col-md-4 mb-4">
            <h4>Personal Details</h4>
            <p>Name: {formData.fullName}</p>
            <p>Email: {formData.email}</p>
            <p>Phone Number: {formData.phoneNumber}</p>
          </div>

          <div className="col-md-4">
            <h4>House Type</h4>
            <p>{formData.houseType}</p>

            <h4>Location | Area</h4>
            <p>
              {formData.location} | {formData.area} aana
            </p>
          </div>

          <div className="col-md-4">
            <h4>House details</h4>
            <p>No. of Bedroom: {formData.bedroom}</p>
            <p>No. of Kitchen: {formData.kitchen}</p>
            <p>No. of Bathroom: {formData.bathroom}</p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <h4>Parking:</h4>
            <p>{parkings()}</p>
          </div>

          <div className="col-md-4">
            <h4>Additional Information</h4>
            <p>{formData.addInfo}</p>
          </div>

          <div className="col-md-4">
            <h4>Budget</h4>
            <p>{formData.budget}</p>
          </div>
        </div>

        <br />
        <br />

        <div className="row m-auto p-3">
          <div className="col-6 text-end">
            <button className="btn btn-danger" onClick={prevStep}>
              Back
            </button>
          </div>
          <div className="col-6 text-start">
            <button className="btn btn-primary" onClick={handleSubmit}>
              Continue
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
