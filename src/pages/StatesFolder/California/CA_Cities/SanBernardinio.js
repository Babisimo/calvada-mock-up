import React from 'react'

function SanBernardino() {
    return (
        <div className='dropdown'>
            <button className='dropbtn'>San Bernardino</button>
            <div className='dropdown-content'>
                <a href='https://www.sbcity.org/city_hall/public_works/engineering_division/survey_benchmarks' target={'_blank'} rel='noreferrer'>Benchmarks</a>
                <a href='https://edocs.sbcity.org/WebLink/Browse.aspx?id=3103974&dbid=0&repo=SB&cr=1' target={'_blank'} rel='noreferrer'>Centerline Ties</a>
                <a href='https://sbcity.maps.arcgis.com/apps/webappviewer/index.html?id=dcca6aa4816b4021bd9364888ba669fd' target={'_blank'} rel='noreferrer'>Zoning Map</a>
                <a href='https://www.sbcity.org/city_hall/community_economic_development/development_code' target={'_blank'} rel='noreferrer'>Municipal Code</a>
            </div>
        </div>
    )
}

export default SanBernardino
