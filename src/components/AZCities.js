import React from "react";
import CityDropdown from "./CityDropdown";
import arizonaCities from "../data/arizona_cities.json";

export default function AZCities() {
  return (
    <>
      <div className="city-title">
        <h2 className="title">Arizona Cities</h2>
      </div>
      <div className="cities">
        {arizonaCities && Array.isArray(arizonaCities) && arizonaCities
          .sort((a, b) => a.id.localeCompare(b.id))
          .map(city => (
            <CityDropdown key={city.id} name={city.name} links={city.links} />
          ))
        }
      </div>
    </>
  );
}
