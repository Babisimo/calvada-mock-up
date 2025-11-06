import React from 'react'

export default function Anaheim() {
    return (
        <div className='city-dropdown'>
            <button className='city-dropbtn'>Anaheim</button>
            <div className='city-dropdown-content'>
                <a href='https://gis.anaheim.net/portal/apps/webappviewer/index.html?id=e1e1ec14535146f692dfe832391c92ec' target={'_blank'} rel='noreferrer'>Benchmarks</a>
                <a href='https://gis.anaheim.net/portal/home/' target={'_blank'} rel='noreferrer'>Centerline Ties</a>
                <a href='https://gis.anaheim.net/portal/home/' target={'_blank'} rel='noreferrer'>GIS (Zoning)</a>
                <a href='http://gis.anaheim.net/ParcelInfo/Default.aspx' target={'_blank'} rel='noreferrer'>Zoning</a>
            </div>
        </div>
    )
}
