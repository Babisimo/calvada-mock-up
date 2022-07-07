import React from "react";

export default function Links() {
    return (
        <div className="links">
            <h2>Links</h2>
            <a href="https://msc.fema.gov/portal/home" target={"_blank"} rel="noreferrer"><img alt="FEMA" src={require("../../imgs/fema.png")} width="150px"></img></a>
            <a href="https://www.ngs.noaa.gov/cgi-bin/ds_radius.prl" target={"_blank"} rel="noreferrer"><img alt="BY POINT RADIUS" src={require("../../imgs/NGSbut.png")} width="60px"></img></a>
            <a href="https://www.ngdc.noaa.gov/geomag/calculators/magcalc.shtml" target={"_blank"} rel="noreferrer"><img alt="NOAA" src={require("../../imgs/nesdisngdcleft.png")}></img></a>
            <a href="https://www.earthpoint.us/Townships.aspx" target={"_blank"} rel="noreferrer">Township and Range - Public Land Survey System</a>
            <a href="https://glorecords.blm.gov/search/default.aspx" target={"_blank"} rel="noreferrer"><img alt="BEREAU" src={require("../../imgs/blm_banner_home_abbreviated.png")}></img></a>
            <a href="https://dna.firstam.com/property-research" target={"_blank"} rel="noreferrer"><img alt="DATATREE" src={require("../../imgs/logo-FADNA@2x.png")}></img></a>
            <a href="https://www.courthousedirect.com/" target={"_blank"} rel="noreferrer"><img alt="Courthouse Direct" src={require("../../imgs/courthouse_direct_logo.png")} width="180px"></img></a>
            <a href="https://camapsource.com/" target={"_blank"} rel="noreferrer"><img alt="Courthouse Direct" src={require("../../imgs/CA-Map-Source_Logo-Small-PNG.png")} width="280px"></img></a>
        </div>
    )
}