import React from 'react'
import { Link } from 'react-router-dom'

const ZoneThreeUtils = () => {
    return (
        <>
            <div className='county-info'>
                <div className='county-btn'>
                    <Link to={'/utilities'}><button>Back to Utilities</button></Link>
                    <h1 className='title'>Zone 3 Utilities</h1>
                </div>

                {/* Border To Separate Information */}
                <p className='border'></p>
                {/* Border To Separate Information */}

                {/* Sewer Plans */}
                <span className='span'>
                    <h3 className='util-header'>Sewer Plans</h3>

                    {/* San Francisco County */}
                    <h4>San Francisco County</h4>
                    &nbsp;&nbsp;- <a href='https://sfgis-portal.sfgov.org/arcgis/apps/webappviewer/index.html?id=b0a6f9cdad294b11afc4161c374e47e5' target='_blank' rel='noreferrer'>Sewer GIS</a>&nbsp;&nbsp;&nbsp;(County - Login Required)
                    <br />
                    <br />

                    {/* Alameda County */}
                    <h4>Alameda County</h4>
                    &nbsp;&nbsp;- <a href='https://cityofalbany.maps.arcgis.com/apps/webappviewer/index.html?id=aa510a25010f4febb4d27d58728b3f80' target='_blank' rel='noreferrer'>Albany</a>&nbsp;&nbsp;&nbsp;(Sewer GIS - Enable Layers)
                    <br />
                    &nbsp;&nbsp;- <a href='https://data.cityofberkeley.info/City-Government/Sanitary-Sewer-Manholes/hxi7-ruxt' target='_blank' rel='noreferrer'>Berkeley</a>&nbsp;&nbsp;&nbsp;(Sewer <strong>Manholes</strong> 2016)
                    <br />
                    &nbsp;&nbsp;- <a href='https://data.cityofberkeley.info/City-Government/Sanitary-Sewer-Mainlines/8qse-2t2u' target='_blank' rel='noreferrer'>Berkeley</a>&nbsp;&nbsp;&nbsp;(Sewer <strong>Mainlines</strong> 2016)
                    <br />
                    &nbsp;&nbsp;- <a href='https://www.ci.emeryville.ca.us/DocumentCenter/View/7494/SSMP-Update-2019' target='_blank' rel='noreferrer'>Emeryville</a>&nbsp;&nbsp;&nbsp;(Sewer Plans)
                    <br />
                    &nbsp;&nbsp;- <a href='https://oakgis.maps.arcgis.com/apps/mapviewer/index.html?layers=9bbd0c4b07594c88a77cefd86ae401ca' target='_blank' rel='noreferrer'>Oakland</a>&nbsp;&nbsp;&nbsp;(Sewer GIS and Maps)
                    <br />
                    &nbsp;&nbsp;- <a href='https://oakgis.maps.arcgis.com/apps/mapviewer/index.html?webmap=58d37d92e42b4c59b944ed80aea8185a' target='_blank' rel='noreferrer'>Oakland</a>&nbsp;&nbsp;&nbsp;(Sewer Maintenance GIS)

                    <br />
                    <br />

                    {/* San Mateo */}
                    <h4>San Mateo County</h4>
                    &nbsp;&nbsp;- <a href='https://drive.google.com/file/d/1roD3BK3hkI2UkkF7gZ6If4K1q1gZ8HSf/view?usp=share_link' target='_blank' rel='noreferrer'>San Carlos</a>&nbsp;&nbsp;&nbsp;(Sewer Plans - Google Drive)
                    <br />
                    &nbsp;&nbsp;- <a href='https://drive.google.com/file/d/1ExHOFE8itXJkQEiD0zT3H-2OLPw7xiGu/view?usp=share_link' target='_blank' rel='noreferrer'>Burlingame</a>&nbsp;&nbsp;&nbsp;(Sewer Plans - Google Drive)

                    <br />
                    <br />

                    {/* Santa Cruz */}
                    <h4>Santa Cruz County</h4>
                    &nbsp;&nbsp;- <a href='https://sccgis.maps.arcgis.com/apps/webappviewer/index.html?id=1c5e5f8bc0214fd1a47948ca841a6e80' target='_blank' rel='noreferrer'>Sanitary GIS</a>&nbsp;&nbsp;&nbsp;(County)
                    <br />
                    &nbsp;&nbsp;- <a href='https://vw8.cityofsantacruz.com/public/' target='_blank' rel='noreferrer'>Santa Cruz</a>&nbsp;&nbsp;&nbsp;(City Sewer Plans GIS)

                    <br />
                    <br />

                    {/* Santa Clara County */}
                    <h4>Santa Clara County</h4>
                    &nbsp;&nbsp;- <a href='https://gis.sanjoseca.gov/maps/utilityviewer/' target='_blank' rel='noreferrer'>San Jose</a>&nbsp;&nbsp;&nbsp;(Sanitary MH Viewer)
                    <br/>
                    &nbsp;&nbsp;- <a href='https://www.cupertinosanitarydistrict.org/maps' target='_blank' rel='noreferrer'>Cupertino</a>&nbsp;&nbsp;&nbsp;(Sewer Maps PDF)
                    <br/>
                    &nbsp;&nbsp;- <a href='https://www.cityofepa.org/sites/default/files/fileattachments/public_works/page/3741/districtma.pdf' target='_blank' rel='noreferrer'>Palo Alto</a>&nbsp;&nbsp;&nbsp;(East Palo Alto Sewer PDF)
                    <br/>
                    &nbsp;&nbsp;- <a href='https://www.sunnyvale.ca.gov/city-services/online-services/maps-and-gis/utility-maps' target='_blank' rel='noreferrer'>Sunnyvale</a>&nbsp;&nbsp;&nbsp;(Sewer GIS)
                    <br/>
                    &nbsp;&nbsp;- <a href='https://www.cityofgilroy.org/DocumentCenter/View/5254/Sanitary-Sewer-Master-Plan---May-2004' target='_blank' rel='noreferrer'>Gilroy</a>&nbsp;&nbsp;&nbsp;(City Sewer Plan PDF)
                    <br/>
                    &nbsp;&nbsp;- <a href='https://www.milpitas.gov/DocumentCenter/View/3431' target='_blank' rel='noreferrer'>Milpitas</a>&nbsp;&nbsp;&nbsp;(City Sewer Plan PDF)
                    <br/>
                    &nbsp;&nbsp;- <a href='https://www.morganhill.ca.gov/DocumentCenter/View/42555/2022-Sewer-System-Master-Plan-Amendment' target='_blank' rel='noreferrer'>Morgan Hill</a>&nbsp;&nbsp;&nbsp;(City Sewer Plan PDF)
                    <br/>
                    &nbsp;&nbsp;- <a href='https://www.losaltosca.gov/sites/default/files/fileattachments/public_works/page/18641/final_sanitary_sewer_master_plan_update_4.25.13._for_action.pdf' target='_blank' rel='noreferrer'>Los Altos</a>&nbsp;&nbsp;&nbsp;(City Sewer Plan PDF)

                    <br/>
                    <br/>

                    {/* Contra Costa County */}
                    <h4>Contra Costa County</h4>
                    &nbsp;&nbsp;- <a href='https://www.antiochca.gov/fc/public-works/gis/collections-sewer-system-map.pdf' target='_blank' rel='noreferrer'>Antioch</a>&nbsp;&nbsp;&nbsp;(City Sewer Map PDF)
                    <br/>
                    &nbsp;&nbsp;- <a href='https://www.ci.richmond.ca.us/DocumentCenter/View/35753/Sewer-Network-E-size?bidId=' target='_blank' rel='noreferrer'>Richmond</a>&nbsp;&nbsp;&nbsp;(City Sewer Map PDF)
                    
                    <br/>
                    <br/>
                    
                    {/* Marin County */}
                    <h4>Marin County</h4>
                    &nbsp;&nbsp;- <a href='https://www.marinmap.org/Html5Viewer/Index.html?viewer=smmdataviewer' target='_blank' rel='noreferrer'>County Sewer GIS</a>&nbsp;&nbsp;&nbsp;(Enable Layer)

                    <br/>
                    <br/>

                    {/* San Joaquin County */}
                    <h4>San Joaquin County</h4>
                    &nbsp;&nbsp;- <a href='http://www.stocktonca.gov/files/COS_MUD__Wastewater_Master_Plan_Update_2022.pdf' target='_blank' rel='noreferrer'>Stockton</a>&nbsp;&nbsp;&nbsp;(Wastewater Plan PDF)
                    <br/>
                    &nbsp;&nbsp;- <a href='https://www.manteca.gov/home/showpublisheddocument/480/637916685492900000' target='_blank' rel='noreferrer'>Manteca</a>&nbsp;&nbsp;&nbsp;(City Wastewater System PDF)



                </span>

                {/* Border To Separate Information */}
                <p className='border'></p>
                {/* Border To Separate Information */}

                {/* Storm Drain Plans */}
                <span className='span'>
                    <h3 className='util-header'>Storm Drain Plans</h3>

                    {/* San Francisco County */}
                    <h4>San Francisco County</h4>
                    &nbsp;&nbsp;- <a href='https://data.sfgov.org/City-Infrastructure/Map-of-stormwater-inlets-drains-and-catch-basins/xbxd-zkc9' target='_blank' rel='noreferrer'>Storm Drain GIS</a>&nbsp;&nbsp;&nbsp;(County)

                    <br />
                    <br />

                    {/* Alameda County */}
                    <h4>Alameda County</h4>
                    &nbsp;&nbsp;- <a href='https://cityofalbany.maps.arcgis.com/apps/webappviewer/index.html?id=aa510a25010f4febb4d27d58728b3f80' target='_blank' rel='noreferrer'>Albany</a>&nbsp;&nbsp;&nbsp;(Storm GIS - Enable Layers)
                    <br />
                    &nbsp;&nbsp;- <a href='https://data.cityofberkeley.info/City-Government/Storm-Drains/tgpz-mid4' target='_blank' rel='noreferrer'>Berkeley</a>&nbsp;&nbsp;&nbsp;(Storm Drains 2016)
                    <br />
                    &nbsp;&nbsp;- <a href='https://gis.dublin.ca.gov/Html5Viewer/' target='_blank' rel='noreferrer'>Dublin</a>&nbsp;&nbsp;&nbsp;(Storm Drains GIS)
                    <br />
                    &nbsp;&nbsp;- <a href='https://oakgis.maps.arcgis.com/apps/mapviewer/index.html?layers=d055450bb9f64338a8dbd790e5526fd7' target='_blank' rel='noreferrer'>Oakland</a>&nbsp;&nbsp;&nbsp;(Storm Drains GIS)
                    <br />
                    &nbsp;&nbsp;- <a href='https://www.cityofpleasantonca.gov/civicax/filebank/blobdload.aspx?BlobID=30034' target='_blank' rel='noreferrer'>Pleasanton</a>&nbsp;&nbsp;&nbsp;(City Storm Drain Map)
                   
                    <br />
                    <br />
                   
                    {/* San Mateo County */}
                    <h4>San Mateo County</h4>
                    &nbsp;&nbsp;- <a href='https://drive.google.com/file/d/1MFDgz4c7wRy1pDmb08J3-wPduAkE0Y1i/view?usp=share_link' target='_blank' rel='noreferrer'>San Carlos</a>&nbsp;&nbsp;&nbsp;(Storm Drain Plans - Google Drive)
                    <br />
                    &nbsp;&nbsp;- <a href='https://drive.google.com/file/d/1CeQJjzWC4r2vKIN566lqbh3FyLPGZv3I/view?usp=share_link' target='_blank' rel='noreferrer'>Burlingame</a>&nbsp;&nbsp;&nbsp;(Storm Drain Plans - Google Drive)
                    
                    <br />
                    <br />
                    
                    {/* Santa Cruz County */}
                    <h4>Santa Cruz County</h4>
                    &nbsp;&nbsp;- <a href='https://sccgis.maps.arcgis.com/apps/webappviewer/index.html?id=1c5e5f8bc0214fd1a47948ca841a6e80' target='_blank' rel='noreferrer'>Santa Cruz</a>&nbsp;&nbsp;&nbsp;(City Storm Drain Plans GIS)

                    <br />
                    <br />

                    {/* Santa Clara County */}
                    <h4>Santa Clara County</h4>
                    &nbsp;&nbsp;- <a href='https://data-valleywater.opendata.arcgis.com/datasets/valleywater::hmp-outfalls/explore?location=37.340951%2C-121.920539%2C12.33' target='_blank' rel='noreferrer'>Storm Drain GIS</a>&nbsp;&nbsp;&nbsp;(County)
                    <br />
                    &nbsp;&nbsp;- <a href='https://gis.sanjoseca.gov/maps/utilityviewer/' target='_blank' rel='noreferrer'>San Jose</a>&nbsp;&nbsp;&nbsp;(Storm Man Hole GIS)
                    <br />
                    &nbsp;&nbsp;- <a href='https://gis-cupertino.opendata.arcgis.com/datasets/Cupertino::storm-water-structures/explore?location=37.321581%2C-122.026343%2C13.84' target='_blank' rel='noreferrer'>Cupertino</a>&nbsp;&nbsp;&nbsp;(Storm Water Structires GIS)
                    <br />
                    &nbsp;&nbsp;- <a href='https://www.saratoga.ca.us/DocumentCenter/View/1487/Storm-Drainage-Master-Plan---2015-PDF?bidId=' target='_blank' rel='noreferrer'>Saratoga</a>&nbsp;&nbsp;&nbsp;(Storm Drain Plan)
                    <br />
                    &nbsp;&nbsp;- <a href='https://www.sunnyvale.ca.gov/city-services/online-services/maps-and-gis/utility-maps' target='_blank' rel='noreferrer'>Sunnyvale</a>&nbsp;&nbsp;&nbsp;(Storm Drain GIS)
                    <br />
                    &nbsp;&nbsp;- <a href='https://www.cityofgilroy.org/DocumentCenter/View/5256/Storm-Drain-Master-Plan---May-2004' target='_blank' rel='noreferrer'>Gilroy</a>&nbsp;&nbsp;&nbsp;(Storm Drain Plan PDF)
                    <br />
                    &nbsp;&nbsp;- <a href='https://www.milpitas.gov/DocumentCenter/View/3432' target='_blank' rel='noreferrer'>Milpitas</a>&nbsp;&nbsp;&nbsp;(City Storm Master Plan)
                    <br />
                    &nbsp;&nbsp;- <a href='https://www.morganhill.ca.gov/DocumentCenter/View/23599/Storm-Drainage-Master-Plan-weblink-version' target='_blank' rel='noreferrer'>Morgan Hill</a>&nbsp;&nbsp;&nbsp;(City Storm Master Plan)
                    <br />
                    &nbsp;&nbsp;- <a href='https://www.losaltosca.gov/sites/default/files/fileattachments/public_works/page/31841/swmp_4.27.16.pdf' target='_blank' rel='noreferrer'>Los Altos</a>&nbsp;&nbsp;&nbsp;(City Storm Drain Plan PDF)

                    <br/>
                    <br/>

                    {/* Contra Costa County */}
                    <h4>Contra Costa County</h4>
                    &nbsp;&nbsp;- <a href='https://www.antiochca.gov/fc/public-works/gis/collections-storm-system-map.pdf' target='_blank' rel='noreferrer'>Antioch</a>&nbsp;&nbsp;&nbsp;(City Storm Map PDF)
                    <br/>
                    &nbsp;&nbsp;- <a href='https://www.ci.richmond.ca.us/DocumentCenter/View/35755/Storm-Drain-Network-E-size?bidId=' target='_blank' rel='noreferrer'>Richmond</a>&nbsp;&nbsp;&nbsp;(City Storm Drain PDF)
                    <br/>
                    &nbsp;&nbsp;- <a href='https://gis.brentwoodca.gov/html5/external.html' target='_blank' rel='noreferrer'>Brentwood</a>&nbsp;&nbsp;&nbsp;(City Storm Drain GIS - Select Storm)
                    
                    <br/>
                    <br/>

                    {/* Marin County */}
                    <h4>Marin County</h4>
                    &nbsp;&nbsp;- <a href='https://www.marinmap.org/Html5Viewer/Index.html?viewer=smmdataviewer' target='_blank' rel='noreferrer'>County Storm Water GIS</a>&nbsp;&nbsp;&nbsp;(Enable Layer)
                    
                    <br/>
                    <br/>

                    {/* San Joaquin County */}
                    <h4>San Joaquin County</h4>
                    &nbsp;&nbsp;- <a href='https://drive.google.com/drive/folders/1zACjKJs3Cpffc4CuJzwtGA_APEtwF9Ka?usp=share_link' target='_blank' rel='noreferrer'>Manteca</a>&nbsp;&nbsp;&nbsp;(City Storm Drain System PDF - Google Drive)
                </span>

                {/* Border To Separate Information */}
                <p className='border'></p>
                {/* Border To Separate Information */}

            </div>
        </>
    )
}

export default ZoneThreeUtils