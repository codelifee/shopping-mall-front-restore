import React, { useState, useEffect, useRef } from 'react';
import axios from '../axios/axios';
import './AnsweredQuestionModal.css';
import { useParams } from 'react-router-dom';

function AnsweredQuestionModal({ id, answer, answer_date_created }) {
  //question_id
  const inputRef = useRef(); //ref 객체 생성.

  const patchAnswer = (e) => {
    e.preventDefault();

    axios
      .patch(`answer/${id}`, answer)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

    const patchAnswer1 = (e) => {
      e.preventDefault();

      axios
        .patch(`answer/${id}`, answer_date_created)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    };


  const deleteAnswer = (e) => {
    e.preventDefault();

    axios
      .delete(`answer/${id}`, answer)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form className="AnswerForm" onSubmit={answer != '' ? patchAnswer : null}>
        <input
          className="AnswerInput"
          type="text"
          name="answer"
          value={answer}
          ref={inputRef}
        />
        <div className="answerButton">
          <button
            type="submit"
            onClick={() => {
              answer == ''
                ? alert('내용을 입력해주세요!')
                : alert('내용이 입력됐습니다.');
              window.location.reload();
            }}
          >
            Submit
          </button>
          <button type="reset">reset</button>
          <button type="submit" onClick={deleteAnswer}>
            삭제
          </button>
        </div>
      </form>
    </div>
  );
}

export default AnsweredQuestionModal;
