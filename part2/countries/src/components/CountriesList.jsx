import React from "react";
import Country from "./Country";

const CountriesList = ({ countries, handleShowCountry, showCountry }) => {
  return (
    <div>
      {countries.map((country) => (
        <div key={country.name.common}>
          {country.name.common}{" "}
          <button onClick={handleShowCountry}>
            {showCountry ? "hide" : "show"}
          </button>
          {showCountry && <Country countryInfo={country} />}
        </div>
      ))}
    </div>
  );
};

export default CountriesList;
