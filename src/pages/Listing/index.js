import React, { useEffect, useState } from "react";
import "../../css/style.css";
import CData from "../../data/Listings";
import Card from "../../components/Card";
import AOS from "aos";

export default function Listing() {
  const [selectPurpose, setSelectPurpose] = useState('All');
  const [selectPropertyType, setSelectPropertyType] = useState('All');

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

      </section>
      {/* filter section */}
      <section className="filter-section pt-4">
        <div className="container">
          <div className="row">
            <form className="col-md-4">
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <label className="input-group-text" htmlFor="inputGroupSelect01">Purpose</label>
              </div>
              <select className="custom-select w-50" style={{backgroundColor:'#F8F9F9', borderColor:'#EAECEE'}} defaultValue="Select" name="purpose" onChange={onPurposeChange}>
                <option value="Select" disabled>
                  Select 
                </option>
                <option value="All">
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
            <div className="col-md-8" >
              <nav className="stroke">
                <ul className="nav nav-tabs">
                  <li className="nav-item bg-light">
                    
                  </li>
                  <li className="nav-item bg-light">
                    <a className="nav-link active bg-light text-dark" onClick={onPropertyTypeChange('All')} href="#all">
                      All
                    </a>
                  </li>
                  <li className="nav-item bg-light">
                    <a className="nav-link bg-light text-dark" onClick={onPropertyTypeChange('Land')} href="#land">
                      Land
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link bg-light text-dark" onClick={onPropertyTypeChange('Flat')} href="#flat">
                      Flat
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link bg-light text-dark" onClick={onPropertyTypeChange('Building')} href="#building">
                      Building
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link bg-light text-dark" onClick={onPropertyTypeChange('Commercial')} href="#commercial">
                      Commercial
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>
      {/* prop listings */}
      <div className="container-fluid pb-5 about-myjob pt-2">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-5">
              {selectPurpose==="All" && selectPropertyType==="All" ? 
              CData.map((value, index) => {
                return (
                  <Card
                    key={index}
                    id={value.id}
                    imgsrc={value.imgsrc}
                    tag={value.tag}
                    css={value.css}
                    prop={value.prop}
                    location={value.location}
                    bed={value.bed}
                    kitchen={value.kitchen}
                    bath={value.bath}
                    contact={value.contact}
                    parking={value.parking}
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
