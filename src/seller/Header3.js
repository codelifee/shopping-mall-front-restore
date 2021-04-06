import React, { useState, useEffect } from "react";
import "./Header3.css";
import { Link } from "react-router-dom";
import Sidebar3 from "./Sidebar3";
import Logo from "../img/logo.png";

function Header3() {
  return (
    <div className="header2_container">
      <div className="header2">
        <Sidebar3 />
        <div className="logo_title">
          <p className="header2_title">사업자 페이지</p>
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
export default Header3;
