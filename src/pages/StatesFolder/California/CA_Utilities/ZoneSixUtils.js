import React from 'react'
import { Link } from 'react-router-dom'

const ZoneSixUtils = () => {
    return (
        <>
            <div className='county-info'>
                <div className='county-btn'>
                    <Link to={'/utilities'}><button>Back to Utilities</button></Link>
                    <h1 className='title'>Zone 6 Utilities</h1>
                </div>

                {/* Border To Separate Information */}
                <p className='border'></p>
                {/* Border To Separate Information */}

                {/* Sewer Plans */}
                <span className='span'>
                    <h3 className='util-header'>Sewer Plans</h3>

                    {/* Imperial County */}
                    <h4>Imperial County</h4>
                    &nbsp;&nbsp;- <a href='https://www.calexico.ca.gov/vertical/sites/%7B342ED706-1EBB-4FDE-BD1E-9543BAD44C09%7D/uploads/Calexico_Sewer_Lines.pdf' target='_blank' rel='noreferrer'>Calexico</a>&nbsp;&nbsp;&nbsp;(City Sewer Map)

                    <br />
                    <br />

                    {/* San Diego County */}
                    <h4>San Diego County</h4>
                    &nbsp;&nbsp;- <a href='https://www.arcgis.com/home/webmap/viewer.html?webmap=95e49897b6e747479652291f620103c9&extent=-117.0425,32.7639,-117.0155,32.7768' target='_blank' rel='noreferrer'>La Mesa</a>&nbsp;&nbsp;&nbsp;(City Sewer GIS)
                    <br />
                    &nbsp;&nbsp;- <a href='https://koordinates.com/layer/95901-city-of-san-jose-sanitary-sewer-manholes/' target='_blank' rel='noreferrer'>San Diego</a>&nbsp;&nbsp;&nbsp;(City Sewer GIS)
                    
                    <br />
                    <br />
                    
                    {/* Riverside County */}
                    <h4>Riverside County</h4>
                    &nbsp;&nbsp;- <a href='https://riversideca.gov/pwsurvey/sewerindex.asp' target='_blank' rel='noreferrer'>Riverside</a>&nbsp;&nbsp;&nbsp;(City Sewer Index)
                    <br />
                    &nbsp;&nbsp;- <a href='https://riversideca.gov/pwsurvey/sewer.asp' target='_blank' rel='noreferrer'>Riverside</a>&nbsp;&nbsp;&nbsp;(City Sewer Plans)            
                </span>


                {/* Border To Separate Information */}
                <p className='border'></p>
                {/* Border To Separate Information */}

                {/* Storm Drain Plans */}
                <span className='span'>
                    <h3 className='util-header'>Storm Drain Plans</h3>

                    {/* Imperial County */}
                    <h4>Imperial County</h4>
                    &nbsp;&nbsp;- <a href='https://www.calexico.ca.gov/vertical/sites/%7B342ED706-1EBB-4FDE-BD1E-9543BAD44C09%7D/uploads/Storm_Drains.pdf' target='_blank' rel='noreferrer'>Calexico</a>&nbsp;&nbsp;&nbsp;(Storm Drain Map)
                    
                    <br />
                    <br />
                    
                    {/* San Diego County */}
                    <h4>San Diego County</h4>
                    &nbsp;&nbsp;- <a href='https://koordinates.com/layer/99204-city-of-san-diego-california-storm-drain/' target='_blank' rel='noreferrer'>San Diego</a>&nbsp;&nbsp;&nbsp;(City Storm Drain)
                
                    <br />
                    <br />
                
                    {/* Santa Barbara County */}
                    <h4>Riverside County</h4>
                    &nbsp;&nbsp;- <a href='https://riversideca.gov/pwsurvey/stormindex.asp' target='_blank' rel='noreferrer'>Riverside</a>&nbsp;&nbsp;&nbsp;(City Storm Drain Index)
                    <br />
                    &nbsp;&nbsp;- <a href='https://riversideca.gov/pwsurvey/storm.asp' target='_blank' rel='noreferrer'>Riverside</a>&nbsp;&nbsp;&nbsp;(City Storm Drain Plans)
                    <br />
                    &nbsp;&nbsp;- <a href='https://www.indio.org/departments/public-works-department/engineering-services-division/public-works-master-plans-492/-folder-187' target='_blank' rel='noreferrer'>Indio</a>&nbsp;&nbsp;&nbsp;(Storm Drain Plans)
                    
                </span>

                {/* Border To Separate Information */}
                <p className='border'></p>
                {/* Border To Separate Information */}

            </div>
        </>
    )
}

export default ZoneSixUtils