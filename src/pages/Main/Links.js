import React from "react";

export default function Links() {
    return (
        <div className="links">
            <h2>Links</h2>
            <a href="https://msc.fema.gov/portal/home" target={"_blank"} rel="noreferrer"><img alt="FEMA" src={require("C:/Users/gonda/Desktop/calvada-react/calvada-mock-up/src/imgs/fema-logo-main.png")} width="150px"></img></a>
            <a href="https://www.ngs.noaa.gov/cgi-bin/ds_radius.prl" target={"_blank"} rel="noreferrer"><img alt="BY POINT RADIUS" src={require("C:/Users/gonda/Desktop/calvada-react/calvada-mock-up/src/imgs/NGSbut.png")} width="60px"></img></a>
            <a href="https://www.ngdc.noaa.gov/geomag/calculators/magcalc.shtml" target={"_blank"} rel="noreferrer"><img alt="NOAA" src={require("C:/Users/gonda/Desktop/calvada-react/calvada-mock-up/src/imgs/nesdisngdcleft.png")}></img></a>
            <a href="https://www.earthpoint.us/Townships.aspx" target={"_blank"} rel="noreferrer">Township and Range - Public Land Survey System</a>
            <a href="https://glorecords.blm.gov/search/default.aspx" target={"_blank"} rel="noreferrer"><img alt="BEREAU" src={require("C:/Users/gonda/Desktop/calvada-react/calvada-mock-up/src/imgs/blm_banner_home_abbreviated.png")}></img></a>
            <a href="https://dna.firstam.com/property-research" target={"_blank"} rel="noreferrer"><img alt="DATATREE" src={require("C:/Users/gonda/Desktop/calvada-react/calvada-mock-up/src/imgs/logo-FADNA@2x.png")}></img></a>
        </div>
    )
}