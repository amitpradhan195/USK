import React from "react";

export default function CareerModal() {
  return (
    <>
      <div
        className="modal fade"
        id="exampleModal2"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-md">
          <div className="modal-content">
            <div className="modal-body">
              <h3 className="text-center">Send Your CV</h3>
              <form className="pl-5 pt-3 was-validated">
                {/* upload */}
                {/* <label className="mb-2 h3" style={{fontWeight:'bold', color:'#273746'}}>Send Your CV:</label> */}
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
