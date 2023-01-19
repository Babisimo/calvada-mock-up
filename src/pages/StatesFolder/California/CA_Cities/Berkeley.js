import React from 'react'

function Berkeley() {
    return (
        <div className='city-dropdown'>
            <button className='city-dropbtn'>Berkeley</button>
            <div className='city-dropdown-content'>
                <a href='https://berkeleyca.gov/city-services/streets-sidewalks-sewers-and-utilities/utility-services' target={'_blank'} rel='noreferrer'>Utilities</a>
                <a href='https://gis2.cityofberkeley.info/?config=config_PlanningandProperty.json' target={'_blank'} rel='noreferrer'>GIS (Zoning)</a>
                <a href='https://berkeleyca.gov/construction-development/land-use-development/zoning-lookup' target={'_blank'} rel='noreferrer'>Zoning Map</a>
            </div>
        </div>
    )
}

export default Berkeley
