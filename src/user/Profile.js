import React, { useState, useEffect } from "react";
import "./Profile.css";
import axios from "../axios/axios";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

function Profile() {
  const [user, setUser] = useState([]);
  const cookie = Cookies.get('user');
  const token = Cookies.get('jwt');

  useEffect(() => {
    async function getUser() {
      const request = await axios
      .get(`users/${cookie}`,
        {
            headers: {
            "Authorization" : `Bearer ${token}`
            }
        })
    .then(res => setUser(res.data))
    .catch(err => console.log(err));

      return request;
    }
    getUser();
   
  }, []);

  return (
    <div className="profile">
      <div className="profile__container">
        <div className="profile__container__head">
          <h1>회원 정보</h1>
        </div>
        <div className="profile__search">
          <div className="profile__id">
            <label htmlfor="">아이디</label>
          </div>
          <div>
            <p>{user.user_id}</p>
          </div>
          <div className="profile__name">
            <label htmlfor="">이름</label>
          </div>
          <div>
            <p>{user.user_name}</p>
          </div>
          <div className="profile__phone">
            <label htmlfor="">전화번호</label>
          </div>{" "}
          <div>
            <p>{user.user_phone}</p>
          </div>
          <div className="profile__address">
            <label htmlfor="">주소</label>
          </div>
          <div>
            <p>{user.user_address}</p>
          </div>
          <div></div>
          <Link to={`/user/updateprofile/${cookie}`}>
            <button className="update">회원 정보 수정</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Profile;
