import React, { useEffect } from "react";
import ReactDom from "react-dom";
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle'


export default function Success() {
    useEffect(() => {
        var myModal = new bootstrap.Modal(document.getElementById('modalSuccess'),{});
        myModal.toggle();
      }, [])
    
  return ReactDom.createPortal(
    <>
      <div className="modal-fade" open={true} id="modalSuccess" tabindex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p>Modal body text goes here.</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}
