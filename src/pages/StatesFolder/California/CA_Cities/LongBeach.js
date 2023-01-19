import React from 'react'

function LongBeach() {
    return (
        <div className='city-dropdown'>
            <button className='city-dropbtn'>Long Beach</button>
            <div className='city-dropdown-content'>
                <a href='https://www.longbeach.gov/globalassets/pw/media-library/documents/resources/general/maps-and-gis/survey-benchmark-book' target={'_blank'} rel='noreferrer'>Benchmarks</a>
                <a href='https://www.longbeach.gov/globalassets/pw/media-library/documents/resources/general/maps-and-gis/benchmarkmap_website' target={'_blank'} rel='noreferrer'>Benchmarks Map</a>
                <a href='https://longbeachca.maps.arcgis.com/apps/webappviewer/index.html?id=e41479af7f154bc584c384cd17440364' target={'_blank'} rel='noreferrer'>Centerline Ties</a>
                <a href='https://longbeachca.maps.arcgis.com/apps/webappviewer/index.html?id=17b68e7082ef4a4ea8ba6b0d04729758' target={'_blank'} rel='noreferrer'>GIS (Zoning)</a>
                <a href='https://longbeach.gov/lbds/planning/advance/maps/zoning/' target={'_blank'} rel='noreferrer'>Zoning Maps</a>
                <a href='https://library.municode.com/ca/long_beach/codes/municipal_code?nodeId=TIT21ZO' target={'_blank'} rel='noreferrer'>Municipal Code</a>
            </div>
        </div>
    )
}

export default LongBeach
