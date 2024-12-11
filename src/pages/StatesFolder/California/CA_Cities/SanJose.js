import React from 'react'

function SanJose() {
    return (
        <div className='city-dropdown'>
            <button className='city-dropbtn'>San Jose</button>
            <div className='city-dropdown-content'>
                <a href='https://gis.sanjoseca.gov/maps/surveybenchmarks/?view=desktop' target={'_blank'} rel='noreferrer'>Benchmarks</a>
                <a href='https://www.arcgis.com/apps/webappviewer/index.html?id=6f379e130e9a43ab9dee28806ed2c885&extent=-13574341.156%2C4480904.8205%2C-13559818.1207%2C4490039.0454%2C102100' target={'_blank'} rel='noreferrer'>GIS (Zoning)</a>
                <a href='https://library.municode.com/ca/san_jose/codes/code_of_ordinances?nodeId=TIT20ZO' target={'_blank'} rel='noreferrer'>Municipal Code</a>
            </div>
        </div>
    )
}

export default SanJose
