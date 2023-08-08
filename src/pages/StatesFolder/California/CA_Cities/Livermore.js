import React from 'react'

function Livermore() {
    return (
        <div className='city-dropdown'>
            <button className='city-dropbtn'>Livermore</button>
            <div className='city-dropdown-content'>
                <a href='https://gisweb.cityoflivermore.net/Html5Viewer/Index.html?configBase=https://gisweb.cityoflivermore.net/Geocortex/Essentials/REST/sites/COLPublic/viewers/COLPublic/virtualdirectory/Resources/Config/Default' target={'_blank'} rel='noreferrer'>Benchmarks (GIS)</a>
                <a href='https://www.livermoreca.gov/home/showpublisheddocument/649/637165675870430000' target={'_blank'} rel='noreferrer'>Benchmarks (PDF)</a>
                <a href='https://www.livermoreca.gov/departments/community-development/planning/zoning-map' target={'_blank'} rel='noreferrer'>Zoning</a>
                <a href='https://www.codepublishing.com/CA/Livermore/?zoning/Lpzc03/lpzc0345.html' target={'_blank'} rel='noreferrer'>Municipal Code</a>
               
            </div>
        </div>
    )
}

export default Livermore
