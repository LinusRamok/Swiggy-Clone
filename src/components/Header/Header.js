import classNames from 'classnames'
import { LOGO_URL } from '../../Utils/Constants'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import css from './Header-tw-css'

const Header = () => {
    return (
        <div className={classNames(css.headerContainer, 'justify-center p-3 bg-green-100 shadow-xl')}>
            <img className={classNames(css.siteLogo,'h-20 rounded-md')} src={LOGO_URL}></img>
            <ul className='nav-container flex flex-wrap text-xl'>
                <li className='m-5'><Link to='/'>HOME</Link></li>
                <li className='m-5'><Link to='/about'>ABOUT</Link></li>
                <li className='m-5'><Link to='/contact'>CONTACT</Link></li>
                <li className='m-5'>CART</li>
            </ul> 
        </div>
    )
}

export default Header