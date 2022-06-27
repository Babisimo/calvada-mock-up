import React from "react"
import "../styles/stateStyle.css"
import California from "./California"
import Nevada from "./Nevada"

class States extends React.Component {

    render() {
        return(
            <div className="states">
                <nav className="navigator">
                    <ul>
                        <li className="state">
                            <a>California{<California />}</a>
                        </li>

                        <li className="state">
                            <a>Arizona{<California />}</a>
                        </li>

                        <li className="state">
                            <a>Texas{<California />}</a>
                        </li>

                        <li>
                            <a href={<Nevada />}>Nevada</a>
                        </li>
                    </ul>
                </nav>
             </div>
        )
    }
}

export default States