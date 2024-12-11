import React from 'react'

function ChulaVista() {
    return (
        <div className='city-dropdown'>
            <button className='city-dropbtn'>Chula Vista</button>
            <div className='city-dropdown-content'>
                <a href='https://gisweb.chulavistaca.gov/MapGallery/map.html?webmap=e7659337744d4111a6b1569daac0246c' target={'_blank'} rel='noreferrer'>GIS</a>
                <a href='https://gisweb.chulavistaca.gov/ZoneFinder/' target={'_blank'} rel='noreferrer'>eZoning</a>
                <a href='https://gisweb.chulavistaca.gov/mapgallery/map.html?webmap=936b5efd6fcc4585a1dde41ff7c7cd47' target={'_blank'} rel='noreferrer'>Zoning Map</a>
                <a href='https://chulavista.municipal.codes/CVMC/19' target={'_blank'} rel='noreferrer'>Municipal Code</a>
            </div>
        </div>
    )
}

export default ChulaVista
