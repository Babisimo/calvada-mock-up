import React from 'react'

function Camarillo() {
    return (
        <div className='city-dropdown'>
            <button className='city-dropbtn'>Camarillo</button>
            <div className='city-dropdown-content'>
                <a href='https://www.ci.camarillo.ca.us/residents/utility_customer_services/index.php' target={'_blank'} rel='noreferrer'>Utilities</a>
                <a href='https://cms7files.revize.com/camarilloca/Zoning_April25_22_24x52_wall.pdf' target={'_blank'} rel='noreferrer'>Zoning Map</a>
                <a href='https://library.municode.com/ca/camarillo/codes/code_of_ordinances?nodeId=TIT19ZO' target={'_blank'} rel='noreferrer'>Municipal Code</a>
            </div>
        </div>
    )
}

export default Camarillo
