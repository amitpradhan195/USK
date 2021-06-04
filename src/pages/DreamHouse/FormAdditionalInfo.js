import React from "react";
import "./index.css";

export default function FormAdditionalInfo({
  formData,
  nextStep,
  prevStep,
  handleChange,
}) {

    console.log("Form Values are : "+formData.addInfo+'\n'+formData.budget);

    
  return (
    <div>
      <section className="details-banner"></section>

      <div className="container">
        <form id="formAddInfos" onSubmit={nextStep}>
          <div className="row mb-5 formAddInfo">
            <div className="col-md-4">
              <h1>Additional Information</h1>
            </div>
            <div className="form-group mb-3 col-md-8">
              <textarea name="addInfo" className="form-control p-3 w-75" defaultValue={formData.addInfo} placeholder="Optional..." onChange={handleChange}/>
            </div>
          </div>
          <div className="row mb-5 formAddInfo">
            <div className="col-md-4">
              <h1>Budget</h1>
              <small>(approx)</small>
            </div>
            <div className="form-group mb-3 col-md-8">
              <input
                type="number"
                min="100000"
                name="budget"
                step={100000}
                defaultValue={formData.budget}
                className="form-control text-center p-3 w-50"
                placeholder="Rs. 10000000"
                required
                onChange={handleChange}
              />
            </div>
          </div>
        </form>

        <div className="customFormPagination row mb-3">
        <ol className="progress-meter col-md-8">
          <li className="progress-point done">House Type</li>
          <li className="progress-point done">Area</li>
          <li className="progress-point done">Details</li>
          <li className="progress-point done">Budget</li>
        </ol>

        <div className="col-md-4 text-center">
          <button className="btn btn-secondary col-md-5" onClick={prevStep}>
            {"<<"}
          </button>
          <button
            className="btn btn-secondary offset-md-1 col-md-5"
            type="submit"
            form="formAddInfos"
          >
            {">>"}
          </button>
        </div>
      </div>
      </div>
    </div>
  );
}
