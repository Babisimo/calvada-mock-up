import React from 'react'

function Irvine() {
    return (
        <div className='city-dropdown'>
            <button className='city-dropbtn'>Irvine</button>
            <div className='city-dropdown-content'>
                <a href='https://cityofirvine.maps.arcgis.com/apps/webappviewer/index.html?id=0832eb1a39d64bd9a3d381a080dde8bd' target={'_blank'} rel='noreferrer'>Centerline Ties</a>
                <a href='https://cityofirvine.maps.arcgis.com/apps/webappviewer/index.html?id=f5a617a79fdf464fb3ad1474c439b930' target={'_blank'} rel='noreferrer'>Street Improvement Plans</a>
                <a href='https://gis.cityofirvine.org/onlineparcel/' target={'_blank'} rel='noreferrer'>GIS (Zoning)</a>
                <a href='https://library.municode.com/ca/irvine/codes/zoning?nodeId=ZOOR' target={'_blank'} rel='noreferrer'>Municipal Code</a>
                <a href='https://www.irwd.com/doing-business/gis-map-and-records' target={'_blank'} rel='noreferrer'>Irvine Ranch Water District</a>
               
            </div>
        </div>
    )
}

export default Irvine
