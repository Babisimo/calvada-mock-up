import React from 'react'

export default function Tucson() {
    return (
        <div className='city-dropdown'>
            <button className='city-dropbtn'>Tucson</button>
            <div className='city-dropdown-content'>
                <a href='https://maps-and-records.tucsonaz.gov/' target={'_blank'} rel='noreferrer'>Maps and Records</a>
                <a href='https://maps2.tucsonaz.gov/Html5Viewer/?viewer=maptucson' target={"_blank"} rel='noreferrer'>City of Tucson GIS</a>
            </div>
        </div>
    )
}

