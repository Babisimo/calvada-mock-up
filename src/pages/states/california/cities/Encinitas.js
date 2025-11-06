import React from 'react'

function Encinitas() {
    return (
        <div className='city-dropdown'>
            <button className='city-dropbtn'>Encinitas</button>
            <div className='city-dropdown-content'>
                <a href='https://monumentviewer.encinitasca.gov/' target={'_blank'} rel='noreferrer'>Benchmarks GIS</a>
                <a href='https://www.encinitasca.gov/home/showpublisheddocument/3456/638039416656100000' target={'_blank'} rel='noreferrer'>Benchmark Datasheets (Updated)</a>
                <a href='https://landrecords.encinitasca.gov/' target={'_blank'} rel='noreferrer'>Land Records (Free GIS)</a>
                <a href='https://www.encinitasca.gov/government/departments/city-manager/information-technology/it-applications/geographic-information-systems/gis-city-maps' target={'_blank'} rel='noreferrer'>GIS City Maps (Zoning, etc.)</a>
            </div>
        </div>

    )
}

export default Encinitas
