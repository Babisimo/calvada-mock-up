import { Link } from 'react-router-dom'
import AzCountiesNavBar from './AzCountiesNavbar'

export default function Arizona() {
    return (
        <div>
            <div className='county-btn'>
                <Link to={'/counties'}><button>Back to Counties</button></Link>
                <h1 className='title'>Arizona Counties</h1>
            </div>

            {/* Border To Separate Information */}
            <p className='border'></p>
            {/* Border To Separate Information */}
            <AzCountiesNavBar />
        </div>
    )
}