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

        {/* NGS Benchmarks */}
        <CustomLink
          link="https://noaa.maps.arcgis.com/apps/webappviewer/index.html?id=190385f9aadb4cf1b0dd8759893032db"
          linkName="NGS Benchmarks"
          hasImage="true"
          imgAlt="NGS-logo"
          imgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/NOAA_logo.svg/1200px-NOAA_logo.svg.png"
          imgWidth="60px"
        />

        {/* LS Lookup */}
        <CustomLink
          link="https://search.dca.ca.gov/?BD=31"
          linkName="LS Lookup"
          hasImage="true"
          linkAlt="DCA Search"
          imgSrc="https://search.dca.ca.gov/images/dcasearch.png"
          imgWidth="180px"
        />

        {/* CalTrans ROW Contacts */}
        <CustomLink
          link="https://dot.ca.gov/programs/right-of-way/rw-maps-surveys-records"
          linkName="Caltrans ROW Contacts"
          hasImage="true"
          imgAlt="BPR-logo"
          imgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Caltrans.svg/1200px-Caltrans.svg.png"
          imgWidth="80px"
        />

        {/* Irvine Ranch Water District */}
        <CustomLink
          link="https://irwdchmap.irwd.com/MPSvc/mp/index.html?si=true&de=research.calvada@outlook.com"
          linkName="Irvine Ranch Water District GIS"
          hasImage="true"
          imgAlt="IRWD Logo"
          imgSrc="https://www.irwd.com//templates/irwd/images/logo.png"
          imgWidth="160px"
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

        {/* Google Sheet for Research Contacts */}
        <CustomLink
          link="https://docs.google.com/spreadsheets/d/1OIIkwJlWT1OTXHB9fdcxXAbAQba1-S5LivrMZWDlypY/edit?usp=sharing"
          linkName="Research Contacts"
          hasImage="true"
          linkAlt="Google Sheet"
          imgSrc="https://mailmeteor.com/logos/assets/PNG/Google_Sheets_Logo_512px.png"
          imgWidth="30px"
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

        {/* SoCal California Edison Lines */}
        <CustomLink
          link="https://www.arcgis.com/apps/webappviewer/index.html?id=05a84ec9d19f43ac93b451939c330888"
          linkName="SoCal California Edison Lines"
          hasImage="true"
          linkAlt="SoCal Edison Lines"
          imgSrc="https://skipsolabs-california-energy-challenge.s3.amazonaws.com/frontend/section/organization/7880/5f070c781a15d5667169.png"
          imgWidth="100px"
        />

        {/* NAFAC SW Cadestral Requirements */}
        <CustomLink
          link="https://drive.google.com/file/d/145tLOzCwhSI-aUsyO6uVuyvdcZY0wDVN/view?usp=drive_link"
          linkName="NAVFAC Requirements For Surveying"
          hasImage="false"
          imgAlt="PDF"
          imgSrc="https://png.pngtree.com/png-clipart/20220612/original/pngtree-pdf-file-icon-png-png-image_7965915.png"
          imgWidth="50px"
        />

        {/* SCE CAD File Requirements */}
        <CustomLink
          link="https://drive.google.com/file/d/14NvCvl2oF4ENSaps8TGDfTSPiKb5yCRM/view?usp=sharing"
          linkName="SCE CAD File Requirements"
          hasImage="false"
          imgAlt="PDF"
          imgSrc="https://png.pngtree.com/png-clipart/20220612/original/pngtree-pdf-file-icon-png-png-image_7965915.png"
          imgWidth="50px"
        />

        {/* City & County of San Francisco*/}
        <CustomLink
          link="https://drive.google.com/file/d/1mgx4XauVAvNRPFU7cP0xVItG4HZK3hak/view?usp=drive_link"
          linkName="San Francisco 2013 Vertical Datum SFVD13 Storrs McGee"
          hasImage="false"
          imgAlt="PDF"
          imgSrc="https://png.pngtree.com/png-clipart/20220612/original/pngtree-pdf-file-icon-png-png-image_7965915.png"
          imgWidth="50px"
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
