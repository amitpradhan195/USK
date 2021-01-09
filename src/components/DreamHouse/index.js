import React from "react";
import "../../css/style.css";
import { MdClose } from "react-icons/md";
import { Field, Form, Formik } from "formik";
import { TextField } from "formik-material-ui";
import * as Yup from "yup";
import { makeStyles } from "@material-ui/core";
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
      <button
        data-aos="fade-right"
        type="button"
        className="btn btn-lg btn-primary mt-3 btnbuilt shadow"
        data-toggle="modal"
        data-target="#exampleModal"
      >
        Click Here
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-body">
              <h4 className="text-center">Build Your Dream House</h4>
              {/* <Formik>
                {(formik) => {
                  return (
                    <Form>
                      <Field
                        component={TextField}
                        label="Full Name"
                        name="name"
                        type="text"
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        autoFocus
                      />
                    </Form>
                  );
                }}
              </Formik> */}
              <form className="p-5">
                <label className="mb-2 font-weight-bold">
                  Select Your House Type:
                </label>
                <div className="form-group col-lg-6 mb-3">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio2"
                      value="Townhouse"
                    />
                    <label className="form-check-label" for="inlineRadio2">
                      Townhouse
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio3"
                      value="Commercial"
                    />
                    <label className="form-check-label" for="inlineRadio3">
                      Commercial
                    </label>
                  </div>
                </div>
                {/* select location */}

                <div className="form-group col-md-6 mb-3">
                  <label className="font-weight-bold">Select Location:</label>
                  <select id="inputState" className="form-control">
                    <option selected>Choose...</option>
                    <option>...</option>
                  </select>
                </div>
                {/* area coverage */}
                <label className="font-weight-bold">Area Coverage:</label>
                <div className="form-group col-lg-8 mb-3">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio1"
                      value="3 Aana"
                    />
                    <label className="form-check-label" for="inlineRadio1">
                      3 Aana
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio2"
                      value="4 Aana"
                    />
                    <label className="form-check-label" for="inlineRadio2">
                      4 Aana
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio3"
                      value="6 Aana"
                    />
                    <label className="form-check-label" for="inlineRadio3">
                      6 Aana
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio3"
                      value="More"
                    />
                    <label className="form-check-label" for="inlineRadio3">
                      More
                    </label>
                  </div>
                </div>

                {/* rooms in each floor */}
                <label className="font-weight-bold">Rooms in Each Floor:</label>
                <div className="row">
                  <div className="form-group col-lg-2">
                    <p>Bedroom:</p>
                  </div>

                  <div className="form-group col-lg-6">
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                        value="1 Room"
                      />
                      <label className="form-check-label" for="inlineRadio1">
                        1 Room
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio2"
                        value="2 Rooms"
                      />
                      <label className="form-check-label" for="inlineRadio2">
                        2 Rooms
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio3"
                        value="3 Rooms"
                      />
                      <label className="form-check-label" for="inlineRadio3">
                        3 Rooms
                      </label>
                    </div>
                  </div>
                </div>
                {/* kitchen */}
                <div className="row">
                  <div className="form-group col-lg-2">
                    <p>Kitchen:</p>
                  </div>

                  <div className="form-group col-lg-6">
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                        value="Only 1"
                      />
                      <label className="form-check-label" for="inlineRadio1">
                        Only 1
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio2"
                        value="1 Each Floor"
                      />
                      <label className="form-check-label" for="inlineRadio2">
                        1 Each Floor
                      </label>
                    </div>
                  </div>
                </div>
                {/* bathroom */}
                <div className="row">
                  <div className="form-group col-lg-2">
                    <p>Bathroom:</p>
                  </div>

                  <div className="form-group col-lg-6">
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                        value="Only 1"
                      />
                      <label className="form-check-label" for="inlineRadio1">
                        Only 1
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio2"
                        value="1 Each Floor"
                      />
                      <label className="form-check-label" for="inlineRadio2">
                        1 Each Floor
                      </label>
                    </div>
                  </div>
                </div>
                {/* parking */}
                <label className="font-weight-bold">Parking Area</label>
                <div className="form-group col-lg-8 mb-3">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio1"
                      value="Bike Only"
                    />
                    <label className="form-check-label" for="inlineRadio1">
                      Bike Only
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
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
                      name="inlineRadioOptions"
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
                      name="inlineRadioOptions"
                      id="inlineRadio3"
                      value="None"
                    />
                    <label className="form-check-label" for="inlineRadio3">
                      None
                    </label>
                  </div>
                </div>
                {/* Tell us more */}
                <div className="row mb-3">
                  <div className="form-group col-lg-4">
                    <p className="font-weight-bold">Tell Us More:</p>
                  </div>

                  <div className="form-group col-lg-6">
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                    ></textarea>
                  </div>
                </div>
                {/* fullname */}
                <div className="row mb-3">
                  <div className="form-group col-lg-4">
                    <p className="font-weight-bold">Full Name: </p>
                  </div>

                  <div className="form-group col-lg-4">
                    <input type="text" className="form-control" />
                  </div>
                </div>
                {/* phone no */}
                <div className="row mb-3">
                  <div className="form-group col-lg-4">
                    <p className="font-weight-bold">Phone Number: </p>
                  </div>

                  <div className="form-group col-lg-4">
                    <input type="text" className="form-control" />
                  </div>
                </div>
                {/* budget */}
                <div className="row">
                  <div className="form-group col-lg-4">
                    <p className="font-weight-bold">Budget (in Rs):</p>
                  </div>

                  <div className="form-group col-lg-4">
                    <input type="text" className="form-control" />
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
