import React from "react";
import CityDropdown from "./CityDropdown";
import nevadaCities from "../data/nevada_cities.json";

export default function NVCities() {
  return (
    <>
      <div className="city-title">
        <h1 className="title">Nevada Cities</h1>
      </div>
      <div className="cities">
        {nevadaCities && Array.isArray(nevadaCities) && nevadaCities
          .sort((a, b) => a.id.localeCompare(b.id))
          .map(city => (
            <CityDropdown key={city.id} name={city.name} links={city.links} />
          ))
        }
      </div>
    </>
  );
}
