import React from 'react'

function HunBeach() {
    return (
        <div className='city-dropdown'>
            <button className='city-dropbtn'>Hun Beach</button>
            <div className='city-dropdown-content'>
                <a href='https://huntingtonbeach.maps.arcgis.com/apps/webappviewer/index.html?id=7ab822c02ded4940acd7e4593bba7cb7' target={'_blank'} rel='noreferrer'>GIS (Zoning)</a>
                <a href='https://library.qcode.us/lib/huntington_beach_ca/pub/municipal_code/item/zoning_code?view=expand' target={'_blank'} rel='noreferrer'>Municipal Code</a>
            </div>
        </div>
    )
}

export default HunBeach
