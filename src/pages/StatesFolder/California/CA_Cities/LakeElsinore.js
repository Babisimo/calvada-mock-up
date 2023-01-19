import React from 'react'

function LakeElsinore() {
    return (
        <div className='dropdown'>
            <button className='dropbtn'>Lake Elsinore</button>
            <div className='dropdown-content'>
                <a href='http://www.lake-elsinore.org/city-hall/city-departments/public-works/engineering/drawing-standards' target={'_blank'} rel='noreferrer'>Benchmarks</a>
                <a href='http://www.lake-elsinore.org/home/showdocument?id=20579' target={'_blank'} rel='noreferrer'>Centerline Ties</a>
                <a href='http://davis.lake-elsinore.org/portal/apps/webappviewer/index.html?id=d78b8d4d4fd24df1b864fd0538e83019' target={'_blank'} rel='noreferrer'>GIS (Zoning)</a>
                <a href='https://www.codepublishing.com/CA/LakeElsinore/#!/LakeElsinore17/LakeElsinore17.html' target={'_blank'} rel='noreferrer'>Municipal Code</a>
            </div>
        </div>
    )
}

export default LakeElsinore
