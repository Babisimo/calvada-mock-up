import React from 'react'

function Azusa() {
    return (
        <div className='dropdown'>
            <button className='dropbtn'>Azusa</button>
            <div className='dropdown-content'>
                <a href='https://azusaca.gov/1892/City-Maps' target={'_blank'} rel='noreferrer'>Zoning & Parcels</a>
                <a href='https://library.municode.com/ca/azusa/codes/code_of_ordinances' target={'_blank'} rel='noreferrer'>Municipal Code</a>
            </div>
        </div>
    )
}

export default Azusa
