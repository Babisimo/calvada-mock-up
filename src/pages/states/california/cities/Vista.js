import React from "react";

export default function Vista() {
    return(
        <div className="city-dropdown">
            <button className="city-dropbtn">Vista</button>
            <div className="city-dropdown-content">
                <a href="https://www.vista.gov/departments/gis-city-maps/gis-pdf-maps/benchmark-atlas" target={'_blank'} rel='noreferrer'>Benchmarks PDF</a>
                <a href="https://public-cityofvista.hub.arcgis.com/" target={'_blank'} rel='noreferrer'>Map Gallery (Utilities, Zoning, & More)</a>
            </div>
        </div>
    )
};
