import React from "react";
import "./UpdateProfile.css";
import UpdateProfileData from "./UpdateProfileData";
import Validate from "./ValidateInfo";

function UpdateProfile({ submitForm }) {
  const {
    handleChange,
    form,
    handleSubmit,
    errors,
  } = UpdateProfileData(submitForm, Validate);

  return (
    <div className="updateProfile">
      <div className="updateProfile__container">
        <div className="updateProfile__container__head">
          <h1 className="title">회원 정보 수정</h1>
        </div>
        <form
          className="updateProfile__search"
          onSubmit={handleSubmit}
          noValidate
        >
          <div className="update__id">
            <label htmlFor="">아이디</label>
          </div>
          <div>
            <span>{form.user_id}</span>
          </div>
          <div className="update__password">
            <label htmlFor="">비밀번호</label>
          </div>
          <div>
            <input
              className="updateProfile__input"
              id="user_pwd"
              type="password"
              name="user_pwd"
              defaultValue={form.user_pwd}
              onChange={handleChange}
            />
            {errors.user_pwd && <p>{errors.user_pwd}</p>}
          </div>
          <div className="update__name">
            <label htmlFor="">이름</label>
          </div>
          <div>
            <input
              className="updateProfile__input"
              id="user_name"
              type="text"
              name="user_name"
              defaultValue={form.user_name}
              onChange={handleChange}
            />
            {errors.user_name && <p>{errors.user_name}</p>}
          </div>
          <div className="update__phone">
            <label htmlFor="">전화번호</label>
          </div>
          <div>
            <input
              className="updateProfile__input"
              id="user_phone"
              type="text"
              name="user_phone"
              defaultValue={form.user_phone}
              onChange={handleChange}
            />
            {errors.user_phone && <p>{errors.user_phone}</p>}
          </div>
          <div className="update__address">
            <label htmlFor="">주소</label>
          </div>{" "}
          <div>
            <input
              className="updateProfile__input"
              id="user_address"
              type="text"
              name="user_address"
              defaultValue={form.user_address}
              onChange={handleChange}
            />
            {errors.user_address && <p>{errors.user_address}</p>}
          </div>
          <div></div>
          <div>
            <button type="submit" className="Modify">
              수정
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateProfile;
