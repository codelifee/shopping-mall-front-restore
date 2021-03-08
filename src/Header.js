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
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getSearchItem() {
      const request = await axios
        .get(`products/all`)
        .then((response) => setProducts(response.data))
        .catch((error) => console.log(error));

      return request;
    }

    getSearchItem();
  }, []);

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
                history.push('/searchResult');
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

              history.push('/searchResult');
            }}
          />
        </div>

        <div className="log_name_wap">
          <Link to="/home">
            <img className="header__logo" src={Logo} alt="" />
          </Link>

          <Link to="/seller">
            <div className="header__option">
              <span className="header__optionLineOne">seller</span>
              <span className="header__optionLinetwo">Center</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Header;
// connect(mapStateProps, mapDispatchToProps);
