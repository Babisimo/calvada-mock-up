import React from "react"

import AzCountiesNavBar from "./Arizona/AZ_Components/AzCountiesNavbar"
import CaCountiesNavBar from './California/CA_Components/CaCountiesNavBar'
import NvCountiesNavBar from './Nevada/NV_Components/NvCountiesNavbar'
import TxCountiesNavBar from './Texas/TX_Components/TxCountiesNavbar'

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
        </div>
    )
}
