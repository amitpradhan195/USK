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
  window.addEventListener('load', AOS.refresh);


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
      <section className="filter-section pt-2">
        <div className="container">
          <div className="row">
            <form className="col-md-4">
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <label className="input-group-text" htmlFor="inputGroupSelect01">Purpose</label>
              </div>
              <select className="custom-select" style={{backgroundColor:'#F8F9F9', borderColor:'#EAECEE'}} defaultValue="All" name="purpose" onChange={onPurposeChange}>
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

            <div className="col-md-5" >
              <nav className="listingsNavTab">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <a className="nav-link active text-dark" id="all-tab" data-bs-toggle="tab" role="tab" aria-controls="all" aria-selected="true" onClick={onPropertyTypeChange('All')} href="#all">
                      All
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a className="nav-link text-dark" id="land-tab" data-bs-toggle="tab" role="tab" aria-controls="land" aria-selected="false" onClick={onPropertyTypeChange('Land')} href="#land">
                      Land
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a className="nav-link text-dark" id="flat-tab" data-bs-toggle="tab" role="tab" aria-controls="flat" aria-selected="false" onClick={onPropertyTypeChange('Flat')} href="#flat">
                      Flat
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a className="nav-link text-dark" id="building-tab" data-bs-toggle="tab" role="tab" aria-controls="building" aria-selected="false" onClick={onPropertyTypeChange('Building')} href="#building">
                      Building
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a className="nav-link text-dark" id="commercial-tab" data-bs-toggle="tab" role="tab" aria-controls="commercial" aria-selected="false" onClick={onPropertyTypeChange('Commercial')} href="#commercial">
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
      <div className="container-fluid pb-5 about-myjob pt-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-5">
              {selectPurpose==="All" && selectPropertyType==="All" ? 
              CData.map((value, index, arr) => {
                  console.log("value : "+value)
                  return arr &&  
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
            }): (selectPurpose==="All" || selectPropertyType==="All"? 
              CData.filter(filteredData => filteredData.tag===selectPurpose || filteredData.propertyType===selectPropertyType)
              .map((value, index, arr) => {
                console.log("value : "+value)
                return arr.length  >= 1 &&
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
              }):
              CData.filter(filteredData => filteredData.tag===selectPurpose && filteredData.propertyType===selectPropertyType)
                .map((value, index, arr) => {
                  console.log("value : "+value)
                  return arr.length >= 1 && 
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
              }))}
                <h2>No results found</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
