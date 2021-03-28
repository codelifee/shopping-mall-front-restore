import React, { useEffect, useState } from "react";
import "./Search.css";
import { Link, useHistory } from "react-router-dom";
import SearchResult from "./SearchResult";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import axios from "./axios/axios";
import SearchIcon from "@material-ui/icons/Search";
import { useStateValue } from "./StateProvider/StateProvider";
import Cookies from "js-cookie";

function Sidebar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const [search, setSearch] = useState("");
  const [{ keyword }, keyword_dispatch] = useStateValue();
  const [products, setProducts] = useState([]);
  const history = useHistory();
  const [cookie, setCookie] = useState();

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
  return (
    <>
      <div
        style={{
          color: "#333",
          fontSize: "25px",
          marginLeft: "15px",
          marginTop: "10px",
        }}
      >
        <SearchIcon onClick={showSidebar} />
      </div>

      <nav className={sidebar ? "nav-menu2 active2" : "nav-menu2"}>
        <ul className="nav-menu-items2" onClick={!showSidebar}>
          <li className="navbar-toggle2">
            <Link to="#" className="menu-bars" onClick={showSidebar}>
              <AiIcons.AiOutlineClose />
            </Link>

            <input
              className="header__searchInput2"
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
              className="header__searchIcon2"
              onClick={() => {
                keyword_dispatch({
                  type: "SEARCH",
                  item: { word: search },
                });

                history.push(`/searchResult/${search}`);
              }}
            />
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Sidebar;
