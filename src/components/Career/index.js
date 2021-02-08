import React from "react";
import { AiOutlineClose } from "react-icons/ai";

export default function CareerModal() {
  return (
    <>
      <div
        className="modal fade"
        id="careerModal"
        tabIndex="-1"
        aria-labelledby="careerModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-md">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title text-center">Send Your CV</h3>
              <AiOutlineClose fontSize="30px" data-bs-dismiss="modal" role="button"/>
            </div>
            <div className="modal-body">
              <form className="pl-5 pt-3 was-validated">
                {/* upload */}
                <div className="custom-file pb-2">
                  <input
                    type="file"
                    className="custom-file-input"
                    id="validatedCustomFile"
                    required
                  />
                </div>
                <p><span style={{fontWeight:'bold', color:'#E74C3C'}}>Note:</span> Only PDF file acceptable. </p>
                <button
                  type="button"
                  className="btn btn-lg btn-primary btnbuilt shadow"
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
