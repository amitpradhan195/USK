import React, {useEffect} from "react";
import "./index.css";
import {AiOutlineDoubleLeft, AiOutlineDoubleRight} from "react-icons/ai";
import AOS from "aos";

export default function FormCityAndArea({
  formData,
  nextStep,
  prevStep,
  handleChange
}) {

  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({
      duration: 1000,
      anchorPlacement: "top-bottom",
    });
  })

    const forwardStep = (e) => {
        e.preventDefault();
        if(formData.location=="" || formData.area==""){
            alert("Please fill up all the fields.");
        }
        else{
            nextStep();
        }
    }
    console.log(formData)
  return (
    <div>
      <section className="details-banner"></section>

      <div className="container text-center formCityArea mb-5" data-aos="fade-left">
        <form id="formCityAndArea" onSubmit={forwardStep}>
          <h1 className="mb-4">Which City you prefer?</h1>
          <div className="input-group flex-nowrap mb-5 m-auto">
            <input
              type="text"
              name="location"
              defaultValue={formData.location}
              className="form-control p-3"
              onChange={handleChange}
              placeholder="e.g: Baneshwor"
              aria-label="location"
              aria-describedby="addon-wrapping"
              required
            />
          </div>

          <h1 className="mb-4">Area Coverage</h1>
          <div className="input-group flex-nowrap mb-3 m-auto">
            <input
              type="number"
              name="area"
              min="1"
              defaultValue={formData.area}
              className="form-control p-3"
              onChange={handleChange}
              placeholder="e.g: 4 aana"
              aria-label="Area"
              aria-describedby="addon-wrapping"
              required
            />
            <span className="aanaPrepend">
                Aana
            </span>
          </div>
        </form>
      </div>

      
      <div className="customFormPagination row mb-3">
        <ol className="progress-meter col-md-8">
          <li className="progress-point done">House Type</li>
          <li className="progress-point done">Area</li>
          <li className="progress-point todo">Details</li>
          <li className="progress-point todo">Budget</li>
        </ol>
        
        <div className="col-md-4 text-center">
            <button className="btn btn-outline-dark col-md-5" onClick={prevStep} data-bs-toggle="tooltip" data-bs-placement="left" title="Go to Previous Step"><AiOutlineDoubleLeft size='2.5em'/></button>
            <button type="submit" form='formCityAndArea' className="btn btn-outline-dark offset-md-1 col-md-5" data-bs-toggle="tooltip" data-bs-placement="right" title="Go to Next Step"><AiOutlineDoubleRight size='2.5em'/></button>
        </div>
      </div>
    </div>
  );
}
