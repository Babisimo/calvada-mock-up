import React from 'react'
import { Link } from 'react-router-dom'

const ZoneFourUtils = () => {
    return (
        <>
            <div className='county-info'>
                <div className='county-btn'>
                    <Link to={'/utilities'}><button>Back to Utilities</button></Link>
                    <h1 className='title'>Zone 4 Utilities</h1>
                </div>

                {/* Border To Separate Information */}
                <p className='border'></p>
                {/* Border To Separate Information */}

                {/* Sewer Plans */}
                <span className='span'>
                    <h3 className='util-header'>Sewer Plans</h3>

                    {/* Monterey County */}
                    <h4>Monterey County</h4>
                    &nbsp;&nbsp;- <a href='http://gisags8.ci.monterey.ca.us/pub/engr/' target='_blank' rel='noreferrer'>Monterey</a>&nbsp;&nbsp;&nbsp;(City Sewer Drain)

                    <br />
                    <br />

                    {/* Fresno County */}
                    <h4>Fresno County</h4>
                    &nbsp;&nbsp;- <a href='https://www.fresno.gov/publicutilities/wp-content/uploads/sites/16/2020/09/2015CollectionSystemMasterPlanUpdate2015FINAL.pdf' target='_blank' rel='noreferrer'>Fresno</a>&nbsp;&nbsp;&nbsp;(City Sewer Plan PDF)
                    
                    <br />
                    <br />

                    {/* Tulare County */}
                    <h4>Tulare County</h4>
                    &nbsp;&nbsp;- <a href='https://www.tulare.ca.gov/home/showpublisheddocument/284/635666899984270000' target='_blank' rel='noreferrer'>Tulare</a>&nbsp;&nbsp;&nbsp;(City Sewer System PDF)
                    
                    <br />
                    <br />

                    {/* San Benito County */}
                    <h4>San Benito County</h4>
                    &nbsp;&nbsp;- <a href='https://hollister.ca.gov/wp-content/uploads/2017/03/Attachment-Sewer-System-Atlas-Map.pdf' target='_blank' rel='noreferrer'>Hollister</a>&nbsp;&nbsp;&nbsp;(City Sewer System PDF)
                    
                    <br />
                    <br />

                    {/* Kings County */}
                    <h4>Kings County</h4>
                    &nbsp;&nbsp;- <a href='https://www.ci.hanford.ca.us/DocumentCenter/View/569/2017-Sewer-System-Master-Plan-PDF' target='_blank' rel='noreferrer'>Hanford</a>&nbsp;&nbsp;&nbsp;(City Sewer System Plan PDF)
                    <br />
                    &nbsp;&nbsp;- <a href='https://www.arcgis.com/apps/mapviewer/index.html?layers=473d59263add4cc0aa9d88a9dab0dd4f' target='_blank' rel='noreferrer'>Hanford</a>&nbsp;&nbsp;&nbsp;(City Waterway GIS)
                </span>


                {/* Border To Separate Information */}
                <p className='border'></p>
                {/* Border To Separate Information */}

                {/* Storm Drain Plans */}
                <span className='span'>
                    <h3 className='util-header'>Storm Drain Plans</h3>

                    {/* Monterey County */}
                    <h4>Monterey County</h4>
                    &nbsp;&nbsp;- <a href='http://gisags8.ci.monterey.ca.us/pub/engr/' target='_blank' rel='noreferrer'>Monterey</a>&nbsp;&nbsp;&nbsp;(City Storm Drain)
                    
                    <br />
                    <br />
                    
                    {/* Tulare County */}
                    <h4>Tulare County</h4>
                    &nbsp;&nbsp;- <a href='https://www.tulare.ca.gov/home/showpublisheddocument/286/635666904360500000' target='_blank' rel='noreferrer'>Tulare</a>&nbsp;&nbsp;&nbsp;(City Storm Drain Plan PDF)

                    <br />
                    <br />

                    {/* San Benito County */}
                    <h4>San Benito County</h4>
                    &nbsp;&nbsp;- <a href='https://hollister.ca.gov/wp-content/uploads/2015/02/Final-Storm-Drain-Master-Plan-August-2011.pdf' target='_blank' rel='noreferrer'>Hollister</a>&nbsp;&nbsp;&nbsp;(City Storm Drain Plan PDF)
                </span>

                {/* Border To Separate Information */}
                <p className='border'></p>
                {/* Border To Separate Information */}

            </div>
        </>
    )
}

export default ZoneFourUtils