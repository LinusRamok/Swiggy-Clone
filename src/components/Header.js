import { LOGO_URL } from '../Utils/Constants'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="header-container">
            <img className='site-logo' src={LOGO_URL}></img>
            <ul className='nav-container'>
                <li><Link to='/'>HOME</Link></li>
                <li><Link to='/about'>ABOUT</Link></li>
                <li><Link to='/contact'>CONTACT</Link></li>
                <li>CART</li>
            </ul> 
        </div>
    )
}

export default Header