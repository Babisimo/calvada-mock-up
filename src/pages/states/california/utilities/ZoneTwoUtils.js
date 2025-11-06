import React from 'react'
import { Link } from 'react-router-dom'

const ZoneTwoUtils = () => {
    return (
        <>
            <div className='county-info'>
                <div className='county-btn'>
                    <Link to={'/utilities'}><button>Back to Utilities</button></Link>
                    <h1 className='title'>Zone 2 Utilities</h1>
                </div>

                {/* Border To Separate Information */}
                <p className='border'></p>
                {/* Border To Separate Information */}

                {/* Sewer Plans */}
                <span className='span'>
                    <h3 className='util-header'>Sewer Plans</h3>

                    {/* Sacramento County */}
                    <h4>Sacramento County</h4>
                    &nbsp;&nbsp;- <a href='https://data.saccounty.gov/datasets/sacramentocounty::drop-inlets/explore?location=38.585145%2C-121.319469%2C11.66' target='_blank' rel='noreferrer'>Drop Inlets GIS</a>&nbsp;&nbsp;&nbsp;(County)
                    <br />
                    &nbsp;&nbsp;- <a href='https://data.saccounty.gov/datasets/sacramentocounty::drainage-mains/explore?location=38.622675%2C-121.309384%2C13.00' target='_blank' rel='noreferrer'>Drainage Mains GIS</a>&nbsp;&nbsp;&nbsp;(County)
                    <br />
                    &nbsp;&nbsp;- <a href='https://data.saccounty.gov/datasets/sacramentocounty::inlet-structures/explore?location=38.598515%2C-121.272795%2C11.66' target='_blank' rel='noreferrer'>Inlet Structures GIS</a>&nbsp;&nbsp;&nbsp;(County)

                    <br />
                    <br />

                    {/* Sonoma County */}
                    <h4>Sonoma County</h4>
                    &nbsp;&nbsp;- <a href='http://maps.srcity.org/Html5Viewer/Index.html?viewer=SewerWaterStorm' target='_blank' rel='noreferrer'>Santa Rosa</a>&nbsp;&nbsp;&nbsp;(Storm Drain & Sewer Plans GIS)
                </span>


                {/* Border To Separate Information */}
                <p className='border'></p>
                {/* Border To Separate Information */}

                {/* Storm Drain Plans */}
                <span className='span'>
                    <h3 className='util-header'>Storm Drain Plans</h3>

                    {/* Sacramento County */}
                    <h4>Sacramento County</h4>
                    &nbsp;&nbsp;- <a href='https://data.saccounty.gov/datasets/sacramentocounty::outfall-structures/explore?location=38.579067%2C-121.280892%2C11.66' target='_blank' rel='noreferrer'>Outfall Structures GIS</a>&nbsp;&nbsp;&nbsp;(County)
                    <br />
                    &nbsp;&nbsp;- <a href='https://data.saccounty.gov/datasets/sacramentocounty::drainage-manholes/explore?location=38.572147%2C-121.138417%2C10.89' target='_blank' rel='noreferrer'>Drainage Manholes GIS</a>&nbsp;&nbsp;&nbsp;(County)
                    
                    <br />
                    <br />
                    
                    {/* Sonoma County */}
                    <h4>Sonoma County</h4>
                    &nbsp;&nbsp;- <a href='https://sonomacounty.maps.arcgis.com/apps/webappviewer/index.html?id=c36134153c024b01a0eb2aabb2345579' target='_blank' rel='noreferrer'>Storm Water Drainage System GIS</a>&nbsp;&nbsp;&nbsp;(County)
                    <br />
                    &nbsp;&nbsp;- <a href='https://gis-sonomacounty.hub.arcgis.com/datasets/sonomacounty::drainage-points/explore?location=38.474545%2C-122.612456%2C10.88' target='_blank' rel='noreferrer'>Drainage Points</a>&nbsp;&nbsp;&nbsp;(County)
                </span>

                {/* Border To Separate Information */}
                <p className='border'></p>
                {/* Border To Separate Information */}

            </div>
        </>
    )
}

export default ZoneTwoUtils