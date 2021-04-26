import React, { useState } from "react";
import AnswerYetQuestionModal from "./AnswerYetQuestionModal";

function AnswerYetQuestionTable({ name, question, date, diff, id }) {
  
const [modal, setModal] = useState(false);

function closeModal() {
    return setModal(!modal);
}

  return (
    <>
      <tr>
        <td>{name}</td>
        <td>{question}</td>
        <td>{date}</td>
        <td>{diff}일 경과</td>
        <td>
          <div
            className="answer_button"
            onClick={() => {
              setModal(!modal);
            }}
          >
            답변하기
          </div>
        </td>
      </tr>
      {modal == true ? (
        <tr>
          <td>답변 작성</td>
          <td colSpan="4">
            <AnswerYetQuestionModal id={id} close={closeModal}/>
          </td>
        </tr>
      ) : null}
    </>
  );
}

export default AnswerYetQuestionTable;
