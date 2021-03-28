import React, { useEffect, useState } from "react";
import "./Sidebar2.css";
import { Link, useParams } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { IconContext } from "react-icons";
import { FaShoppingBag, FaUserCog, FaCaretDown } from "react-icons/fa"; //FaChair,

function Sidebar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const { user_sequence_id } = useParams();
  return (
    <IconContext.Provider value={{ color: "#333" }}>
      <div
        style={{
          color: "#333",
          fontSize: "25px",
          marginLeft: "15px",
          marginTop: "10px",
        }}
      >
        <FaIcons.FaBars onClick={showSidebar} />
      </div>

      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <div>
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </div>
          </li>
          <li className="user_menu">
            <div>
              <h2 className="big_menu">
                <FaShoppingBag className="iconsize" />
                주문내역
                <FaCaretDown />
              </h2>
              <div>
                <Link to={`/user/order/${user_sequence_id}`}>
                  <p className="small_menu">나의 주문내역</p>
                </Link>
              </div>

              <h2 className="big_menu">
                <FaUserCog className="iconsize" />
                회원
                <FaCaretDown />
              </h2>

              <div>
                <Link to={`/user/updateprofile/${user_sequence_id}`}>
                  <p className="small_menu">회원 정보 수정</p>
                </Link>
                <Link to={`/user/deleteprofile/${user_sequence_id}`}>
                  <p className="small_menu">회원 탈퇴</p>
                </Link>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </IconContext.Provider>
  );
}

export default Sidebar;
