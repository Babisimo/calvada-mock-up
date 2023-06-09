import React from 'react'

function Berkeley() {
    return (
        <div className='city-dropdown'>
            <button className='city-dropbtn'>Berkeley</button>
            <div className='city-dropdown-content'>
                <a href='https://berkeleyca.gov/city-services/streets-sidewalks-sewers-and-utilities/utility-services' target={'_blank'} rel='noreferrer'>Utilities</a>
                <a href='https://www.arcgis.com/apps/webappviewer/index.html?id=2c7dfafbb1f64e159f4fdf28a52f51c6&showLayers=Berkeley%20Parcels;Planning%20and%20Building' target={'_blank'} rel='noreferrer'>GIS (Zoning)</a>
                <a href='https://berkeleyca.gov/construction-development/land-use-development/zoning-lookup' target={'_blank'} rel='noreferrer'>Zoning Map</a>
            </div>
        </div>
    )
}

export default Berkeley
