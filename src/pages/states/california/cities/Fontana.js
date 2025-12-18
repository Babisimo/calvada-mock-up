import React from 'react'

function Fontana() {
    return (
        <div className='city-dropdown'>
            <button className='city-dropbtn'>Fontana</button>
            <div className='city-dropdown-content'>
                <a href='https://data-fontanaca.opendata.arcgis.com/maps/FontanaCA::city-of-fontana-control-points/about' target={'_blank'} rel='noreferrer'>Benchmarks & Centerline Ties GIS</a>
                <a href='https://fonopengislayers.fontana.org/WebLink/Browse.aspx?id=584735&dbid=0&repo=FontanaRecords&cr=1' target={'_blank'} rel='noreferrer'>Centerline Ties & Corner Records Data Sheets</a>
                <a href='https://www.fontanaca.gov/854/Zoning-General-Plan-Information-Maps' target={'_blank'} rel='noreferrer'>Zoning</a>
                <a href='https://library.municode.com/ca/fontana/codes/zoning_and_development_code?nodeId=CH30ZODECO_ARTIVZODI' target={'_blank'} rel='noreferrer'>Municipal Code</a>
                <a href='https://data.fontanaca.gov/' target={'_blank'} rel='noreferrer'>Open Data Portal</a>
            </div>
        </div>

    )
}

export default Fontana
