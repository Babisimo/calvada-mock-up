import React from 'react'

function Adelanto() {
    return (
        <div className='city-dropdown'>
            <button className='city-dropbtn'>Adelanto</button>
            <div className='city-dropdown-content'>
                <a href='https://www.ci.adelanto.ca.us/401/GIS-MAPS' target={'_blank'} rel='noreferrer'>Zoning Map</a>
                <a href='https://codelibrary.amlegal.com/codes/adelanto/latest/adelanto_ca/0-0-0-20747' target={'_blank'} rel='noreferrer'>Municipal Code</a>
            </div>
        </div>
    )
}

export default Adelanto
