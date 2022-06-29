import React from "react"

export default function Home() {
    return (
        <div>
            <h1 className="title">Home</h1>
            <div className="links">
                <h2>Links</h2>
                <a href="https://msc.fema.gov/portal/home" target={"_blank"}><img alt="FEMA" src={require("../imgs/fema-logo-main.png")} width="150px"></img></a>
                <a href="https://www.ngs.noaa.gov/cgi-bin/ds_radius.prl" target={"_blank"}><img alt="BY POINT RADIUS" src={require("../imgs/NGSbut.png")} width="60px"></img></a>
                <a href="https://www.ngdc.noaa.gov/geomag/calculators/magcalc.shtml" target={"_blank"}><img alt="NOAA" src={require("../imgs/nesdisngdcleft.png")}></img></a>
                <a href="https://www.earthpoint.us/Townships.aspx" target={"_blank"}>Township and Range - Public Land Survey System</a>
                <a href="https://glorecords.blm.gov/search/default.aspx" target={"_blank"}><img alt="BEREAU" src={require("../imgs/blm_banner_home_abbreviated.png")}></img></a>
                <a href="https://dna.firstam.com/property-research" target={"_blank"}><img alt="DATATREE" src={require("../imgs/logo-FADNA@2x.png")}></img></a>
            </div>
        </div>
    )
}