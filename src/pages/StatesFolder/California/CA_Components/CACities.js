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
    <CACitiesExports.SanBernardino key={"san bernardino"} />,
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
    <CACitiesExports.Sacramento key={"sacramento"} />,
    <CACitiesExports.Dublin key={"dublin"} />,
    <CACitiesExports.Fremont key={"fremont"} />,
    <CACitiesExports.Saratoga key={"saratoga"} />,
    <CACitiesExports.LosGatos key={"losgatos"} />,
    <CACitiesExports.Hanford key={"hanford"} />,
    <CACitiesExports.Fontana key={"fontana"} />,
    <CACitiesExports.Victorville key={'victorville'} />,
    <CACitiesExports.Rialto key={'rialto'} />,
    <CACitiesExports.Oxnard key={'oxnard'} />,
    <CACitiesExports.Oceanside key={'oceanside'} />,
    <CACitiesExports.PalmSprings key={'palmsprings'} />,
    <CACitiesExports.Indio key={'indio'} />,
    <CACitiesExports.PalmDesert key={'palmdesert'} />,
    <CACitiesExports.Coachella key={'coachella'} />,
    <CACitiesExports.OrangeGrove key={'orangegrove'} />,
    <CACitiesExports.Menifee key={'menifee'} />,
    <CACitiesExports.Vernon key={'vernon'} />,
    <CACitiesExports.Sunnyvale key={'sunnyvale'} />,
    <CACitiesExports.Colton key={'colton'} />,
    <CACitiesExports.Redlands key={'redlands'} />,
    <CACitiesExports.Stockton key={'stockton'} />,
    <CACitiesExports.Livermore key={'livermore'} />,
    <CACitiesExports.ChinoHills key={'chinohills'} />,
    <CACitiesExports.Cupertino key={'cupertino'} />,
    <CACitiesExports.Modesto key={'modesto'} />,
    <CACitiesExports.SanDiego key={'sandiego'} />,
    <CACitiesExports.Chico key={'chico'} />,
    <CACitiesExports.Visalia key={'visalia'} />,
    <CACitiesExports.Encinitas key={'encinitas'} />,
    <CACitiesExports.Roseville key={'roseville'} />,
    <CACitiesExports.RanchoCucamonga key={'ranchocucamonga'} />,
    <CACitiesExports.Redwood key={'redwood'} />,
    <CACitiesExports.SanMateo key={'sanmateo'} />,
    <CACitiesExports.CathedralCity key={'cathedralcity'} />,
    <CACitiesExports.Oakland key={'oakland'} />,
    <CACitiesExports.Brea key={'brea'} />,
    <CACitiesExports.ElkGrove key={'elkgrove'} />,
    <CACitiesExports.SanLeandro key={'sanleandro'} />,
    <CACitiesExports.LosAltos key={'LosAltos'} />,
    <CACitiesExports.Escondido key={'Escondido'} />,
    <CACitiesExports.ThousandOaks key={'thousandoaks'} />,
    <CACitiesExports.SanLuisObispo key={'sanluisobispo'} />,
    <CACitiesExports.Milpitas key={'Milpitas'} />,
    <CACitiesExports.Downey key={'Downey'} />,
    <CACitiesExports.RedondoBeach key={'RedondoBeach'} />,
    <CACitiesExports.SantaBarbara key={'SantaBarbara'} />,
    <CACitiesExports.Coronado key={'Coronado'} />,
    <CACitiesExports.Pomona key={'Pomona'} />,
    <CACitiesExports.Woodland key={'Woodland'} />,
    <CACitiesExports.Vallejo key={'Vallejo'} />,
    <CACitiesExports.Orange key={'Orange'} />,
    <CACitiesExports.SantaClara key={'SantaClara'} />,
    <CACitiesExports.Richmond key={'Richmond'} />,
    <CACitiesExports.Barstow key={'Barstow'} />,
    <CACitiesExports.Montclair key={'Montclair'} />,
    <CACitiesExports.SanMarcos key={'SanMarcos'} />,
    <CACitiesExports.SanFrancisco key={'SanFrancisco'} />,
    <CACitiesExports.RedBluff key={'RedBluff'} />,
    <CACitiesExports.ElSegundo key={'ElSegundo'} />,
    <CACitiesExports.SouthSanFrancisco key={'South San Francisco'} />,
    

  ];

  return (
    <>
      <div className="city-title">
        <h2 className="title">California Cities</h2>
      </div>
      <div className="cities">
        {cacities.sort((a, b) => {
          return a.key.localeCompare(b.key);
        })}
      </div>
    </>
  );
}
