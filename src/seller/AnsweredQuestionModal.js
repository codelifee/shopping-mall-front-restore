import React, { useState, useEffect, useRef } from 'react';
import axios from '../axios/axios';
import './AnsweredQuestionModal.css';
import { useParams } from 'react-router-dom';

function AnsweredQuestionModal({ id }) {
  //question_id
  const inputRef = useRef(); //ref 객체 생성.
  
  const [form, setForm] = useState({
    answer_id: '',
    answer: '',
    question_id: id,
    answer_date_created: '',
  });

  const handleChange = (e) => {
    e.preventDefault();

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleDelete = (e) => {
    e.preventDefault();

    setForm({
      ...form,
      answer: '',
    });
  };

  const patchAnswer = (e) => {
    e.preventDefault();

    axios
      .patch(`answer/${id}`, form.answer)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

    const patchAnswer1 = (e) => {
      e.preventDefault();

      axios
        .patch(`answer/${id}`, form.answer_date_created)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    };


  const deleteAnswer = (e) => {
    e.preventDefault();

    axios
      .delete(`answer/${id}`, form.answer)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form className="AnswerForm" onSubmit={form.answer != '' ? patchAnswer : null}>
        <input
          className="AnswerInput"
          type="text"
          name="answer"
          value={form.answer}
          ref={inputRef}
        />
        <div className="answerButton">
          <button
            type="submit"
            onClick={() => {
              form.answer == ''
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
