import React from "react";
import Link from "next/link";

export const metadata = {
    title: 'Cities',
    description:
        'City research links by state — California, Arizona, Washington, and Nevada.',
};

export default function Cities() {
    return (
        <div>
            <h1 className="title">Cities</h1>
            
            <div className="buttons">
                <Link href={'/cities/CACities'}><button>California Cities</button></Link>
                <Link href={'/cities/AZCities'}><button>Arizona Cities</button></Link>
                <Link href={'/cities/WACities'}><button>Washington Cities</button></Link>
                <Link href={'/cities/NVCities'}><button>Nevada Cities</button></Link>
            </div>
        </div>
    )
}
