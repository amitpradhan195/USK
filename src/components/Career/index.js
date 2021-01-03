import React from "react";

export default function CareerModal() {
  return (
    <>
      <div
        className="modal fade"
        id="exampleModal2"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-body">
              <h4 className="text-center">Work at USK</h4>
              <form className="p-5 was-validated">
                {/* upload */}
                <label className="mb-2">Send Your CV:</label>
                <div class="custom-file">
                  <input
                    type="file"
                    class="custom-file-input"
                    id="validatedCustomFile"
                    required
                  />
                  <label class="custom-file-label" for="validatedCustomFile">
                    Choose file...
                  </label>
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
