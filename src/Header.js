import React, {Component} from 'react'
import Logo from './img/logo.png';
import Log from './img/log.png';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import './header.css'
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider/StateProvider';
import Sidebar from './sidebar/Sidebar'
import AllProducts from './sidebar/Sidebar'
import {auth} from  './configuration/firebase';
import {connect} from 'react-redux';
import {logoutUser} from './services/index';
import Login from './authentication/Login';

//class Header extends Component{
function Header() {
    // logout = () => {
    //     this.props.logoutUser();
    // };

    //render() {
        const [{basket, user}, dispatch] = useStateValue();

        const {loggedIn, values, signOut} = Login();

        const handleAuthentication = () => {
            if (!(loggedIn==null)) {
                signOut();
            }
        }

        const guestLinks = (
            <>
            <Link to="/loginForm">
                <div className='header__option'>
                    <span className='header__optionLineOne'>Please</span>
                    <span className='header__optionLinetwo'>Log In</span>
                </div>
            </Link>  
            </> 
        );

        const userLinks = (
            <>
            {/* <Link to="/home" onClick={this.logout}>
                <div className='header__option'>
                    <span className='header__optionLineOne'>Goodbye</span>
                    <span className='header__optionLinetwo'>Log Out</span>
                </div>
            </Link>  */}

            <Link to="/seller">
                    <div className='header__option'>
                        <span className='header__optionLineOne'>Returns</span>
                        <span className='header__optionLinetwo'>Orders</span>
                    </div>
                    </Link>

            <Link to='/checkout'>
                <div className="header__optionBasket">
                    <ShoppingBasketIcon />
                    <span className="header__optionLineTwo header__basketCount">
                        {/* {basket?.length} */}
                    </span>
                </div>
            </Link>
            </>
        );

        const adminLinks = (
            <>
                {/* <Link to="/home" onClick={this.logout}>
                    <div className='header__option'>
                        <span className='header__optionLineOne'>Goodbye</span>
                        <span className='header__optionLinetwo'>Log Out</span>
                    </div>
                </Link>  */}
                    
                    <Link to="/seller">
                        <div className='header__option'>
                            <span className='header__optionLineOne'>seller</span>
                            <span className='header__optionLinetwo'>Center</span>
                        </div>
                    </Link>
            </>
        );

        return (
            <div className='header_container'>
                <div className='header'>
               < Sidebar/>

                <div className="header__search">
                    <input 
                    className="header__searchInput" 
                    type="text"/>
                    <SearchIcon className="header__searchIcon" />
                </div>
                <div className="log_name_wap">
                <Link to='/home'>
                    <img
                    className='header__logo'
                    src={Logo} alt=""/>
                </Link>

                <Link to="/home"><p className="logo_name">ChenJiYeon</p></Link>
                </div>

                <div className="header__nav">  
                    {/* {this.props.auth.isLoggedIn ? userLinks:guestLinks} */}
                    
                    <Link to={!values && '/login'}>
                        <div onClick={handleAuthentication} className='header__option'>
                            <span className='header__optionLineOne'>
                                Hello {!values ? 'Guest' : values?.user_id}
                            </span>
                            <span className='header__optionLinetwo'>
                                {values ? 'Sign out' : 'Sign In'}
                            </span>
                        </div>
                    </Link> 
                    
                    <Link to="/seller">
                        <div className='header__option'>
                            <span className='header__optionLineOne'>seller</span>
                            <span className='header__optionLinetwo'>Center</span>
                        </div>
                    </Link>
                    <Link to="/seller">
                    <div className='header__option'>
                        <span className='header__optionLineOne'>Returns</span>
                        <span className='header__optionLinetwo'>Orders</span>
                    </div>
                    </Link>
                    <Link to='/checkout'>
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header__optionLineTwo header__basketCount">
                            {/* {basket?.length} */}
                        </span>
                    </div>
                    </Link>
                    </div>
                </div>
            </div>
        )
    };
//};

// const mapStateProps = state => {
//     return {
//         auth:state.auth
//     }
// };

// const mapDispatchToProps = dispatch => {
//     return {
//         logoutUser:() => dispatch(logoutUser())
//     };
// };

// export default connect(mapStateProps, mapDispatchToProps)(Header);
export default Header;