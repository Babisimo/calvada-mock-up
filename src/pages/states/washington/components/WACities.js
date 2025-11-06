import React from "react";

// Import California Cities from CACitiesExports
import * as WACitiesExports from "./WACitiesExports";

export default function WACities() {
  // Needs key!
  let wacities = [
    <WACitiesExports.Auborn key={'Auborn'} />,
  ];

  return (
    <>
      <div className="city-title">
        <h2 className="title">Washingon Cities</h2>
      </div>
      <div className="cities">
        {wacities.sort((a, b) => {
          return a.key.localeCompare(b.key);
        })}
      </div>
    </>
  );
}
