import React from "react";

export default function Ventura() {
    return(
        <div className="city-dropdown">
            <button className="city-dropbtn">Ventura</button>
            <div className="city-dropdown-content">
                <a href="https://www.cityofventura.ca.gov/1435/Legacy-Tie-Sheets" target={'_blank'} rel='noreferrer'>Tie Sheets</a>
                <a href="https://map.cityofventura.net/java/map/?config=survey" target={'_blank'} rel='noreferrer'>CL Ties & Benchmarks</a>
            </div>
        </div>
    )
};
