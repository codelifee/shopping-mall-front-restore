import React, { useState, useEffect } from "react";
import "./Header3.css";
import { Link } from "react-router-dom";
import Sidebar3 from "./Sidebar3";
import Logo from "../img/logo.png";

function Header3() {
  return (
    <div className="header3_container">
      <div className="header3">
        <Sidebar3 />
        <div className="logo_title">
          <p className="header3_title">사업자 페이지</p>
          <div className="header3__logo">
            <a href="/home">
              <img className="header3__logo" src={Logo} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header3;
