import React from "react";

export default function Torrance() {
    return(
        <div className="dropdown">
            <button className="dropbtn">Torrance</button>
            <div className="dropdown-content">
                <a href="https://torranceca.maps.arcgis.com/apps/webappviewer/index.html?id=7ce1fe3785494843975452d576468d1d" target={'_blank'} rel='noreferrer'>Centerline Ties and Benchmarks</a>
                <a href="https://torranceca.maps.arcgis.com/apps/webappviewer/index.html?id=cd0f0cc0b22a4fa0af313a9799666986" target={'_blank'} rel='noreferrer'>Zoning Map</a>
                <a href="https://www.codepublishing.com/CA/Torrance/#!/Torrance09/Torrance09.html" target={'_blank'} rel='noreferrer'>Municipal Code</a>
            </div>
        </div>
    )
};
