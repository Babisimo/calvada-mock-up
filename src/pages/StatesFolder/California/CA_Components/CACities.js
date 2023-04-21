import React from "react";

// Import California Cities from CACitiesExports
import * as CACitiesExports from "./CACitiesExports";

export default function CACities() {
  // Needs key!
  let cacities = [
    <CACitiesExports.Adelanto key={"adelanto"} />,
    <CACitiesExports.Anaheim key={"anaheim"} />,
    <CACitiesExports.AlisoViejo key={"alisoviejo"} />,
    <CACitiesExports.AppleValley key={"applevalley"} />,
    <CACitiesExports.Artesia key={"artesia"} />,
    <CACitiesExports.Azusa key={"azusa"} />,
    <CACitiesExports.Bakersfield key={"bakersfield"} />,
    <CACitiesExports.Beaumont key={"beaumont"} />,
    <CACitiesExports.Berkeley key={"berkeley"} />,
    <CACitiesExports.BeverlyHills key={"beverlyhills"} />,
    <CACitiesExports.Camarillo key={"camarillo"} />,
    <CACitiesExports.Carlsbad key={"carlsbad"} />,
    <CACitiesExports.Carson key={"carson"} />,
    <CACitiesExports.ChulaVista key={"chulavista"} />,
    <CACitiesExports.Corona key={"corona"} />,
    <CACitiesExports.Glendale key={"glendale"} />,
    <CACitiesExports.HunBeach key={"hunbeach"} />,
    <CACitiesExports.LosAngeles key={"la"} />,
    <CACitiesExports.LongBeach key={"longbeach"} />,
    <CACitiesExports.Ontario key={"ontario"} />,
    <CACitiesExports.Pasadena key={"pasadena"} />,
    <CACitiesExports.Riverside key={"riverside"} />,
    <CACitiesExports.SantaMonica key={"santamonica"} />,
    <CACitiesExports.Temecula key={"temecula"} />,
    <CACitiesExports.Torrance key={"torrance"} />,
    <CACitiesExports.Burbank key={"burbank"} />,
    <CACitiesExports.SanBernardino key={"san bernardinio"} />,
    <CACitiesExports.SanJose key={"san jose"} />,
    <CACitiesExports.Fresno key={"fresno"} />,
    <CACitiesExports.LakeElsinore key={"lake elsinore"} />,
    <CACitiesExports.Irvine key={"irvine"} />,
    <CACitiesExports.Fullerton key={"fullerton"} />,
    <CACitiesExports.ElCajon key={"elcajon"} />,
    <CACitiesExports.CulverCity key={"culvercity"} />,
    <CACitiesExports.MenloPark key={"menlopark"} />,
    <CACitiesExports.SanCarlos key={"sancarlos"} />,
    <CACitiesExports.SignalHill key={"signalhill"} />,

    
  ];

  return (
    <>
      <div className="city-title">
        <h2>California Cities</h2>
      </div>
      <div className="cities">
        {cacities.sort((a, b) => {
          return a.key.localeCompare(b.key);
        })}
      </div>
    </>
  );
}
