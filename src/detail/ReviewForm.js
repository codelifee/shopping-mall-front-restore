import React, { useState } from "react";
import "./ReviewForm.css";
import StarRating from './StarRating'
import axios from "../axios/axios";
import { useParams } from "react-router-dom";
import Cookies from "js-cookie";

function ReviewForm() {
  const { id } = useParams();
  const [form, setForm] = useState({
    review_id: "",
    product_id: id,
    user_sequence_id: Cookies.get("user"),
    review: "",
    star: 0,
    review_picture: null,
    review_date_created: "",
    user_id: "",
  });

  const formData = new FormData();
  formData.append("review_id", form.review_id);
  formData.append("product_id", form.product_id);
  formData.append("user_sequence_id", form.user_sequence_id);
  formData.append("review", form.review);
  formData.append("star", form.star);
  formData.append("review_picture", form.review_picture);
  formData.append("review_date_created", form.review_date_created);
  formData.append("user_id", form.user_id);

  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };

  const handleChange = (e) => {
    e.preventDefault();

    if (e.target.name == "star") {
      setForm({
        ...form,
        [e.target.name]: parseInt(e.target.value),
      });
    } else {
      setForm({
        ...form,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleFileChange = (e) => {
    e.preventDefault();

    setForm({
      ...form,
      [e.target.name]: e.target.files[0],
    });
  };

  //부모페이지 리로드
  const reload_parent = () => {
    return new Promise((resolve, reject)=>{
      resolve(
        window.opener.parent.location.reload()
      )
    })
  }

  //현재페이지 리로드
  const close_self = () => {
    return new Promise((resolve, reject)=>{
      resolve(
        setTimeout("self.close()", 1000)
      )
    })
  }

  const post_review_json = () => {
    return new Promise((resolve, reject)=>{
      resolve(
        axios
        .post("/review", form)
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
      )
    })
  }

  const post_review_picture = () => {
    return new Promise((resolve, reject)=>{
      resolve(
        axios
        .post("/review/upload", formData, config)
        .then((res) => console.log(res))
        .catch((err) => console.log(err)))
    })
  }

  function post_review_with_file () {
    return post_review_picture().then(reload_parent()).then(close_self())}

  function post_review_only_json () {
    return post_review_json().then(reload_parent()).then(close_self())}

  const postForm = async (e) => {
    e.preventDefault();

    if (form.review_picture !== null) {
      return await post_review_with_file();
    } else {
      return await post_review_only_json();
  };
}

  return (
    <div className="ReviewForm">
      <div className="ReviewForm__stars">
        <StarRating form={form}/>
      </div>

      <form className="ReviewForm__review_form" onSubmit={form.review !== "" ? postForm : null}>
        
        <label htmlFor="ReviewForm__input">리뷰 작성</label>

        <input
          id="ReviewForm__input"
          type="text"
          name="review"
          value={form.review}
          onChange={handleChange}
        />

        <div className="ReviewForm__file_upload">
          <input
            type="file"
            id="ReviewForm__file_upload"
            name="review_picture"
            file={form.review_picture}
            multiple
            onChange={handleFileChange}
          />
        </div>

        {console.log(form)}

        <div className="ReviewForm__button">
          <button
            type="submit"
            onClick={() => {
              form.review == ""
                ? alert("내용을 입력해주세요!")
                : alert("내용이 입력됐습니다.");
            }}>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default ReviewForm;
