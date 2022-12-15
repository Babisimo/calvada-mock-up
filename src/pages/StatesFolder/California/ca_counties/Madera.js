import React from "react";
import { Link } from "react-router-dom";
import District6 from "../CaltransDistricts/District6";

export default function Madera() {
  return (
    <div className="county-info">
      <div className="county-btn">
        <Link to={"/counties"}>
          <button>Back to Counties</button>
        </Link>
        <h1 className="title">Madera County</h1>
      </div>

      {/* Border To Separate Information */}
      <p className="border"></p>
      {/* Border To Separate Information */}

      <span className="span">
        <h3>Links:</h3>
        <a href="https://www.mediafire.com/folder/585bqldhpvykm//Madera" target={"_blank"} rel="noreferrer">
          Recorded Maps
        </a>

        <br />

        <a
          href="https://www.maderacounty.com/government/public-works/county-surveyor-s-office/corner-records"
          target={"_blank"}
          rel="noreferrer"
        >
          Corner Records
        </a>

        <br />

        <a
          href="https://www.mediafire.com/folder/vn18z4v44ndj9/BLM"
          target={"_blank"}
          rel="noreferrer"
        >
          GLO Maps
        </a>
      </span>

      {/* Border To Separate Information */}
      <p className="border"></p>
      {/* Border To Separate Information */}

      <span className="span">
        <h3>Caltrans:</h3>
        <District6 />
      </span>

      {/* Border To Separate Information */}
      <p className="border"></p>
      {/* Border To Separate Information */}
    </div>
  );
}
