import React from 'react'

function Carlsbad() {
    return (
        <div className='city-dropdown'>
            <button className='city-dropbtn'>Carlsbad</button>
            <div className='city-dropdown-content'>
                <a href='https://www.carlsbadca.gov/departments/online-services' target={'_blank'} rel='noreferrer'>Online Services (City Records)</a>
                <a href='https://www.carlsbadca.gov/departments/utilities' target={'_blank'} rel='noreferrer'>Utilities</a>
                <a href='https://www.carlsbadca.gov/home/showpublisheddocument/246/637638645128870000' target={'_blank'} rel='noreferrer'>Zoning Map</a>
                <a href='https://ecode360.com/CA4913' target={'_blank'} rel='noreferrer'>Municipal Code</a>
            </div>
        </div>
    )
}

export default Carlsbad
