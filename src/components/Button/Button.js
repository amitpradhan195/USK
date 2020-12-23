import React from "react";
import { NavLink } from "react-router-dom";

export default function Button() {
  return (
    <>
      <NavLink
        type="button"
        className="btn btn-lg btn-block shadow mt-3 viewdetails"
        to="#"
      >
        View Details
      </NavLink>
    </>
  );
}
