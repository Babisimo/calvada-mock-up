import React, { useState } from 'react'

// Import California Cities from CACitiesExports
import { Adelanto, Anaheim, AlisoViejo, AppleValley, Artesia, Azusa, Bakersfield, Beaumont, Berkeley, BeverlyHills, Camarillo, Carlsbad, Carson, ChulaVista, Corona, Glendale, HunBeach, LongBeach, LosAngeles, Ontario, Pasadena, Riverside, SantaMonica, Temecula } from './CACitiesExports'

export default function CACities() {
    const [sortType, setSortType] = useState("asc")
    const [btnText, setBtnText] = useState("Ascending Order")

    function handleText() {
        if (btnText === "Ascending Order") {
            setBtnText('Descending Order')
        } else {
            setBtnText('Ascending Order')
        }
    }

    function handleSort() {
        if (sortType === 'asc') {
            setSortType("desc")
            handleText()
        } else {
            setSortType('asc')
            handleText()
        }
    }

    // Needs key!
    let cities = [
        <Adelanto key={'adelanto'} />,
        <Anaheim key={'anaheim'} />,
        <AlisoViejo key={'alisoviejo'} />,
        <AppleValley key={'applevalley'} />,
        <Artesia key={'artesia'} />,
        <Azusa key={'azusa'} />,
        <Bakersfield key={'bakersfield'} />,
        <Beaumont key={'beaumont'} />,
        <Berkeley key={'berkeley'} />,
        <BeverlyHills key={'beverlyhills'} />,
        <Camarillo key={'camarillo'} />,
        <Carlsbad key={'carlsbad'} />,
        <Carson key={'carson'} />,
        <ChulaVista key={'chulavista'} />,
        <Corona key={'corona'} />,
        <Glendale key={'glendale'} />,
        <HunBeach key={'hunbeach'} />,
        <LosAngeles key={'la'} />,
        <LongBeach key={'longbeach'} />,
        <Ontario key={'ontario'} />,
        <Pasadena key={'pasadena'} />,
        <Riverside key={'riverside'} />,
        <SantaMonica key={'santamonica'} />,
        <Temecula key={'temecula'} />

    ]


    return (
        <>
            <div className='view-btn'>
                <h2 className="city-title">California Cities</h2>

                <button onClick={() => handleSort()}>{btnText}&nbsp;&nbsp;<img src='https://imgs.search.brave.com/rFbq12_-W8NUBXm2_GOgiECXKRHKF4yUGGjgYqC_afU/rs:fit:980:956:1/g:ce/aHR0cDovL2Nkbi5v/bmxpbmV3ZWJmb250/cy5jb20vc3ZnL2lt/Z18xNzYyMDMucG5n' width={'15px'} alt='select icon' /></button>
            </div>
            <div className='cities'>
                {cities.sort((a, b) => {
                    const isReversed = (sortType === 'asc') ? 1 : - 1
                    return isReversed * a.key.localeCompare(b.key)
                })}
            </div>
        </>
    )
}
