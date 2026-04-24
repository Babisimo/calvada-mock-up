import React from "react";
import CityDropdown from "./CityDropdown";
import californiaCities from "../data/california_cities.json";

export default function CACities() {
  return (
    <>
      <div className="city-title">
        <h2 className="title">California Cities</h2>
      </div>
      <div className="cities">
        {californiaCities && Array.isArray(californiaCities) && californiaCities
          .sort((a, b) => a.id.localeCompare(b.id))
          .map(city => (
            <CityDropdown key={city.id} name={city.name} links={city.links} />
          ))
        }
      </div>
    </>
  );
}
