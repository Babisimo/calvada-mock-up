import React from 'react'

function Fresno() {
    return (
        <div className='city-dropdown'>
            <button className='city-dropbtn'>Fresno</button>
            <div className='city-dropdown-content'>
                <a href='https://www.fresno.gov/publicworks/developer-doorway/#tab-7' target={'_blank'} rel='noreferrer'>Benchmarks</a>
                <a href='https://cityoffresno.maps.arcgis.com/apps/webappviewer/index.html?id=f744a29c7b904319917194fd412ebb8b' target={'_blank'} rel='noreferrer'>GIS (Zoning)</a>
                <a href='https://library.municode.com/ca/fresno/codes/code_of_ordinances' target={'_blank'} rel='noreferrer'>Municipal Code</a>
            </div>
        </div>
    )
}

export default Fresno
