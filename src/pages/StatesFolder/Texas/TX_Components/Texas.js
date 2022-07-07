import TxCountiesNavBar from "./TxCountiesNavbar";
import { Link } from 'react-router-dom'

export default function Texas() {
    return (
        <div>
            <div className='county-btn'>
                <Link to={'/counties'}><button>Back to Counties</button></Link>
                <h1 className='title'>Texas Counties</h1>
            </div>

            {/* Border To Separate Information */}
            <p className='border'></p>
            {/* Border To Separate Information */}
            <TxCountiesNavBar />
        </div>
    )
}