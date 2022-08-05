import React from "react";

export default function Links() {
    return (
        <div>
            <h1 className="title">Links</h1>

            <div className="links">
                <div className="link">
                    <a href="https://msc.fema.gov/portal/home" target={"_blank"} rel="noreferrer">
                        <img
                            alt="FEMA"
                            src={'https://msc.fema.gov/portal/images/fema-logo-main.png'}
                            width="150px" >
                        </img>
                        FEMA
                    </a>
                </div>

                <div className="link">
                    <a href="https://www.ngs.noaa.gov/cgi-bin/ds_radius.prl" target={"_blank"} rel="noreferrer">
                        <img
                            alt="FEMA"
                            src={'https://www.ngs.noaa.gov/images/NGSimages/NGSbut.gif'}
                            width="60px">
                        </img>
                        BY POINT RADIUS
                    </a>
                </div>

                <div className="link">
                    <a href="https://www.ngdc.noaa.gov/geomag/calculators/magcalc.shtml" target={"_blank"} rel="noreferrer">
                        <img
                            alt="NOAA"
                            src={'https://www.ngdc.noaa.gov/image/nesdisngdcleft.gif'}
                        >
                        </img>
                        NOAA
                    </a>
                </div>

                <div className="link">
                    <a href="https://www.earthpoint.us/Townships.aspx" target={"_blank"} rel="noreferrer">
                        Township and Range - Public Land Survey System
                    </a>
                </div>

                <div className="link">
                    <a href="https://glorecords.blm.gov/search/default.aspx" target={"_blank"} rel="noreferrer">
                        <img
                            alt="BEREAU"
                            src={'https://glorecords.blm.gov/images/blm_banner_home_abbreviated.png'}
                            width={'420px'}
                            height={'40px'}
                        >
                        </img>
                        Bureau Of Land Management
                    </a>
                </div>

                <div className="link">
                    <a href="https://dna.firstam.com/property-research" target={"_blank"} rel="noreferrer">
                        <img
                            alt="DATATREE"
                            src={'https://dna.firstam.com/hubfs/_Logos/dna-logo.svg'}
                            height={'50px'}
                        >
                        </img>
                        DATATREE
                    </a>
                </div>

                <div className="link">
                    <a href="https://www.courthousedirect.com/" target={"_blank"} rel="noreferrer">
                        <img
                            alt="Courthouse Direct"
                            src={'https://www.courthousedirect.com/images/newlook_2012/logo.png'}
                            width={'250px'}
                        >
                        </img>
                        Courthouse Direct
                    </a>
                </div>

                <div className="link">
                    <a href="https://camapsource.com/" target={"_blank"} rel="noreferrer">
                        <img
                            alt="Courthouse Direct"
                            src={'https://camapsource.com/wp-content/uploads/2019/12/CA-Map-Source_Logo-Small-PNG.png'}
                            width={'250px'}
                        >
                        </img>
                        CA Map Source
                    </a>
                </div>

                <div className="link">
                    <a href="http://keithwspencer.net/Library/Library.shtml" target={"_blank"} rel="noreferrer">
                        <img alt="California Land Surveyors Association"
                            src={'http://keithwspencer.net/images/EF_Logo-x-Sml.jpg'}
                            width="280px">
                        </img>
                        CLSA
                    </a>
                </div>

                <div className="link">
                    <a href="https://ngmdb.usgs.gov/ngmdb/ngmdb_home.html" target={"_blank"} rel="noreferrer">
                        <img alt="National Geologic Map Database"
                            src={'https://www.usgs.gov/themes/custom/usgs_tantalum/usgs_logo.png'}
                            width="280px">
                        </img>
                        USGS
                    </a>
                </div>


                <div className="link">
                    <a href="https://www.conservation.ca.gov/cgs/geohazards/eq-zapp" target={"_blank"} rel="noreferrer">
                        <img alt="Department of Conservation"
                            src={'https://www.conservation.ca.gov/_catalogs/masterpage/DOC/images/DOC-logo-mobile.svg'}
                            width="280px">
                        </img>
                        EQ Zapp
                    </a>
                </div>

                {/* 
                */}

            </div>
        </div >
    )
}