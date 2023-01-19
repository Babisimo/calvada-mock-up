import React from 'react'

function Anaheim() {
    return (
        <div className='city-dropdown'>
            <button className='city-dropbtn'>Anaheim</button>
            <div className='city-dropdown-content'>
                <a href='https://data-anaheim.opendata.arcgis.com/datasets/79ec6a37bb5641a3a3a67bb6661927f9/explore?location=33.833447%2C-117.863250%2C12.55' target={'_blank'} rel='noreferrer'>Benchmarks</a>
                <a href='https://gis.anaheim.net/portal/home/' target={'_blank'} rel='noreferrer'>GIS (Zoning)</a>
                <a href='http://gis.anaheim.net/ParcelInfo/Default.aspx' target={'_blank'} rel='noreferrer'>Zoning</a>
            </div>
        </div>
    )
}

export default Anaheim
