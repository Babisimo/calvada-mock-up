import React from 'react'

function Roseville() {
    return (
        <div className='city-dropdown'>
            <button className='city-dropbtn'>Roseville</button>
            <div className='city-dropdown-content'>
                <a href='https://data-roseville.opendata.arcgis.com/documents/12e87c5371a642fba1d05a780353eec5/explore' target={'_blank'} rel='noreferrer'>Benchmark Map</a>
                <a href='https://cdnsm5-hosted.civiclive.com/UserFiles/Servers/Server_7964838/File/Government/Departments/Development%20Services/Engineering/Benchmarks%20NAVD%2088.pdf' target={'_blank'} rel='noreferrer'>BM Description</a>
                <a href='https://data-roseville.opendata.arcgis.com/' target={'_blank'} rel='noreferrer'>Additional GIS Data</a>
            </div>
        </div>
    )
}

export default Roseville
