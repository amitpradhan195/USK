import React, { useState, useEffect } from "react";
import "../../css/style.css";
import emailjs from 'emailjs-com';
import NumberFormat from "react-number-format";
import { IoCloseSharp } from "react-icons/io5";

export default function Requirements() {
  const [values, setValues] = useState({
    rbPF:'Rent',
    rbPT:'Room',
    rbBedroom:'1',
    rbPA:'Bike Only',
    location:'',
    budget:'',
    customerName:'',
    contactNo:'',
  });

  const [showBedroom, setShowBedroom] = useState(true);
  const [propertyType, setPropertyType] = useState('room');
  
  const onPropertyTypeChange = (name) => (e) => {
    setPropertyType(name);
  }
  
  console.log(propertyType);
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
        id="requirementsModal"
        tabIndex="-1"
        aria-labelledby="requirementsModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Send us your requirements</h4>
              <IoCloseSharp fontSize="30px" data-bs-dismiss="modal" role="button"/>
            </div>
            <div className="modal-body">
              <div className="modal-bg"></div>
                <div className="row checkbutton pb-3" role="group">
                  <div className="col-md-6">
                    <button type="button" className="btn btn-primary w-100">RENT</button>
                  </div>
                  <div className="col-md-6">
                    <button type="button" className="btn btn-primary w-100">SALE</button>
                  </div>
                </div>
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button className="nav-link active" id="room-tab" data-bs-toggle="tab" data-bs-target="#room" type="button" role="tab" aria-controls="room" aria-selected="true" onClick={onPropertyTypeChange('room')}>ROOM</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="building-tab" data-bs-toggle="tab" data-bs-target="#building" type="button" role="tab" aria-controls="building" aria-selected="false" onClick={onPropertyTypeChange('building')}>BUILDING</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="flat-tab" data-bs-toggle="tab" data-bs-target="#flat" type="button" role="tab" aria-controls="flat" aria-selected="false" onClick={onPropertyTypeChange('flat')}>FLAT</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="land-tab" data-bs-toggle="tab" data-bs-target="#land" type="button" role="tab" aria-controls="land" aria-selected="false" onClick={onPropertyTypeChange('land')}>LAND</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="commercial-tab" data-bs-toggle="tab" data-bs-target="#commercial" type="button" role="tab" aria-controls="commercial" aria-selected="false" onClick={onPropertyTypeChange('commercial')}>COMMERCIALS</button>
                </li>
              </ul>
              <form className="pl-5 pt-2" onSubmit={sendRequirement}>
                {/* property for */}
                <div className="form-group m-3">
                  {/* <div className="form-check form-check-inline">
                    <input 
                      className="form-check-input" 
                      type="radio" 
                      id="pf1" 
                      value="Rent" 
                      name="rbPF" 
                      onClick={onValueChange}
                      defaultChecked
                      />
                    <label className="form-check-label" htmlFor="pf1">Rent</label>
                  </div>
                  
                  <div className="form-check form-check-inline">
                    <input 
                      className="form-check-input" 
                      type="radio" 
                      id="pf2" 
                      value="Sale" 
                      name="rbPF" 
                      onClick={onValueChange}
                      />
                    <label className="form-check-label" htmlFor="pf2">Sale</label>
                  </div> */}
                  {/* <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked/>
                    <label className="btn btn-outline-primary" for="btnradio1">RENT</label>

                    <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autocomplete="off"/>
                    <label className="btn btn-outline-primary" for="btnradio2">SALE</label>
                  </div> */}
                </div>

                {/* property type */}
                {/* <label>Property Type :</label> */}
                {/* <div className="form-group m-3">
                <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="rbPT"
                      id="pt1"
                      value="Room"
                      onClick={onValueChange}
                      defaultChecked
                    />
                    <label className="form-check-label" htmlFor="pt1">Room</label>
                  </div>

                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="rbPT"
                      id="pt2"
                      value="Flat"
                      onClick={onValueChange}
                    />
                    <label className="form-check-label" htmlFor="pt2">Flat</label>
                  </div>

                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="rbPT"
                      id="pt3"
                      value="Bulding"
                      onClick={onValueChange}
                    />
                    <label className="form-check-label" htmlFor="pt3">Bulding</label>
                  </div>

                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="rbPT"
                      id="pt4"
                      value="Land"
                      onClick={onValueChange}
                    />
                    <label className="form-check-label" htmlFor="pt4">Land</label>
                  </div>
                </div> */}

                {/* bedroom */}
                {showBedroom ?
                <>
                <label>Bedroom :</label>
                <div className="form-group mb-3 ms-3">
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
                    <label className="form-check-label" htmlFor="bed1">
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
                    <label className="form-check-label" htmlFor="bed2">
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
                    <label className="form-check-label" htmlFor="bed3">
                      2+
                    </label>
                  </div>
                </div>
                </>
                :''}

                {/* parking */}
                <label className="form-group">Parking Area :</label>
                <div className="form-group mb-3 ms-3">
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
                    <label className="form-check-label" htmlFor="PA1">
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
                    <label className="form-check-label" htmlFor="PA2">
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
                    <label className="form-check-label" htmlFor="PA3">
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
                    <label className="form-check-label" htmlFor="PA4">
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
                  <div className="form-group col-md-6">
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
                  className="btn mt-2 btnSendRequirements"
                >
                  <span>
                    SEND
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
