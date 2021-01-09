import React from "react";
import "../../css/style.css";
import { MdClose } from "react-icons/md";
import { Field, Form, Formik } from "formik";
import { TextField } from "formik-material-ui";
import * as Yup from "yup";
import { makeStyles } from "@material-ui/core";
import { Button } from "bootstrap";
import "../../css/style.css";

const classStyle = makeStyles((theme) => ({
  form: {
    width: "100%",
  },
  formDropdown: {
    width: "100%",
  },
  headingText: {
    display: "inline-block",
  },
  submit: {},
}));

export default function DHouse() {
  const classes = classStyle();

  return (
    <>
      {/* <button
        type="button"
        className="btn btn-lg btn-primary mt-3 btnbuilt shadow"
        data-toggle="modal"
        data-target="#exampleModal"
      >
        Click Here
      </button> */}
      <div
        className="modal fade"
        id="exampleModal1"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-body">
              <h4 className="text-center">Send Us Your Requirements</h4>
              <form className="p-5">
                {/* property for */}
                <label className="mb-2">Property For:</label>
                <div className="form-group col-lg-4 mb-3">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="pf"
                      id="inlineRadio1"
                      value="Buy"
                      checked
                    />
                    <label className="form-check-label" for="inlineRadio1">
                      Buy
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="pf"
                      id="inlineRadio2"
                      value="Rent"
                    />
                    <label className="form-check-label" for="inlineRadio2">
                      Rent
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="pf"
                      id="inlineRadio3"
                      value="Sale"
                    />
                    <label className="form-check-label" for="inlineRadio3">
                      Sale
                    </label>
                  </div>
                </div>
                {/* property type */}
                <label className="mb-2">Property Type:</label>
                <div className="form-group col-lg-8 mb-3">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="pt"
                      id="inlineRadio1"
                      value="Room"
                      checked
                    />
                    <label className="form-check-label" for="inlineRadio1">
                      Room
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="pt"
                      id="inlineRadio2"
                      value="Flat"
                    />
                    <label className="form-check-label" for="inlineRadio2">
                      Flat
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="pt"
                      id="inlineRadio3"
                      value="Bulding"
                    />
                    <label className="form-check-label" for="inlineRadio3">
                      Bulding
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="pt"
                      id="inlineRadio4"
                      value="Land"
                    />
                    <label className="form-check-label" for="inlineRadio3">
                      Land
                    </label>
                  </div>
                </div>
                {/* location */}
                <label className="mb-2">Location:</label>
                <input
                  type="text"
                  className="form-control mb-3"
                  id="formGroupExampleInput"
                  placeholder="Nayabazar, Kathmandu"
                ></input>
                {/* price */}
                <div className="row mb-3">
                  <div className="form-group col-lg-2">
                    <p>Price:</p>
                  </div>

                  <div className="form-group col-lg-4">
                    <input
                      type="text"
                      className="form-control"
                      id="inputCity"
                    />
                  </div>
                  <div className="form-group col-lg-4">
                    <input type="text" className="form-control" id="inputZip" />
                  </div>
                </div>
                {/* bedroom */}
                <div className="row">
                  <div className="form-group col-lg-2">
                    <p>Bedroom:</p>
                  </div>

                  <div className="form-group col-lg-4">
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="Bedroom"
                        id="inlineRadio1"
                        value="1"
                        checked
                      />
                      <label className="form-check-label" for="inlineRadio1">
                        1
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="Bedroom"
                        id="inlineRadio2"
                        value="2"
                      />
                      <label className="form-check-label" for="inlineRadio2">
                        2
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="Bedroom"
                        id="inlineRadio3"
                        value="2+"
                      />
                      <label className="form-check-label" for="inlineRadio3">
                        2+
                      </label>
                    </div>
                  </div>
                </div>
                {/* parking */}
                <label className="mb-2">Parking Area</label>
                <div className="form-group col-lg-8">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="Parking Area"
                      id="inlineRadio1"
                      value="Bike Only"
                      checked
                    />
                    <label className="form-check-label" for="inlineRadio1">
                      Bike Only
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="Parking Area"
                      id="inlineRadio2"
                      value="Car Only"
                    />
                    <label className="form-check-label" for="inlineRadio2">
                      Car Only
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="Parking Area"
                      id="inlineRadio3"
                      value="Both"
                    />
                    <label className="form-check-label" for="inlineRadio3">
                      Both
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="Parking Area"
                      id="inlineRadio4"
                      value="None"
                    />
                    <label className="form-check-label" for="inlineRadio3">
                      None
                    </label>
                  </div>
                </div>

                <button
                  type="button"
                  className="btn btn-lg btn-primary mt-4 btnbuilt shadow"
                >
                  SUBMIT
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
