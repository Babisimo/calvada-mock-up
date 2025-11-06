import React from "react";

// Import California Cities from CACitiesExports
import * as AZCitiesExports from "./AZCitiesExports";

export default function AZCities() {
  // Needs key!
  let azcities = [
    <AZCitiesExports.Tucson key={'Tucson'} />,
    <AZCitiesExports.Chandler key={'Chandler'} />,
  ];

  return (
    <>
      <div className="city-title">
        <h2 className="title">Arizona Cities</h2>
      </div>
      <div className="cities">
        {azcities.sort((a, b) => {
          return a.key.localeCompare(b.key);
        })}
      </div>
    </>
  );
}
