import React from 'react'

function Pasadena() {
    return (
        <div className='city-dropdown'>
            <button className='city-dropbtn'>Pasadena</button>
            <div className='city-dropdown-content'>
                <a href='https://drive.google.com/drive/folders/18Vw5RL-pgl_Ykq9_sQ4xllEVdrmGNaho' target={'_blank'} rel='noreferrer'>Benchmarks</a>
                <a href='https://pasadenasewercl.azurewebsites.net/public' target={'_blank'} rel='noreferrer'>Centerline Ties</a>
                <a href='https://www.arcgis.com/apps/Embed/index.html?webmap=2c3295b27e0649a181db3512bf0940d4&extent=-118.1904,34.1223,-118.0637,34.1933&zoom=true&previewImage=false&scale=false&search=true&searchextent=true&details=true&legend=true&active_panel=details&disable_scroll=true&theme=light' target={'_blank'} rel='noreferrer'>GIS (Zoning)</a>
                <a href='https://library.municode.com/ca/pasadena/codes/code_of_ordinances?nodeId=TIT17ZOCO' target={'_blank'} rel='noreferrer'>Municipal Code</a>
            </div>
        </div>
    )
}

export default Pasadena
