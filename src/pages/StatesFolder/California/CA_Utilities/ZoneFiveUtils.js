import React from 'react'
import { Link } from 'react-router-dom'

const ZoneFiveUtils = () => {
    return (
        <>
            <div className='county-info'>
                <div className='county-btn'>
                    <Link to={'/utilities'}><button>Back to Utilities</button></Link>
                    <h1 className='title'>Zone 5 Utilities</h1>
                </div>

                {/* Border To Separate Information */}
                <p className='border'></p>
                {/* Border To Separate Information */}

                {/* Sewer Plans */}
                <span className='span'>
                    <h3 className='util-header'>Sewer Plans</h3>

                    {/* SB County */}
                    <h4>San Bernardino County</h4>
                    &nbsp;&nbsp;- <a href='https://www.arcgis.com/apps/mapviewer/index.html?webmap=d209d8af5a084cd383e783f688cb187d' target='_blank' rel='noreferrer'>Water and Sewer Availability</a>&nbsp;&nbsp;&nbsp;(County)
                    <br />
                    &nbsp;&nbsp;- <a href='https://www.sbmwd.org/198/Sewer-Collection-Standards' target='_blank' rel='noreferrer'>San Bernardino</a>&nbsp;&nbsp;&nbsp;(Sewer Lateral Line Maps A-Z)
                    <br />
                    <br />

                    {/* Kern County */}
                    <h4>Kern County</h4>
                    &nbsp;&nbsp;- <a href='https://kernpublicworks.com/wp-content/uploads/2018/08/CSA_71-Update_2010-05-08.1.pdf' target='_blank' rel='noreferrer'>Sewer Master Plan</a>&nbsp;&nbsp;&nbsp;(County)
                    <br />
                    <br />
                    
                    {/* San Luis Obispo County */}
                    <h4>San Luis Obispo County</h4>
                    &nbsp;&nbsp;- <a href='https://www.slocounty.ca.gov/Departments/Public-Works/Services/Maps/Los-Osos-Sewer-Lateral-and-Septic-Tank-Locations.aspx' target='_blank' rel='noreferrer'>Los Osos</a>&nbsp;&nbsp;&nbsp;(Sewer Lateral & Septic Tanks)
                    <br />
                    &nbsp;&nbsp;- <a href='https://www.grover.org/DocumentCenter/View/10423/City-of-Grover-Beach-SMP-Report-Final?bidId=' target='_blank' rel='noreferrer'>Grover Beach</a>&nbsp;&nbsp;&nbsp;(Sewer Master Plan)
                    <br />
                    <br />
                   
                    {/* Santa Barbara County */}
                    <h4>Santa Barbara County</h4>
                    &nbsp;&nbsp;- <a href='https://databasin.org/maps/new/#datasets=9ab43e2367954b1585ccf86cafaa25f3' target='_blank' rel='noreferrer'>Storm Water GIS</a>&nbsp;&nbsp;&nbsp;(County)
                    <br />
                    &nbsp;&nbsp;- <a href='https://zwg.maps.arcgis.com/apps/webappviewer/index.html?id=a86ff5f97d9042d495a2b3c04b406932' target='_blank' rel='noreferrer'>Goleta</a>&nbsp;&nbsp;&nbsp;(City Sanitary Lines)
                    <br />
                    <br />



                </span>


                {/* Border To Separate Information */}
                <p className='border'></p>
                {/* Border To Separate Information */}

                {/* Storm Drain Plans */}
                <span className='span'>
                    <h3 className='util-header'>Storm Drain Plans</h3>

                    {/* San Bernardino County */}
                    <h4>San Bernardino County</h4>
                    &nbsp;&nbsp;- <a href='https://www.arcgis.com/apps/mapviewer/index.html?url=https://services.arcgis.com/ZZ0KZXZVmgB1v555/ArcGIS/rest/services/RedbookFacilities_WFL1_viewer/FeatureServer/2&source=sd' target='_blank' rel='noreferrer'>Storm Drain Redbook Facilities</a>&nbsp;&nbsp;&nbsp;(County)
                    
                    <br />
                    <br />
                    
                    {/* Ventura County */}
                    <h4>Ventura County</h4>
                    &nbsp;&nbsp;- <a href='https://www.vcstormwater.org/publications/maps/ventura-countywide-unified-storm-drain-map' target='_blank' rel='noreferrer'>Storm Drain GIS</a>&nbsp;&nbsp;&nbsp;(County)
                    <br />
                    &nbsp;&nbsp;- <a href='https://map.cityofventura.net/java/map/index.htm?config=custom&add=DIN.P:DLL.P:DSM.P:DCH.P:SPHS:SDOF:SDOFWD&bl=GS&zoom=5' target='_blank' rel='noreferrer'>Ventura</a>&nbsp;&nbsp;&nbsp;(City Storm Drain - Enable Layer)
                
                    <br />
                    <br />
                
                    {/* Santa Barbara County */}
                    <h4>Santa Barbara County</h4>
                    &nbsp;&nbsp;- <a href='https://www.countyofsb.org/2395/Storm-Drain-Atlas' target='_blank' rel='noreferrer'>Storm Drain Atlas</a>&nbsp;&nbsp;&nbsp;(County)
                    <br />
                    
                </span>

                {/* Border To Separate Information */}
                <p className='border'></p>
                {/* Border To Separate Information */}

            </div>
        </>
    )
}

export default ZoneFiveUtils