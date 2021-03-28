import React from "react";
import "./DeleteProfile.css";
import DeleteProfileData from "./DeleteProfileData";

function DeleteProfile() {
  const { handleChange, confirmDelete, user } = DeleteProfileData();

  return (
    <div className="delete">
      <div className="delete__container">
        <div className="delete__container__head">
          <h1>회원 탈퇴</h1>
        </div>

        <form className="delete__search">
          <div className="delete__id">
            <label htmlFor="">아이디</label>
          </div>
          <div>
            <p>{user.user_id}</p>
          </div>

          <div className="delete_password">
            <label htmlFor="">비밀번호</label>
          </div>
          <div>
            <input
              className="delete__input"
              id="user_pwd"
              type="password"
              name="user_pwd"
              placeholder="Enter your password"
              onChange={handleChange}
            />
          </div>

          <div className="delete__name">
            <label htmlFor="">이름</label>
          </div>
          <div>
            <p>{user.user_name}</p>
          </div>
          <div className="delete__phone">
            <label htmlFor="">전화번호</label>
          </div>
          <div>
            <p>{user.user_phone}</p>
          </div>
          <div className="delete__address">
            <label htmlFor="">주소</label>
          </div>
          <div>
            <p>{user.user_address}</p>
          </div>
          <div></div>
          <button type="submit" className="deleteBtn" onClick={confirmDelete}>
            탈퇴
          </button>
        </form>
      </div>
    </div>
  );
}

export default DeleteProfile;
