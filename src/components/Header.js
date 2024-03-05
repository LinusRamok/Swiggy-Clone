import { LOGO_URL } from '../Utils/Constants'

const Header = () => {
    return (
        <div className="header-container">
            <img className='site-logo' src={LOGO_URL}></img>
            <ul className='nav-container'>
                <li>HOME</li>
                <li>ABOUT</li>
                <li>CONTACT</li>
                <li>CART</li>
            </ul> 
        </div>
    )
}

export default Header