import React, { useState, useEffect, useRef } from 'react';
import axios from '../axios/axios';
import './AnswerYetQuestionModal.css';

function AnswerYetQuestionModal({ id }) {
  //question_id
  const inputRef = useRef(); //ref 객체 생성.

  const [form, setForm] = useState({
    answer_id: '',
    answer: '',
    question_id: id,
    answer_date_created: '',
  });

  const { answer } = form;

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    inputRef.current.focus();
  };

  const onReset = () => {
    setForm({ answer: '' });
    inputRef.current.focus();
  };

<<<<<<< HEAD
  // const handleChange = (e) => {
  //   e.preventDefault();

  //   setForm({
  //     ...form,
  //     [e.target.name]: e.target.value,
  //   });
  // };
=======
  const handleDelete = (e) => {
    e.preventDefault();

    setForm({
      ...form,
      answer: '',
    });
  };

  console.log(form);
>>>>>>> 66cabdd201344513c5dcc4afc348645df2291b8d

  const postAnswer = (e) => {
    e.preventDefault();
    axios
      .post(`answer`, form)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form className="AnswerForm" onSubmit={answer != '' ? postAnswer : null}>
        <input
          className="AnswerInput"
          type="text"
          name="answer"
          value={answer}
          onChange={onChangeInput}
          ref={inputRef} // 접근할 DOM에 ref 값 설정
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
          <br />
<<<<<<< HEAD
          <button type="reset" onClick={onReset}>
            Reset
          </button>
=======
          <button onClick={handleDelete}>reset</button>
>>>>>>> 66cabdd201344513c5dcc4afc348645df2291b8d
        </div>
      </form>
    </div>
  );
}

export default AnswerYetQuestionModal;
