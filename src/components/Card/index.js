import React from "react";

import slider1 from "../../assets/slider1.jpg";
import slider2 from "../../assets/slider2.jpg";
import slider3 from "../../assets/slider3.jpg";

import { IconContext } from "react-icons";
import { MdLocationOn } from "react-icons/md";
import { FaBed } from "react-icons/fa";
import { GiKnifeFork } from "react-icons/gi";
import { FaBath } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

import "./Card.css";
import { NavLink } from "react-router-dom";

const Card = (props) => {
  return (
    <IconContext.Provider value={{ color: "#28c092", size: "20px" }}>
      <>
        <div className="col-md-4 col-10 mx-auto">
          <div className="card shadow about-card">
            <div className="card-body">
              {/* title */}
              <img
                alt={props.imgsrc}
                className="d-block w-100"
                src={props.imgsrc}
              />
              <div className="tag shadow" name="ppfor" style={props.css}>
                {props.tag}
              </div>
              <h4 className=" text-center text-capitalize font-weight-bold pt-3">
                {props.prop}
              </h4>
              <p className="text-center">
                <span className="icon">
                  <MdLocationOn />
                </span>
                {props.location}
              </p>
              {/* feature */}
              <div className="facilities row pb-3 pt-4">
                <div className="col-md-5 mx-auto">
                  <span className="pr-2">
                    <FaBed />
                  </span>
                  {props.bed} Bedrooms
                </div>
                <div className="col-md-5 mx-auto">
                  <span className="pr-2">
                    <GiKnifeFork />
                  </span>
                  {props.kitchen} Kitchen
                </div>
              </div>

              <div className="facilities1 row pb-4">
                <div className="col-md-5 mx-auto">
                  <span className="pr-2">
                    <FaBath />
                  </span>
                  {props.bath} Bathroom
                </div>
                <div className="col-md-5 mx-auto">
                  <span className="pr-2">
                    <FaPhoneAlt />
                  </span>
                  {props.contact}
                </div>
              </div>
              {/* feature end */}
              <NavLink
                type="button"
                className="btn btn-lg btn-block shadow mt-3 viewdetails"
                to="#"
              >
                View Details
              </NavLink>
            </div>
          </div>
        </div>
      </>
    </IconContext.Provider>
  );
};

export default Card;
// export default function Card(props) {
//   return (
//     <IconContext.Provider value={{ color: "#28c092", size: "20px" }}>
//       <>
//         <div className="featured-card mb-5">
//           <div className="container-fluid pb-5 about-myjob">
//             <div className="row">
//               <div className="col-10 mx-auto">
//                 <div className="row gy-5">
//                   <div className="col-md-4 col-10 mx-auto">
//                     <div className="card shadow about-card">
//                       <div className="card-body">
//                         {/* title */}
//                         <img
//                           alt={props.imgsrc}
//                           className="d-block w-100"
//                           src={props.imgsrc}
//                         />
//                         <div
//                           className="tag shadow"
//                           name="ppfor"
//                           style={props.css}
//                         >
//                           {props.tag}
//                         </div>
//                         <h4 className=" text-center text-capitalize font-weight-bold pt-3">
//                           {props.prop}
//                         </h4>
//                         <p className="text-center">
//                           <span className="icon">
//                             <MdLocationOn />
//                           </span>
//                           {props.location}
//                         </p>
//                         {/* feature */}
//                         <div className="facilities row pb-3 pt-4">
//                           <div className="col-md-5 mx-auto">
//                             <span className="pr-2">
//                               <FaBed />
//                             </span>
//                             {props.bed} Bedrooms
//                           </div>
//                           <div className="col-md-5 mx-auto">
//                             <span className="pr-2">
//                               <GiKnifeFork />
//                             </span>
//                             {props.kitchen} Kitchen
//                           </div>
//                         </div>

//                         <div className="facilities1 row pb-4">
//                           <div className="col-md-5 mx-auto">
//                             <span className="pr-2">
//                               <FaBath />
//                             </span>
//                             {props.bath} Bathroom
//                           </div>
//                           <div className="col-md-5 mx-auto">
//                             <span className="pr-2">
//                               <FaPhoneAlt />
//                             </span>
//                             {props.contact} 9865231457
//                           </div>
//                         </div>
//                         {/* feature end */}
//                         <NavLink
//                           type="button"
//                           className="btn btn-lg btn-block shadow mt-3 viewdetails"
//                           to="#"
//                         >
//                           View Details
//                         </NavLink>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </>
//     </IconContext.Provider>
//   );
// }
