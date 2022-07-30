import React from 'react'

function Artesia() {
    return (
        <div className='dropdown'>
            <button className='dropbtn'>Artesia</button>
            <div className='dropdown-content'>
                <a href='https://www.cityofartesia.us/112/Planning-Zoning' target={'_blank'} rel='noreferrer'>Zoning Map</a>
                <a href='https://library.qcode.us/lib/artesia_ca/pub/municipal_code' target={'_blank'} rel='noreferrer'>Municipal Code</a>
            </div>
        </div>
    )
}

export default Artesia
