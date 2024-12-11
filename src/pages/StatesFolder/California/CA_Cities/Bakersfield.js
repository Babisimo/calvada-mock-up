import React from 'react'

function Bakersfield() {
    return (
        <div className='city-dropdown'>
            <button className='city-dropbtn'>Bakersfield</button>
            <div className='city-dropdown-content'>
                <a href='https://cob.maps.arcgis.com/apps/webappviewer/index.html?id=9174f084addc450286ac067a56fdb83f' target={'_blank'} rel='noreferrer'>GIS (Zoning)</a>
                <a href='https://bakersfield.municipal.codes/Code/17' target={'_blank'} rel='noreferrer'>Municipal Code</a>
            </div>
        </div>
    )
}

export default Bakersfield
