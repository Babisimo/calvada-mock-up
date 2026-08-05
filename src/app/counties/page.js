import React from "react";
import StatesNavBar from '../../components/StatesNavBar';

export const metadata = {
    title: 'Counties',
    description:
        'County research pages for California, Arizona, Nevada, Texas, and Washington.',
};

export default function Counties() {
    return(
        <div>
            <h1 className="title">Counties</h1>
            <StatesNavBar />
        </div>
    )
}
