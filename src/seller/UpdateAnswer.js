import React, { useState, useEffect, useRef } from 'react';
import axios from '../axios/axios';
import './UpdateAnswer.css';

function UpdateAnswer({ id, answer1}) {
  //question_id

  const [form, setForm] = useState({});

//   useEffect(() => {
//     async function fetchData() {
//         const request = await axios.get(`answer/${id}`)
//         .then(response => 
//             setForm(response.data)
//         )
//         .catch(error => console.log(error))
       
//         return request;
//     }
//     fetchData();
// }, [])


useEffect(() => {
  setForm({
    answer: answer1
  });
}, setForm);

  const handleChange = (e) => {
    e.preventDefault();

    setForm(e.target.value);
  };

  const handleDelete = (e) => {
    e.preventDefault();
    setForm({
      ...form,
      answer: '',
    });
  };

  console.log(form);

  const patchAnswer = (e) => {
    e.preventDefault();

    axios
      .patch(`answer/${id}`, {answer:form})
      .then((res) => console.log(res),window.location.reload())
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form
        className="AnswerForm"
        onSubmit={answer1 != '' ? patchAnswer : null}
      >
        <input
          className="AnswerInput"
          type="text"
          name="answer"
          defaultValue={answer1}
          onChange={handleChange}
        />
        <div className="answerButton">
          <button
            type="submit"
            onClick={() => {
              answer1 == ''
                ? alert('내용을 입력해주세요!')
                : alert('내용이 입력됐습니다.');
              
            }}
          >
            Submit
          </button>
          <br />
          <button onClick={handleDelete}>reset</button>
        </div>
      </form>
    </div>
  );
}

export default UpdateAnswer;
