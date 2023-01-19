import React from "react";

import "../../styles/links.css";

export default function Links() {
  return (
    <div className="block">
      <h1 className="title">Links</h1>

      <div className="links">
        {/* FEMA */}
        <CustomLink
          link="https://msc.fema.gov/portal/home"
          linkName="FEMA"
          hasImage="true"
          imgAlt="FEMA-logo"
          imgSrc="https://msc.fema.gov/portal/images/fema-logo-main.png"
          imgWidth="130px"
        />

        {/* By Point Radius */}
        <CustomLink
          link="https://www.ngs.noaa.gov/cgi-bin/ds_radius.prl"
          linkName="BY POINT RADIUS"
          hasImage="true"
          imgAlt="BPR-logo"
          imgSrc="https://www.ngs.noaa.gov/images/NGSimages/NGSbut.gif"
          imgWidth="40px"
        />

        {/* Magnetic Field Calculator */}
        <CustomLink
          link="https://www.ngdc.noaa.gov/geomag/calculators/magcalc.shtml"
          linkName="Magnetic Field Calculators"
          hasImage="true"
          imgAlt="ngdc-logo"
          imgSrc="https://www.ngdc.noaa.gov/image/nesdisngdcleft.gif"
          imgWidth="280px"
        />

        {/* Township and Range */}
        <CustomLink
          link="https://www.earthpoint.us/Townships.aspx"
          linkName="Township and Range - Public Land Survey System"
          hasImage="false"
          // imgSrc='https://www.freepnglogos.com/uploads/globe-png/blue-globe-transparent-sporetesting-39.png'
          // imgAlt='earthpoint-logo'
          // imgWidth='50px'
        />

        {/* BLM */}
        <CustomLink
          link="https://glorecords.blm.gov/default.aspx"
          linkName="Bureau Of Land Management"
          hasImage="true"
          imgAlt="Bureau-logo"
          imgSrc="https://glorecords.blm.gov/images/blm_banner_home_abbreviated.png"
          imgWidth="440px"
          imgHeight="40px"
        />

        {/* Data Tree */}
        <CustomLink
          link="https://web.datatree.com/Account/Login?ReturnUrl=%2F#/home"
          linkName="DATATREE"
          hasImage="true"
          imgAlt="DATATREE-logo"
          imgSrc="https://dna.firstam.com/hubfs/_Logos/dna-logo.svg"
          imgWidth="250px"
        />

        {/* Couthouse District */}
        <CustomLink
          link="https://www.courthousedirect.com/"
          linkName="Courthouse Direct"
          hasImage="true"
          imgAlt="Courthouse Direct-logo"
          imgSrc="https://www.courthousedirect.com/images/newlook_2012/logo.png"
          imgWidth="250px"
        />

        {/* CA Map Source */}
        <CustomLink
          link="https://camapsource.com/"
          linkName="CA Map Source"
          hasImage="true"
          imgAlt="CA Map Source-logo"
          imgSrc="https://camapsource.com/wp-content/uploads/2019/12/CA-Map-Source_Logo-Small-PNG.png"
          imgWidth="180px"
        />

        {/* Surveying Books */}
        <CustomLink
          link="http://keithwspencer.net/Library/Library.shtml"
          linkName="Surveying Books"
          hasImage="true"
          linkAlt="California Land Surveyors Association-logo"
          imgSrc="http://keithwspencer.net/images/EF_Logo-x-Sml.jpg"
          imgWidth="180px"
        />

        {/* National Geologic Map Database */}
        <CustomLink
          link="https://ngmdb.usgs.gov/ngmdb/ngmdb_home.html"
          linkName="NGMD"
          hasImage="true"
          linkAlt="National Geologic Map Database-logo"
          imgSrc="https://ngmdb.usgs.gov/dev/img/usgsLogo.svg"
          imgWidth="180px"
        />

        {/* EQ Zapp */}
        <CustomLink
          link="https://www.conservation.ca.gov/cgs/geohazards/eq-zapp"
          linkName="EQ Zapp"
          hasImage="true"
          linkAlt="Department of Conservation-logo"
          imgSrc="https://www.conservation.ca.gov/_catalogs/masterpage/DOC/images/DOC-logo-mobile.svg"
          imgWidth="180px"
        />
      </div>
    </div>
  );
}

function CustomLink(props) {
  return (
    <div className="link">
      <a href={props.link} target={"_blank"} rel="noreferrer">
        {props.hasImage
          ? "true" && (
              <img
                alt={props.imgAlt}
                src={props.imgSrc}
                width={props.imgWidth}
                height={props.imgHeight}
              />
            )
          : "false" && null}
        {props.linkName}
      </a>
    </div>
  );
}
