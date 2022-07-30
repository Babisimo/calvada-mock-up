import React from 'react'

function Carlsbad() {
    return (
        <div className='dropdown'>
            <button className='dropbtn'>Carlsbad</button>
            <div className='dropdown-content'>
                <a href='https://www.carlsbadca.gov/departments/utilities' target={'_blank'} rel='noreferrer'>Utilities</a>
                <a href='https://www.carlsbadca.gov/home/showpublisheddocument/246/637638645128870000' target={'_blank'} rel='noreferrer'>Zoning Map</a>
                <a href='https://library.qcode.us/lib/carlsbad_ca/pub/municipal_code/item/title_21' target={'_blank'} rel='noreferrer'>Municipal Code</a>
            </div>
        </div>
    )
}

export default Carlsbad
