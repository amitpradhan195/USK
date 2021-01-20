import React, { useState } from "react";
import "../../css/style.css";
import emailjs from 'emailjs-com';
import NumberFormat from "react-number-format";
import { AiOutlineClose } from "react-icons/ai";

export default function Requirements() {
  const [values, setValues] = useState({
    rbPF:'Buy',
    rbPT:'Room',
    rbBedroom:'1',
    rbPA:'Bike Only',
    location:'',
    budget:'',
    customerName:'',
    contactNo:''
  });
  const [showBedroom, setShowBedroom] = useState(false);

  function onValueChange(e){
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
    console.log(e.target.value)

    if(e.target.name==='rbPT'){
      if(e.target.value==='Land')
      {
        setShowBedroom(false);
      }
      else{
        setShowBedroom(true);
      }
    }
  }

  function sendRequirement(e){
    console.log(e.target);
    e.preventDefault();
    emailjs.sendForm('service_3d6e0nk', 'template_6r4yi8f', e.target, 'user_y3XRw7kDDXVaGOnG4ggqv')
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
      <div
        className="modal fade"
        id="exampleModal1"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div class="modal-header">
              <h4 className="modal-title">Send Us Your Requirements</h4>
              <AiOutlineClose fontSize="30px" data-dismiss="modal"/>
            </div>
            <div className="modal-body">
              <form className="pl-5 pt-2" onSubmit={sendRequirement}>
                {/* property for */}
                <label>Property For :</label>
                <div className="form-group mb-3 ml-3">
                  <input 
                    className="form-check-input" 
                    type="radio" 
                    id="pf1" 
                    value="Buy" 
                    name="rbPF" 
                    onClick={onValueChange}
                    defaultChecked
                    /> 
                  <label className="form-check-label mr-3 ml-1" for="pf1">Buy</label>
                  <input 
                    className="form-check-input" 
                    type="radio" 
                    id="pf2" 
                    value="Rent" 
                    name="rbPF" 
                    onClick={onValueChange}
                    />
                  <label className="form-check-label mr-3 ml-1" for="pf2">Rent</label>
                  <input 
                    className="form-check-input" 
                    type="radio" 
                    id="pf3" 
                    value="Sale" 
                    name="rbPF" 
                    onClick={onValueChange}
                    />
                  <label className="form-check-label mr-3 ml-1" for="pf3">Sale</label>
                </div>

                {/* property type */}
                <label>Property Type :</label>
                <div className="form-group mb-3 ml-3">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="rbPT"
                      id="pt1"
                      value="Room"
                      onClick={onValueChange}
                      defaultChecked
                    />
                    <label className="form-check-label mr-3 ml-1" for="pt1">Room</label>

                    <input
                      className="form-check-input"
                      type="radio"
                      name="rbPT"
                      id="pt2"
                      value="Flat"
                      onClick={onValueChange}
                    />
                    <label className="form-check-label mr-3 ml-1" for="pt2">Flat</label>
                    <input
                      className="form-check-input"
                      type="radio"
                      name="rbPT"
                      id="pt3"
                      value="Bulding"
                      onClick={onValueChange}
                    />
                    <label className="form-check-label mr-3 ml-1" for="pt3">Bulding</label>
                    <input
                      className="form-check-input"
                      type="radio"
                      name="rbPT"
                      id="pt4"
                      value="Land"
                      onClick={onValueChange}
                    />
                    <label className="form-check-label" for="pt4">Land</label>
                </div>

                {/* bedroom */}
                {showBedroom ?
                <>
                <label>Bedroom :</label>
                <div className="form-group mb-3 ml-3">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="rbBedroom"
                      id="bed1"
                      value="1"
                      onClick={onValueChange}
                      defaultChecked
                    />
                    <label className="form-check-label" for="bed1">
                      1
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="rbBedroom"
                      id="bed2"
                      value="2"
                      onClick={onValueChange}
                    />
                    <label className="form-check-label" for="bed2">
                      2
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="rbBedroom"
                      id="bed3"
                      value="2+"
                      onClick={onValueChange}
                    />
                    <label className="form-check-label" for="bed3">
                      2+
                    </label>
                  </div>
                </div>
                </>
                :''}

                {/* parking */}
                <label className="form-group">Parking Area :</label>
                <div className="form-group mb-3 ml-3">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="rbPA"
                      id="PA1"
                      value="Bike Only"
                      onClick={onValueChange}
                      defaultChecked
                    />
                    <label className="form-check-label" for="PA1">
                      Bike Only
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="rbPA"
                      id="PA2"
                      value="Car Only"
                      onClick={onValueChange}
                    />
                    <label className="form-check-label" for="PA2">
                      Car Only
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="rbPA"
                      id="PA3"
                      value="Both"
                      onClick={onValueChange}
                    />
                    <label className="form-check-label" for="PA3">
                      Both
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="rbPA"
                      id="PA4"
                      value="None"
                      onClick={onValueChange}
                    />
                    <label className="form-check-label" for="PA4">
                      None
                    </label>
                  </div>
                </div>

                {/* location */}
                <div className="row">
                  <div className="form-group col-md-3 pt-2">
                    <label>Location:</label>
                  </div>
                  <div className="form-group col-md-6">
                    <input
                      type="text"
                      className="form-control mb-3"
                      placeholder="e.g: Nayabazar, Kathmandu"
                      name="location"
                      onBlur={onValueChange}
                      required
                      />
                  </div>
                </div>

                {/* price */}
                <div className="row">
                  <div className="form-group col-md-3 pt-2">
                    <label>Budget (in Rs):</label>
                  </div>
                  <div className="form-group col-lg-6">
                    <input
                      type='number'
                      name="budget"
                      className="form-control mb-3"
                      placeholder="e.g: 100000"
                      min={10000}
                      step={5000}
                      onBlur={onValueChange}
                      required
                    />
                  </div>
                </div>

                {/* user name */}
                <div className="row">
                  <div className="form-group col-md-3 pt-2">
                    <label>Your Name:</label>
                  </div>
                  <div className="form-group col-md-6">
                    <input
                      type="text"
                      className="form-control mb-3"
                      placeholder="e.g: Amit Pradhan"
                      name="customerName"
                      onBlur={onValueChange}
                      required
                      />
                  </div>
                </div>

                {/* Contact Number */}
                <div className="row">
                  <div className="form-group col-md-3 pt-2">
                    <label>Contact Number:</label>
                  </div>
                  <div className="form-group col-md-6">
                    <NumberFormat
                      className="form-control mb-3"
                      placeholder="e.g: 9812345678"
                      name="contactNo"
                      min={9800000000}
                      max={9899999999}
                      onBlur={onValueChange}
                      required
                      />
                  </div>
                </div>

                <button
                  type="submit"
                  value="Send"
                  className="btn btn-lg btn-primary mt-2 btnbuilt shadow"
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
