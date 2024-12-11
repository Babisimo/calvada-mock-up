import React from 'react'

function LakeElsinore() {
    return (
        <div className='city-dropdown'>
            <button className='city-dropbtn'>Lake Elsinore</button>
            <div className='city-dropdown-content'>
                <a href='http://www.lake-elsinore.org/city-hall/city-departments/public-works/engineering/drawing-standards' target={'_blank'} rel='noreferrer'>Benchmarks</a>
                <a href='http://www.lake-elsinore.org/home/showdocument?id=20579' target={'_blank'} rel='noreferrer'>Centerline Ties</a>
                <a href='http://davis.lake-elsinore.org/portal/apps/webappviewer/index.html?id=d78b8d4d4fd24df1b864fd0538e83019' target={'_blank'} rel='noreferrer'>GIS (Zoning)</a>
                <a href='https://www.codepublishing.com/CA/LakeElsinore/#!/LakeElsinore17/LakeElsinore17.html' target={'_blank'} rel='noreferrer'>Municipal Code</a>
                <a href='https://evmwd.maps.arcgis.com/apps/webappviewer/index.html?id=e505103a6c9b4a2f9e1f54e69fa4567f' target={'_blank'} rel='noreferrer'>EVMWD</a>
            </div>
        </div>
    )
}

export default LakeElsinore
