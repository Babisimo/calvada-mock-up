import React from "react";

export default function Victorville() {
    return(
        <div className="city-dropdown">
            <button className="city-dropbtn">Victorville</button>
            <div className="city-dropdown-content">
                <a href="https://data.victorvilleca.gov/datasets/3d1fbc3861ef45df819af4626eee5824/explore" target={'_blank'} rel='noreferrer'>Benchmarks GIS</a>
                <a href="https://www.victorvilleca.gov/home/showpublisheddocument/1511/636712133124270000" target={'_blank'} rel='noreferrer'>Benchmarks PDF Map</a>
                <a href="https://www.victorvilleca.gov/home/showpublisheddocument/1525/636712133134730000" target={'_blank'} rel='noreferrer'>Benchmarks PDF List</a>
            </div>
        </div>
    )
};
