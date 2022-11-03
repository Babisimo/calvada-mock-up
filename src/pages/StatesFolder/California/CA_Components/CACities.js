import React from 'react'

// Import California Cities from CACitiesExports
import * as CACitiesExports from './CACitiesExports'

export default function CACities() {

    // Needs key!
    let cities = [
        <CACitiesExports.Adelanto key={'adelanto'} />,
        <CACitiesExports.Anaheim key={'anaheim'} />,
        <CACitiesExports.AlisoViejo key={'alisoviejo'} />,
        <CACitiesExports.AppleValley key={'applevalley'} />,
        <CACitiesExports.Artesia key={'artesia'} />,
        <CACitiesExports.Azusa key={'azusa'} />,
        <CACitiesExports.Bakersfield key={'bakersfield'} />,
        <CACitiesExports.Beaumont key={'beaumont'} />,
        <CACitiesExports.Berkeley key={'berkeley'} />,
        <CACitiesExports.BeverlyHills key={'beverlyhills'} />,
        <CACitiesExports.Camarillo key={'camarillo'} />,
        <CACitiesExports.Carlsbad key={'carlsbad'} />,
        <CACitiesExports.Carson key={'carson'} />,
        <CACitiesExports.ChulaVista key={'chulavista'} />,
        <CACitiesExports.Corona key={'corona'} />,
        <CACitiesExports.Glendale key={'glendale'} />,
        <CACitiesExports.HunBeach key={'hunbeach'} />,
        <CACitiesExports.LosAngeles key={'la'} />,
        <CACitiesExports.LongBeach key={'longbeach'} />,
        <CACitiesExports.Ontario key={'ontario'} />,
        <CACitiesExports.Pasadena key={'pasadena'} />,
        <CACitiesExports.Riverside key={'riverside'} />,
        <CACitiesExports.SantaMonica key={'santamonica'} />,
        <CACitiesExports.Temecula key={'temecula'} />
    ]


    return (
        <>
            <div className='view-btn'>
                <h2 className="city-title">California Cities</h2>

            </div>
            <div className='cities'>
                
                {cities.sort((a, b) => {
                    return a.key.localeCompare(b.key)
                })}

            </div>
        </>
    )
}
