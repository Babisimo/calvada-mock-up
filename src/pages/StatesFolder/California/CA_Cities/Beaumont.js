import React from 'react'

function Beaumont() {
    return (
        <div className='dropdown'>
            <button className='dropbtn'>Beaumont</button>
            <div className='dropdown-content'>
                <a href='https://www.beaumontca.gov/983/GIS' target={'_blank'} rel='noreferrer'>GIS (Zoning)</a>
                <a href='https://library.municode.com/ca/beaumont/codes/code_of_ordinances' target={'_blank'} rel='noreferrer'>Municipal Code</a>
            </div>
        </div>
    )
}

export default Beaumont
