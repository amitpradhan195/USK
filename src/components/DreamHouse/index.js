import React, { useState } from "react";
import "../../css/style.css";
import "../../css/style.scss";
import emailjs from 'emailjs-com';
import NumberFormat from "react-number-format";
import { AiOutlineClose } from "react-icons/ai";

export default function DHouse() {
  const [values, setValues] = useState({
    rbHT:'Townhouse',
    rbAC:'3',
    rbBedroom:'1',
    rbPA:'Bike Only',
    location:'',
    rbKitchen:'',
    rbBathroom:'',
    tellUsMore:'',
    fullName:'',
    contactNo:'',
    budget:''
  })

  function onValueChange(e){
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
    console.log(e.target.value)
  }

  function sendRequirementForDreamHouse(e){
    console.log(e.target);
    e.preventDefault();
    emailjs.sendForm('service_3d6e0nk', 'template_ikx1d6i', e.target, 'user_y3XRw7kDDXVaGOnG4ggqv')
      .then((result) => {
          alert("Thankyou! We got you requirements. We will contact you soon.")
          console.log(result.text);
          window.location.reload();
      }, (error) => {
          alert("Please! Make sure you are connected to the internet.")
          console.log(error.text);
    });
  }

  return (
    <>
      {/* <button
        data-aos="fade-right"
        type="button"
        className="btn btn-lg btn-primary mt-3 btnbuilt shadow"
        data-bs-toggle="modal"
        data-bs-target="#dreamhouseModal"
      >
        Click Here
      </button> */}
      <div
        className="modal fade"
        id="dreamhouseModal"
        tabIndex="-1"
        aria-labelledby="dreamhouseModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-body">
              <div className="modal-header">
                <h4 className="modal-title text-center">Build Your Dream House</h4>
                <AiOutlineClose fontSize="30px" data-bs-dismiss="modal" role="button"/>
              </div>
              <form className="p-3" onSubmit={sendRequirementForDreamHouse}>
                <label className="mb-2 font-weight-bold">
                  Select Your House Type:
                </label>
                <div className="form-group col-lg-6 mb-3">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="rbHT"
                      id="ht1"
                      value="Townhouse"
                      onClick={onValueChange}
                      defaultChecked
                    />
                    <label className="form-check-label" htmlFor="ht1">
                      Townhouse
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="rbHT"
                      id="ht2"
                      value="Commercial"
                      onClick={onValueChange}
                    />
                    <label className="form-check-label" htmlFor="ht2">
                      Commercial
                    </label>
                  </div>
                </div>
                {/* select location */}

                <div className="form-group col-md-6 mb-3">
                  <label className="font-weight-bold">Select Location:</label>
                  <select name="location" onClick={onValueChange} className="form-control">
                    {/* <option selected>Choose...</option> */}
                    <option>Kathmandu</option>
                    <option>Lalitpur</option>
                    <option>Bhaktapur</option>
                  </select>
                </div>
                {/* area coverage */}
                <label className="font-weight-bold">Area Coverage:</label>
                <div className="form-group col-lg-8 mb-3">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="rbAC"
                      id="AC1"
                      value="3 Aana"
                      onClick={onValueChange}
                      defaultChecked
                    />
                    <label className="form-check-label" htmlFor="AC1">
                      3 Aana
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="rbAC"
                      id="AC2"
                      value="4 Aana"
                      onClick={onValueChange}
                    />
                    <label className="form-check-label" htmlFor="AC2">
                      4 Aana
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="rbAC"
                      id="AC3"
                      value="6 Aana"
                      onClick={onValueChange}
                    />
                    <label className="form-check-label" htmlFor="AC3">
                      6 Aana
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="rbAC"
                      id="AC4"
                      value="More"
                      onClick={onValueChange}
                    />
                    <label className="form-check-label" htmlFor="AC4">
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
                        name="rbBedroom"
                        id="bedroom1"
                        value="1 Room"
                        onClick={onValueChange}
                        defaultChecked
                      />
                      <label className="form-check-label" htmlFor="bedroom1">
                        1 Room
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="rbBedroom"
                        id="bedroom2"
                        value="2 Rooms"
                        onClick={onValueChange}
                      />
                      <label className="form-check-label" htmlFor="bedroom2">
                        2 Rooms
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="rbBedroom"
                        id="bedroom3"
                        value="2+"
                        onClick={onValueChange}
                      />
                      <label className="form-check-label" htmlFor="bedroom3">
                        2+
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
                        name="rbKitchen"
                        id="kitchen1"
                        value="Only 1"
                        onClick={onValueChange}
                        defaultChecked
                      />
                      <label className="form-check-label" htmlFor="kitchen1">
                        Only 1
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="rbKitchen"
                        id="kitchen2"
                        value="1 Each Floor"
                        onClick={onValueChange}
                      />
                      <label className="form-check-label" htmlFor="kitchen2">
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
                        name="rbBathroom"
                        id="bathroom1"
                        value="Only 1"
                        onClick={onValueChange}
                        defaultChecked
                      />
                      <label className="form-check-label" htmlFor="bathroom1">
                        Only 1
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="rbBathroom"
                        id="bathroom2"
                        value="1 Each Floor"
                        onClick={onValueChange}
                      />
                      <label className="form-check-label" htmlFor="bathroom2">
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
                      name="rbPA"
                      id="ParkinArea1"
                      value="Bike Only"
                      onClick={onValueChange}
                      defaultChecked
                    />
                    <label className="form-check-label" htmlFor="ParkinArea1">
                      Bike Only
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="rbPA"
                      id="ParkinArea2"
                      value="Car Only"
                      onClick={onValueChange}
                    />
                    <label className="form-check-label" htmlFor="ParkinArea2">
                      Car Only
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="rbPA"
                      id="ParkinArea3"
                      value="Both"
                      onClick={onValueChange}
                    />
                    <label className="form-check-label" htmlFor="ParkinArea3">
                      Both
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="rbPA"
                      id="ParkinArea4"
                      value="None"
                      onClick={onValueChange}
                    />
                    <label className="form-check-label" htmlFor="ParkinArea4">
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
                      onBlur={onValueChange}
                      className="form-control"
                      name="tellUsMore"
                      rows="3"
                      placeholder="Type here for more...."
                    ></textarea>
                  </div>
                </div>
                {/* fullname */}
                <div className="row mb-3">
                  <div className="form-group col-lg-4">
                    <p className="font-weight-bold">Full Name: </p>
                  </div>
                  <div className="form-group col-lg-4">
                    <input type="text" onBlur={onValueChange} name="fullName" placeholder="Enter full name" className="form-control" required/>
                  </div>
                </div>
                {/* phone no */}
                <div className="row mb-3">
                  <div className="form-group col-lg-4">
                    <p className="font-weight-bold">Phone Number: </p>
                  </div>

                  <div className="form-group col-lg-4">
                    <NumberFormat
                      className="form-control"
                      placeholder="e.g: 9812345678"
                      name="contactNo"
                      min={9800000000}
                      max={9899999999}
                      onBlur={onValueChange}
                      required
                      />
                    {/* <input type="number" pattern="[7-9]{1}[0-9]{9}" name="contactNo" placeholder="Enter contact number" onBlur={onValueChange} className="form-control" required/> */}
                  </div>
                </div>
                {/* budget */}
                <div className="row">
                  <div className="form-group col-lg-4">
                    <p className="font-weight-bold">Budget (in Rs):</p>
                  </div>

                  <div className="form-group col-lg-4">
                    <input
                      type="number"
                      name="budget" 
                      onBlur={onValueChange} 
                      className="form-control" 
                      placeholder="e.g: 100000"
                      min={10000}
                      step={5000}
                     required/>
                  </div>
                </div>
                <button
                  type="submit"
                  value="Send"
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
