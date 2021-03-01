import React, { useState, useEffect } from 'react';
import axios from '../axios/axios';
import './AnswerYetQuestionModal.css';

function AnswerYetQuestionModal({ id }) {
  //question_id

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

  console.log(form);

  const postAnswer = (e) => {
    e.preventDefault();

    axios
      .post(`answer`, form)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form
        className="AnswerForm"
        onSubmit={form.answer != '' ? postAnswer : null}
      >
        <input
          className="AnswerInput"
          type="text"
          name="answer"
          value={form.answer}
          onChange={handleChange}
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
          <br />
          <button type="reset">reset</button>
        </div>
      </form>
    </div>
  );
}

export default AnswerYetQuestionModal;
