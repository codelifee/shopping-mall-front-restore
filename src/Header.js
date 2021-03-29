import React, { useState, useEffect } from "react";
import Logo from "./img/logo.png";
import SearchIcon from "@material-ui/icons/Search";
import SearchResult from "./SearchResult";
import Search from "./Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import "./header.css";
import { Link, Redirect, useParams, useHistory } from "react-router-dom";
import { useStateValue } from "./StateProvider/StateProvider";
import Sidebar from "./sidebar/Sidebar";
import AllProducts from "./sidebar/Sidebar";
import { auth } from "./configuration/firebase";
import Login from "./authentication/Login";
import axios from "./axios/axios";
import { faVestPatches } from "@fortawesome/free-solid-svg-icons";
import Cookies from "js-cookie";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import RoomIcon from '@material-ui/icons/Room';

function Header() {
  const [products, setProducts] = useState([]);
  const [{ basket, user }, dispatch] = useStateValue();

  const [{ keyword }, keyword_dispatch] = useStateValue();
  const [cookie, setCookie] = useState();

  const [search, setSearch] = useState("");

  const history = useHistory();

  const { id } = useParams();

  const getCookie = () => {
    const cookie = Cookies.get("user");

    console.log(cookie);

    setCookie(cookie);
  };

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

    window.location.reload(false);
  };

  return (
    <div className="header_container">
      <div className="header">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="header__search2">
          <Search />
        </div>
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
              if (e.key === "Enter") {
                keyword_dispatch({
                  type: "SEARCH",
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
                type: "SEARCH",
                item: { word: search },
              });

              history.push(`/searchResult/${search}`);
            }}
          />
        </div>

        <div className="header__logo">
          <Link to="/home">
            <img className="header__logo" src={Logo} alt="" />
          </Link>
        </div>


        <div className="header__option">
          <ul className="header__option__navi">
            <li className="header_li">
              <Link to="/introduction" className="header__optionLinetwo">오시는 길
              </Link>
            </li>


            <li className="header_li">
              {!cookie && (<Link to="/signup" className="header__optionLinetwo">
                회원가입 <span className="header__stick"> |</span>
              </Link>
              )}
            </li>
<>
            {cookie && cookie != 6 &&

              <li className="header_li">
                <Link to={`/checkout/${id}`} className="header__optionLinetwo">장바구니
                    <span className="header__basketCount">
                    {basket?.length}</span> <span className="header__stick"> |</span>

                </Link>

              </li>}</>

            <li className="header_li">

              {cookie == 6 ? (
                <Link to="/seller" className="header__optionLineTwo">
                  관리자페이지&nbsp;&nbsp;<span className="header__stick"> |</span>
                </Link>
              ) : (
                <></>
              )}

              {cookie && cookie != 6 &&
                <Link to={`/user/${cookie}`} className="header__optionLineTwo">
                  마이웰빙즙 <span className="header__stick">&nbsp; &nbsp;|</span>
                </Link>

              }
            </li>

            <li className="header_li">
              {!cookie ? (
                <Link to="/login" className="header__optionLinetwo">
                  로그인 <span className="stick"> | </span>
                </Link>
              ) : (
                <span onClick={handleLogout} className="header__optionLinetwo">
                  로그아웃 <span className="header__stick"> | </span> </span>

              )}
            </li>

            <li className="header_li">
              <span className="header__optionLineTwo">

                {cookie ? ((cookie == 6 ? "Admin" : cookie + "님")) : (<></>)}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Header;
