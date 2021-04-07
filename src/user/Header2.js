import React, { useState, useEffect } from "react";
import "./header2.css";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar2";
import Logo from "../img/logo.png";

function Header2() {
  return (
    <div className="header2_container">
      <div className="header2">
        <Sidebar />
        <div className="logo_title">
          <p className="header2_title">회원 페이지</p>
          <div className="header2__logo">
            <a href="/home">
              <img className="header2__logo" src={Logo} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header2;
