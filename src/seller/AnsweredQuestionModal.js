import React, { useState, useEffect } from 'react';
import axios from '../axios/axios';
import './AnsweredQuestionModal.css';
import { useParams } from 'react-router-dom';

function AnsweredQuestionModal({ id }) {
  //question_id
  const [answer, setAnswer] = useState([]);
  const [form, setForm] = useState({
    answer_id: answer.answer_id,
    answer: answer.answer,
    answer_date_created: answer.answer_date_created,
  });
  const { answer_id } = useParams();

  useEffect(() => {
    async function fetchData() {
      const request = await axios
        .get(`/answer/${id}`)
        .then((response) => setAnswer(response.data))
        .catch((error) => console.log(error));

      return request;
    }
    fetchData();
  }, []);

  const handleChange = (e) => {
    e.preventDefault();

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  console.log(form);

  const patchAnswer = (e) => {
    e.preventDefault();

    axios
      .patch(`answer/${id}`, form)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const deleteAnswer = (e) => {
    e.preventDefault();

    axios
      .delete(`answer/${id}`, form)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form
        className="AnswerForm"
        onSubmit={form.answer != '' ? patchAnswer : null}
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
          <button type="reset" >reset</button>
          <button type="submit" onClick={deleteAnswer}>
            삭제
          </button>
        </div>
      </form>
    </div>
  );
}

export default AnsweredQuestionModal;
