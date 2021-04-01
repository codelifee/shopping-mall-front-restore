import React, { useState, useEffect } from "react";
import "./ReviewPatchDeleteForm.css";
import UpdateStarRating from "./UpdateStarRating";
import axios from "../axios/axios";
import { useParams } from "react-router-dom";

function ReviewPatchDeleteForm() {
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

  const updateForm = (e) => {
    e.preventDefault();

    if (review.review_picture != null) {
      return (
        axios
          .patch(`/review/image/${id}`, formData, config)
          .then((res) => console.log(res))
          .then(window.opener.parent.location.reload())
          .then(setTimeout("self.close()", 2000))
          .catch((err) => console.log(err)) &&
        axios
          .patch(`/review/${id}`, { review: review.review, star: review.star })
          .then((res) => console.log(res))
          .then(window.opener.parent.location.reload())
          .then(setTimeout("self.close()", 2000))
          .catch((err) => console.log(err))
      );
    } else {
      axios
        .patch(`/review/${id}`, review)
        .then((res) => console.log(res))
        .then(window.opener.parent.location.reload())
        .then(setTimeout("self.close()", 2000))
        .catch((err) => console.log(err));
    }
  };

  const deleteReview = () => {
    axios
      .delete(`/review/${id}`)
      .then((res) => console.log(res))
      .then(window.opener.parent.location.reload())
      .then(setTimeout("self.close()", 2000))
      .catch((err) => console.log(err));
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
          <button
            className="ReviewUpdateForm__reviewDelete"
            onClick={() => {
              return deleteReview();
            }}
          >
            삭제
          </button>
        </div>
      </form>
    </div>
  );
}

export default ReviewPatchDeleteForm;
