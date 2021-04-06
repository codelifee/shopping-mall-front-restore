import React, { useEffect, useState } from "react";
import "./Sidebar3.css";
import { Link, useParams } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { IconContext } from "react-icons";
import {
  FaShoppingBag,
  FaChair,
  FaUserCog,
  FaCaretDown,
  FaQuestion,
} from "react-icons/fa";

function Sidebar3() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

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
          <li className="navbar-toggle3">
            <Link to="#" className="menu-bars">
              <AiIcons.AiOutlineClose />
            </Link>
          </li>
          <li className="user_menu3">
            <h2 className="big_menu3">
              <FaChair className="iconsize3" />
              Product
              <FaCaretDown />
            </h2>

            <Link to="/seller/product">
              <p className="small_menu">My Products</p>
            </Link>
            <Link to="/seller/addProduct">
              <p className="small_menu">Add New Product</p>
            </Link>

            <h2 className="big_menu3">
              <FaShoppingBag className="iconsize3" />
              Order
              <FaCaretDown />
            </h2>

            <Link to="/seller/order">
              <p className="small_menu">주문 내역 관리</p>
            </Link>

            <h2 className="big_menu3">
              <FaUserCog className="iconsize3" />
              User
              <FaCaretDown />
            </h2>

            <Link to="/seller/user">
              <p className="small_menu">Check Users</p>
            </Link>

            <h2 className="big_menu3">
              <FaQuestion className="iconsize3" />
              Answers
              <FaCaretDown />
            </h2>

            <Link to="/seller/answerYetCategory">
              <p className="small_menu">답변 미완료</p>
            </Link>

            <Link to="/seller/answeredCategory">
              <p className="small_menu">답변 완료</p>
            </Link>
          </li>
        </ul>
      </nav>
    </IconContext.Provider>
  );
}

export default Sidebar3;
