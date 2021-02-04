import React from 'react'
import Logo from './img/logo.png';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import './header.css'
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider/StateProvider';
import Sidebar from './sidebar/Sidebar'
import AllProducts from './sidebar/AllProducts'
import {auth} from  './configuration/firebase';


function Header() {
    const [{basket, user}, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if (user) {
         auth.signOut();
        }
    }

    return (
        <div className='header'>
             <Sidebar/>
            <Link to='/'>
                <img
                className='header__logo'
                src={Logo} alt=""/>
            </Link>
           
            <AllProducts/>
           
            <div className="header__search">
                <input 
                className="header__searchInput" 
                type="text"/>
                <SearchIcon className="header__searchIcon" />
            </div>

            <div className="header__nav">
               <Link to={!user && '/login'}>
                 <div onClick={handleAuthentication} className='header__option'>
                     <span className='header__optionLineOne'>
                         Hello {!user ? 'Guest' : user?.email}
                     </span>
                     <span className='header__optionLinetwo'>
                         {user ? 'Sign out' : 'Sign In'}
                     </span>
                 </div>
                 </Link>

                 <Link to="/seller">
                <div className='header__option'>
                    <span className='header__optionLineOne'>Returns</span>
                    <span className='header__optionLinetwo'>Orders</span>
                </div>
                </Link>
                <Link to="/seller">
                <div className='header__option'>
                    <span className='header__optionLineOne'>seller</span>
                    <span className='header__optionLinetwo'>Center</span>
                </div>
                </Link>
                <Link to='/checkout'>
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header__optionLineTwo header__basketCount">
                            {basket?.length}
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header;