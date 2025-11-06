import React from "react"

import AzCountiesNavBar from "./arizona/components/AzCountiesNavbar"
import CaCountiesNavBar from './california/components/CaCountiesNavBar'
import NvCountiesNavBar from './nevada/components/NvCountiesNavbar'
import TxCountiesNavBar from './texas/components/TxCountiesNavbar'
import WaCountiesNavBar from './washington/components/WaCountiesNavbar'

export default function StatesNavBar() {
    return (
        <div className="county">
            {/* Arizona */}
            <div className="dropdown">
                <button className="dropbtn">Arizona</button>
                <div className="dropdown-content">
                    <AzCountiesNavBar />
                </div>
            </div>

            {/* California */}
            <div className="dropdown">
                <button className="dropbtn">California</button>
                <div className="dropdown-content">
                    <CaCountiesNavBar />
                </div>
            </div>

            {/* Nevada */}
            <div className="dropdown">
                <button className="dropbtn">Nevada</button>
                <div className="dropdown-content">
                    <NvCountiesNavBar />
                </div>
            </div>

            {/* Texas */}
            <div className="dropdown">
                <button className="dropbtn">Texas</button>
                <div className="dropdown-content">
                    <TxCountiesNavBar />
                </div>
            </div>

            {/* Washington */}
            <div className="dropdown">
                <button className="dropbtn">Washington</button>
                <div className="dropdown-content">
                    <WaCountiesNavBar />
                </div>
            </div>

        </div>
    )
}
