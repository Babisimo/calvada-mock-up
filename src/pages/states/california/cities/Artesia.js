import React from 'react'

function Artesia() {
    return (
        <div className='city-dropdown'>
            <button className='city-dropbtn'>Artesia</button>
            <div className='city-dropdown-content'>
                <a href='https://www.cityofartesia.us/112/Planning-Zoning' target={'_blank'} rel='noreferrer'>Zoning Map</a>
                <a href='https://library.qcode.us/lib/artesia_ca/pub/municipal_code' target={'_blank'} rel='noreferrer'>Municipal Code</a>
            </div>
        </div>
    )
}

export default Artesia
