import React, { useState } from "react";
import style from "./FuelDisplay.module.css";
const FuelDisplay = () => {
  const [selectedCity, setselectedCity] = useState("");
  const [selectedType, setselectedType] = useState("");
  const handleSubmit = () => {
    
  };
  const cities = ["Noida", "Delhi", "Kanpur"];
  const fuelType = ["Petrol", "Diesel", "CNG"];
  return (
    <>
      <div className={`${style.mainContainer} container`}>
        <h1>Fuel Price Display</h1>
        <form className={`${style.formContainer} d-flex flex-column`}>
          <div className="d-flex col-md-6">
            <label>Select City: </label>
            <select
              className={`col-md-6`}
              value={selectedCity}
              onChange={(e) => setselectedCity(e.target.value)}
            >
              {cities.map((item, index) => (
                <option value={item} key={`${index}_city`}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <select
            className={`col-md-6`}
            value={selectedType}
            onChange={(e) => setselectedType(e.target.value)}
          >
            {fuelType.map((item, index) => (
              <option value={item} key={`${index}_type`}>
                {item}
              </option>
            ))}
          </select>
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default FuelDisplay;
