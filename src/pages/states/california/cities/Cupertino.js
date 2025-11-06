import React from 'react'

function Cupertino() {
    return (
        <div className='city-dropdown'>
            <button className='city-dropbtn'>Cupertino</button>
            <div className='city-dropdown-content'>
                <a href='https://gis-cupertino.opendata.arcgis.com/datasets/5423fc963da6411ea4ed471141b37676/explore' target={'_blank'} rel='noreferrer'>Benchmarks</a>
                <a href='https://gis.cupertino.org/propertyinfo/' target={'_blank'} rel='noreferrer'>Property Information (Record Maps, Zoning, APNs)</a>
            </div>
        </div>

    )
}

export default Cupertino
