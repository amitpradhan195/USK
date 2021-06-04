import React, { useState } from "react";
import FormUserDetails from "./FormUserDetails";
import FormHouseType from "./FormHouseType";
import FormFacility from "./FormFacility";
import FormAdditionalInfo from "./FormAdditionalInfo";
import FormCityAndArea from "./FormCityAndArea";
import FormConfirmation from "./FormConfirmation";

export default function DreamHouse() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    houseType: "",
    location: "",
    area: "",
    bedroom: "",
    kitchen: "",
    bathroom: "",
    bikeParking: false,
    carParking: false,
    addInfo: "",
    budget: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    });
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  switch (step) {
    case 1:
      return (
        <FormUserDetails
          formData={formData}
          nextStep={nextStep}
          handleChange={handleChange}
        />
      );
    case 2:
      return (
        <FormHouseType
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
        />
      );
    case 3:
      return (
        <FormCityAndArea
          formData={formData}
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
        />
      );
    case 4:
      return (
        <FormFacility
          formData={formData}
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
        />
      );
    case 5:
      return (
        <FormAdditionalInfo
          formData={formData}
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
        />
      );
    case 6:
      return (
        <FormConfirmation
          formData={formData}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      );
    default:
      break;
  }
}
