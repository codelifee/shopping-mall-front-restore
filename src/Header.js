import React, { useState, useEffect } from 'react';
import Logo from './img/logo.png';
import SearchIcon from '@material-ui/icons/Search';
import SearchResult from './SearchResult';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import './header.css';
import { Link, Redirect } from 'react-router-dom';
import { useStateValue } from './StateProvider/StateProvider';
import Sidebar from './sidebar/Sidebar';
import AllProducts from './sidebar/Sidebar';
import { auth } from './configuration/firebase';
import Login from './authentication/Login';
import { useHistory } from 'react-router-dom';
import axios from './axios/axios';
import { faVestPatches } from '@fortawesome/free-solid-svg-icons';
import Cookies from "js-cookie";


function Header() {


  const [products, setProducts] = useState([]);
  const [{ basket, user }, dispatch] = useStateValue();

  const [{ keyword }, keyword_dispatch] = useStateValue();
  const [cookie, setCookie] = useState();

  const [search, setSearch] = useState('');

  const history = useHistory();

  const getCookie = () => {
    const cookie = Cookies.get("user");

    console.log(cookie);

    setCookie(cookie);
  }

  useEffect(() => {

    getCookie();

    async function getSearchItem() {
      const request = await axios
        .get(`products/all`)
        .then((response) => setProducts(response.data))
        .catch((error) => console.log(error));

      return request;
    }

    getSearchItem();

  
  }, []);

  
  const handleLogout = () => {
    Cookies.remove("user");

    window.location.reload(false)
  }
  
  console.log(Cookies.get("user"));
  console.log(cookie)


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
        </div>

        <div className="header__nav">
            <div className="header__option">
              <span className="header__optionLineOne">
                Hello
                {cookie == 6 ? 
                'Admin'
                  : 'Guest'}
              </span>
              {!cookie ? 
              <Link to="/login" className="header__optionLinetwo">
                Sign In
              </Link>
              :
              <span onClick={handleLogout} className="header__optionLinetwo">
                Sign Out
              </span>
              }
            </div>

          {cookie == 6 ?

          <Link to="/seller">
            <div className="header__option">
              <span className="header__optionLineOne">Admin</span>
              <span className="header__optionLinetwo">Center</span>
            </div>
          </Link>
          
          :
          
          <></>
          
          }

          {cookie && cookie != 6? 
          <Link to={`/user/${cookie}`}>
          <div className="header__option">
            <span className="header__optionLineOne">Users</span>
            <span className="header__optionLinetwo">Orders</span>
          </div>
        </Link>
        :
        <></>
          }

          

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
