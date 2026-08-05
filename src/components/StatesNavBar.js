"use client"
import React from "react"

import Dropdown from "./Dropdown"
import AzCountiesNavBar from "./AzCountiesNavbar"
import CaCountiesNavBar from './CaCountiesNavBar'
import NvCountiesNavBar from './NvCountiesNavbar'
import TxCountiesNavBar from './TxCountiesNavbar'
import WaCountiesNavBar from './WaCountiesNavbar'

const STATES = [
    { name: "Arizona", Counties: AzCountiesNavBar },
    { name: "California", Counties: CaCountiesNavBar },
    { name: "Nevada", Counties: NvCountiesNavBar },
    { name: "Texas", Counties: TxCountiesNavBar },
    { name: "Washington", Counties: WaCountiesNavBar },
]

export default function StatesNavBar() {
    return (
        <div className="county">
            {STATES.map(({ name, Counties }) => (
                <Dropdown key={name} label={name}>
                    <Counties />
                </Dropdown>
            ))}
        </div>
    )
}
