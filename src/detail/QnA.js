import React, { useState, useEffect } from "react";
import "./QnA.css";
import { useParams } from "react-router-dom";
import axios from "../axios/axios";

function QnA() {
  const { id } = useParams();
  const [question, setQuestion] = useState([]);

  useEffect(() => {
    async function getQuestion() {
      const request = await axios
        .get(`question/all`)
        .then((response) => setQuestion(response.data))
        .catch((error) => console.log(error));

      return request;
    }

    getQuestion();
  }, []);

  return (
    <div className="QnA">
      <div className="QnA__header">
        <h3>해당 상품 관련 문의 사항을 작성해주세요.</h3>
        <div className="QnA__button_">
          <button
            className="QnA__button"
            onClick={() => {
              window.open(
                `/question/${id}`,
                "question_form",
                "width=600,height=700,location=no,status=no,scrollbars=no"
              );
            }}
          >
            문의사항 작성
          </button>
        </div>
      </div>
      {question
        .filter(function (qus) {
          return qus.product_id == id;
        })
        .map((qus, i) => {
          return (
            <div className="question__list" key={i}>
              <div className="question__list_user">
                <span className="question__list_user_">
                  {qus.user_id} 님 &nbsp;&nbsp;&nbsp;&nbsp;
                </span>
                {qus.question_date_created} 작성
              </div>

              <div className="question__list_content">
                <p className="question_word"><strong>Q:</strong> {qus.question}</p>
                <p className="answer_word"><strong>A:</strong> {qus.answer}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default QnA;
