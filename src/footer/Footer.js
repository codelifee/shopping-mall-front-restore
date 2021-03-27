import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="main_footer">
      <div className="footer_ul"></div>

      <p className="footer_col_copy">
        상호: 웰빙즙 | 대표: 정수민 | 개인정보관리책임자: 정수민 |<br /> 전화:
        010-2402-7119 | 이메일: suminjung09@gmail.com
        <br />
        주소: 강원도 춘천시 남산면 방하리 108 |
      </p>
    </div>
  );
}

export default Footer;
