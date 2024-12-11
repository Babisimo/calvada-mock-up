import React from "react";
import { Link } from "react-router-dom";

export default function Cities() {
    return (
        <div>
            <h1 className="title">Cities</h1>
            
            <div className="buttons">
                <Link to={'/cities/CACities'}><button>California Cities</button></Link>
                <Link to={'/cities/AZCities'}><button>Arizona Cities</button></Link>
                {/* <Link><button>Nevada Cities</button></Link> */}
                {/* <Link><button>Texas Cities</button></Link> */}
            </div>
        </div>
    )
}


