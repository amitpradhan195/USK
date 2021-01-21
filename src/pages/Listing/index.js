import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../../css/style.css";
import CData from "../../data/Listings";
import Card from "../../components/Card";
import AOS from "aos";

export default function Listing() {
  const [selectPurpose, setSelectPurpose] = useState('All');
  const [selectPropertyType, setSelectPropertyType] = useState('All');
  const [data, setData] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({
      duration: 1000,
      anchorPlacement: "top-bottom",
    });
  }, []);

  function onPurposeChange(e){
    setSelectPurpose(e.target.value);
    console.log(e.target.value);
  }

  const onPropertyTypeChange = (name) => (e) => {
    setSelectPropertyType(name);
    console.log(name);
  }

  return (
    <>
      <section className="details-banner">
        <div className="container col-10 text-light">
          {/* <h2 className="text-center">Property Listings</h2> */}
        </div>
      </section>
      {/* filter section */}
      <section className="filter-section pt-4">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row gy-5">
                <nav className="stroke">
                <ul className="nav">
                  <li className="nav-item bg-light">
                    <form className="form-inline">
                      <div className="form-group">
                        <select className="custom-select form-control text-center" name="purpose" onChange={onPurposeChange}>
                          {/* <option selected disabled>
                            Select &nabla;
                          </option> */}
                          <option selected value="All">
                            All
                          </option>
                          <option value="For Sale">
                            For Sale
                          </option>
                          <option value="For Rent">
                            For Rent
                          </option>
                        </select>
                      </div>
                    </form>
                  </li>
                  <li className="nav-item bg-light">
                    <NavLink className="nav-link bg-light text-dark" onClick={onPropertyTypeChange('All')} to="?land">
                      All
                    </NavLink>
                  </li>
                  <li className="nav-item bg-light">
                    <NavLink className="nav-link bg-light text-dark" onClick={onPropertyTypeChange('Land')} to="?land">
                      Land
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link bg-light text-dark" onClick={onPropertyTypeChange('Flat')} to="?flat">
                      Flat
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link bg-light text-dark" onClick={onPropertyTypeChange('Building')} to="?building">
                      Bulding
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link bg-light text-dark" onClick={onPropertyTypeChange('Commercial')} to="?commercial">
                      Commercial
                    </NavLink>
                  </li>
                </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* prop listings */}
      <div className="container-fluid pb-5 about-myjob pt-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-5">
              {selectPurpose==="All" && selectPropertyType==="All" ? 
              CData.map((value, index) => {
                return (
                  <Card
                    key={index}
                    imgsrc={value.imgsrc}
                    tag={value.tag}
                    css={value.css}
                    prop={value.prop}
                    location={value.location}
                    bed={value.bed}
                    kitchen={value.kitchen}
                    bath={value.bath}
                    contact={value.contact}
                  />
                );
            }): (selectPurpose==="All" || selectPropertyType==="All"? 
              CData.filter(filteredData => filteredData.tag===selectPurpose || filteredData.propertyType===selectPropertyType)
                .map((value, index) => {
                  return (
                    <Card
                      key={index}
                      imgsrc={value.imgsrc}
                      tag={value.tag}
                      css={value.css}
                      prop={value.prop}
                      location={value.location}
                      bed={value.bed}
                      kitchen={value.kitchen}
                      bath={value.bath}
                      contact={value.contact}
                    />
                  );
              }):
              CData.filter(filteredData => filteredData.tag===selectPurpose && filteredData.propertyType===selectPropertyType)
                .map((value, index) => {
                  return (
                    <Card
                      key={index}
                      imgsrc={value.imgsrc}
                      tag={value.tag}
                      css={value.css}
                      prop={value.prop}
                      location={value.location}
                      bed={value.bed}
                      kitchen={value.kitchen}
                      bath={value.bath}
                      contact={value.contact}
                    />
                  );
              })
              )
            }
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
