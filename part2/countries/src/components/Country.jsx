import React from "react";

const Country = ({ countryInfo }) => {
  return (
    <div>
      <h1>{countryInfo.name.common}</h1>
      <p>Capital {countryInfo.capital[0]}</p>
      <p>Area {countryInfo.area}</p>
      <h2>Languages</h2>
      <ul>
        {Object.values(countryInfo.languages).map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <img
        src={countryInfo.flags.png}
        alt={countryInfo.flags.alt}
      />
      <br />
    </div>
  );
};

export default Country;
