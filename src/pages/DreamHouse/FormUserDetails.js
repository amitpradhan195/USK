import React, { useEffect, useState } from "react";
import "./index.css";
import { FaUser, FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import HouseBox from "../../assets/houseBox.jpg";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle";
import handShake from "../../assets/handshake.png";

export default function FormUserDetails({ formData, nextStep, handleChange }) {
  console.log(localStorage.getItem("dreamHouseSuccess"));
  const sessionDreamHouse =
    localStorage.getItem("dreamHouseSuccess") === "true";

  useEffect(() => {
    var myModal = new bootstrap.Modal(
      document.getElementById("modalSuccess"),
      {}
    );
    if (sessionDreamHouse) {
      myModal.show();
      localStorage.setItem("dreamHouseSuccess", "false");
    }
  }, [sessionDreamHouse]);

  const forwardStep = (e) => {
    e.preventDefault();
    if (
      formData.fullName == "" ||
      formData.phoneNumber == "" ||
      formData.email == ""
    ) {
      alert("Please enter all the details");
    } else {
      nextStep();
    }
  };

  console.log(
    "Initial form Data are :  " + formData.fullName,
    formData.phoneNumber,
    formData.email,
    formData.houseType
  );
  return (
    <>
      <section className="details-banner"></section>

      <section className="container my-5">
        <div className="row first-section">
          <div className="col-md-8">
            <legend>HOME</legend>
            <p className="mb-4">Let's build your dream house</p>
            <form id="dreamHouseStart" onSubmit={forwardStep}>
              <div className="input-group flex-nowrap mb-4">
                <span className="input-group-text" id="addon-wrapping">
                  <FaUser size="1.5em" />
                </span>
                <input
                  type="text"
                  name="fullName"
                  defaultValue={formData.fullName}
                  className="form-control p-3"
                  onChange={handleChange}
                  placeholder="Full Name"
                  aria-label="Fullname"
                  aria-describedby="addon-wrapping"
                  required
                />
              </div>
              <div className="input-group flex-nowrap mb-4">
                <span className="input-group-text" id="addon-wrapping">
                  <FaPhoneAlt size="1.5em" />
                </span>
                <input
                  type="tel"
                  name="phoneNumber"
                  pattern="[0-9]{10}"
                  defaultValue={formData.phoneNumber}
                  className="form-control p-3"
                  onChange={handleChange}
                  placeholder="Phone Number"
                  aria-label="Phone Number"
                  aria-describedby="addon-wrapping"
                  required
                />
              </div>
              <div className="input-group flex-nowrap mb-4">
                <span className="input-group-text" id="addon-wrapping">
                  <IoIosMail size="1.5em" />
                </span>
                <input
                  type="email"
                  name="email"
                  defaultValue={formData.email}
                  className="form-control p-3"
                  onChange={handleChange}
                  placeholder="Email Address"
                  aria-label="Email Address"
                  aria-describedby="addon-wrapping"
                  required
                />
              </div>
            </form>
          </div>
          <div className="col-md-4 m-auto">
            <img src={HouseBox} alt="houseBoxImg" />
            <button
              form="dreamHouseStart"
              type="submit"
              className="btn mt-5 btnStart"
            >
              <span>START</span>
            </button>
          </div>
        </div>
      </section>

      <div
        className="modal fade"
        id="modalSuccess"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header border-0">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body px-4 mb-3">
              <div className="row">
                <div className="col-md-6 m-auto">
                  <img src={handShake} alt="handShakeImg" />
                </div>
                <div className="col-md-6 border border-2 rounded-3 p-4">
                  <h2 className="fw-bolder">Congratulation</h2>
                  <div className="text-center">
                    <small>
                      You have successfully build you dream house.
                      <br />
                      <br />
                      Soon you will be contacted by our team for further
                      processing.
                    </small>
                  </div>
                  <br />
                  <br />
                  <small className="fw-bold">Note: </small>
                  <br />
                  <small>
                    Please contact in the below given number if our team did not
                    respond within 24 hours.
                  </small>
                  <br />
                  <small className="fw-bolder">9841504552, 9813955307</small>
                  <br />
                  <br />
                  <small className="text-uppercase fw-bolder">Thank you</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
