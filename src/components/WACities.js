import React from "react";
import CityDropdown from "./CityDropdown";
import washingtonCities from "../data/washington_cities.json";

export default function WACities() {
  return (
    <>
      <div className="city-title">
        <h1 className="title">Washington Cities</h1>
      </div>
      <div className="cities">
        {washingtonCities && Array.isArray(washingtonCities) && washingtonCities
          .sort((a, b) => a.id.localeCompare(b.id))
          .map(city => (
            <CityDropdown key={city.id} name={city.name} links={city.links} />
          ))
        }
      </div>
    </>
  );
}
