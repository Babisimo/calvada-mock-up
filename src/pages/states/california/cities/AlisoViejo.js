import React from 'react'

function AlisoViejo() {
    return (
        <div className='city-dropdown'>
            <button className='city-dropbtn'>Aliso Viejo</button>
            <div className='city-dropdown-content'>
                <a href='https://alisoviejo.maps.arcgis.com/apps/webappviewer/index.html?id=5ed060c1092440b6922a6c0119ffbe27' target={'_blank'} rel='noreferrer'>Zoning Map</a>
                <a href='https://www.codepublishing.com/CA/AlisoViejo/' target={'_blank'} rel='noreferrer'>Municipal Code</a>
                <a href='https://avcity.org/BusinessDirectoryII.aspx?lngBusinessCategoryID=26' target={'_blank'} rel='noreferrer'>Utilities</a>
            </div>
        </div>
    )
}

export default AlisoViejo
