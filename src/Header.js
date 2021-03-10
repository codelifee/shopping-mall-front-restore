import React, { useState, useEffect } from 'react';
import Logo from './img/logo.png';
import Log from './img/log.png';
import SearchIcon from '@material-ui/icons/Search';
import SearchResult from './SearchResult';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import './header.css';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider/StateProvider';
import Sidebar from './sidebar/Sidebar';
import AllProducts from './sidebar/Sidebar';
import { auth } from './configuration/firebase';
import Login from './authentication/Login';
import { useHistory } from 'react-router-dom';
import axios from './axios/axios';

function Header() {

  const [{ basket, user }, dispatch] = useStateValue();

  const [{ keyword }, keyword_dispatch] = useStateValue();

  const [search, setSearch] = useState('');

  const history = useHistory();

  const handleAuthentication = () => {
    if (user.loggedIn != '') {
      dispatch({ type: 'SET_USER', user: {} });
    }
  };

  console.log(search);

  return (
    <div className="header_container">
      <div className="header">
        <Sidebar />

        <div className="header__search">
          <input
            className="header__searchInput"
            type="text"
            placeholder="검색"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                keyword_dispatch({
                  type: 'SEARCH',
                  item: { word: search },
                });
                history.push(`/searchResult/${search}`);
              }
            }}
          />

          <SearchIcon
            className="header__searchIcon"
            onClick={() => {
              keyword_dispatch({
                type: 'SEARCH',
                item: { word: search },
              });

              history.push(`/searchResult/${search}`);
            }}
          />
        </div>

        <div className="log_name_wap">
          <Link to="/home">
            <img className="header__logo" src={Logo} alt="" />
          </Link>

          <Link to="/home">
            <p className="logo_name">ChenJiYeon</p>
          </Link>
        </div>

        <div className="header__nav">
          <Link to={'/login'}>
            <div onClick={handleAuthentication} className="header__option">
              <span className="header__optionLineOne">
                Hello{' '}
                {user.loggedIn == ''
                  ? 'Guest'
                  : user.loggedIn == 'user'
                  ? user?.user_id
                  : 'Admin'}
              </span>
              <span className="header__optionLinetwo">
                {user.loggedIn == '' ? 'Sign In' : 'Sign Out'}
              </span>
            </div>
          </Link>

          <Link to="/seller">
            <div className="header__option">
              <span className="header__optionLineOne">Seller</span>
              <span className="header__optionLinetwo">Center</span>
            </div>
          </Link>

          <Link to="/user">
            <div className="header__option">
              <span className="header__optionLineOne">Returns</span>
              <span className="header__optionLinetwo">Orders</span>
            </div>
          </Link>
          <Link to="/checkout">
            <div className="header__optionBasket">
              <ShoppingBasketIcon />
              <span className="header__optionLineTwo header__basketCount">
                {basket?.length}
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Header;
