import React, { useState, useEffect } from "react";
import "./ReviewPatchForm.css";
import UpdateStarRating from "./UpdateStarRating";
import axios from "../axios/axios";
import { useParams } from "react-router-dom";

function ReviewPatchForm() {
  const { id } = useParams(); //review_id

  const [review, setReview] = useState([]);

  useEffect(() => {
    async function getReview() {
      const request = await axios
        .get(`review/${id}`)
        .then((response) => setReview(response.data))
        .catch((error) => console.log(error));

      return request;
    }

    getReview();
  }, []);

  const formData = new FormData();

  formData.append("review_picture", review.review_picture);

  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };

  const handleChange = (e) => {
    e.preventDefault();

    if (e.target.name == "star") {
      setReview({
        ...review,
        [e.target.name]: parseInt(e.target.value),
      });
    } else {
      setReview({
        ...review,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleFileChange = (e) => {
    e.preventDefault();

    setReview({
      ...review,
      [e.target.name]: e.target.files[0],
    });
  };

    //부모페이지 리로드
    const reload_parent = () => {
      return new Promise((resolve, reject)=>{
        resolve(
          setTimeout(window.opener.parent.location.reload(), 500)
        )
      })
    }

  //현재페이지 리로드
  const close_self = () => {
    return new Promise((resolve, reject)=>{
      resolve(
        setTimeout("self.close()", 500)
      )
    })
  }

  const patch_review_json = () => {
    return new Promise((resolve, reject)=>{
      resolve(
        axios
          .patch(`/review/${id}`, { review: review.review, star: review.star })
          .then((res) => console.log(res))
          .catch((err) => console.log(err))
      )
    })
  }

  const patch_review_picture = () => {
    return new Promise((resolve, reject)=>{
      resolve(
        axios
          .patch(`/review/image/${id}`, formData, config)
          .then((res) => console.log(res))
          .catch((err) => console.log(err)) 
    )})
  }

  const patch_review_all = () => {
    return new Promise((resolve, reject)=>{
      resolve(
        axios
        .patch(`/review/${id}`, review)
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
    )})
  }

  function patch_review_with_file () {
    return patch_review_picture().then(reload_parent()).then(close_self())}

  function patch_review_only_json () {
    return patch_review_json().then(reload_parent()).then(close_self())}
  
  function patch_reviews () {
    return patch_review_all().then(reload_parent()).then(close_self())}


  const updateForm = (e) => {
    e.preventDefault();

    if (review.review_picture != null) {
      return (
        patch_review_with_file() && patch_review_only_json()
      );
    } else {
        patch_reviews();
    }
  };

  return (
    <div className="ReviewUpdateForm">
      <div className="stars">
        <UpdateStarRating review={review} />
      </div>

      <form
        className="review_update_form"
        onSubmit={review.review !== "" ? updateForm : null}
      >
        <label htmlFor="input">리뷰 작성</label>

        <input
          id="ReviewUpdateForm__input"
          type="text"
          name="review"
          value={review.review}
          onChange={handleChange}
        />

        <div className="ReviewUpdateForm__file_upload">
          <input
            type="file"
            id="ReviewUpdateForm__file_upload"
            name="review_picture"
            file={review.review_picture}
            multiple
            onChange={handleFileChange}
          />
        </div>

        {console.log(review)}

        <div className="ReviewUpdateForm__button">
          <button
            className="ReviewUpdateForm__reviewPatchSubmit"
            type="submit"
            onClick={() => {
              review.review == ""
                ? alert("내용을 입력해주세요!")
                : alert("내용이 입력됐습니다.");
            }}
          >
            수정
          </button>{" "}
          &nbsp;
        </div>
      </form>
    </div>
  );
}

export default ReviewPatchForm;
