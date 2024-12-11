import React from 'react'

function Burbank() {
    return (
        <div className='city-dropdown'>
            <button className='city-dropbtn'>Burbank</button>
            <div className='city-dropdown-content'>
                <a href='https://burbankca.maps.arcgis.com/apps/View/index.html?appid=17b32127798845afb6329617545f0ebb&extent=-118.4349,34.1321,-118.2152,34.2322' target={'_blank'} rel='noreferrer'>Benchmarks</a>
                <a href='https://www.burbankca.gov/web/public-works/centerlines' target={'_blank'} rel='noreferrer'>Centerline Ties</a>
                <a href='https://www.burbankca.gov/web/community-development/planning-zoning' target={'_blank'} rel='noreferrer'>Zoning Map</a>
                <a href='https://www.codepublishing.com/CA/Burbank/#!/Burbank10/Burbank1001.html' target={'_blank'} rel='noreferrer'>Municipal Code</a>
            </div>
        </div>
    )
}

export default Burbank
