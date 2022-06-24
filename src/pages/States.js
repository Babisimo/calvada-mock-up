import React from "react"

const statesArr = ["California", "Arizona", "Texas", "Nevada"]

function RenderAlphStates() {
    statesArr.sort()
    for(let i = 0; i < statesArr.length; i++){
        return (
            <li>
                <a>{statesArr[i]}</a>
            </li>
        )        
    }

    
}

export default function States() { 
    return(
        <>
            <h1 className="statesTitle">States</h1>
            <nav className="states">
                <ul className="state" id="state">
                    <RenderAlphStates/>
                </ul>
            </nav>
        </>
    )
}