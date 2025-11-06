import React from 'react'

function Beaumont() {
    return (
        <div className='city-dropdown'>
            <button className='city-dropbtn'>Beaumont</button>
            <div className='city-dropdown-content'>
                <a href='https://www.beaumontca.gov/983/GIS' target={'_blank'} rel='noreferrer'>GIS (Zoning)</a>
                <a href='https://library.municode.com/ca/beaumont/codes/code_of_ordinances' target={'_blank'} rel='noreferrer'>Municipal Code</a>
            </div>
        </div>
    )
}

export default Beaumont
