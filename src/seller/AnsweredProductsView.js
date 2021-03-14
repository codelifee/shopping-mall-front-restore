import React, { useState, useEffect } from 'react';
import axios from '../axios/axios';
import './SellerProduct.css';
import { Link, useHistory } from 'react-router-dom';
import UpdateAnswer from './UpdateAnswer';

function AnsweredProductsView({ id, answer_id, name, question, answer }) {
  const history = useHistory();
  const [modal, setModal] = useState(false);


  const useConfirm = (message = null, onConfirm, onCancel) => {
    if (!onConfirm || typeof onConfirm !== "function") {
      return;
    }
    if (onCancel && typeof onCancel !== "function") {
      return;
    }

    const confirmAction = () => {
      if (window.confirm(message)) {
        onConfirm();
      } else {
        onCancel();
      }
    };

    return confirmAction;
  };
  const deleteConfirm = () => {
    axios.delete(`/answer/${answer_id}`)
      .then(alert("삭제가 완료되었습니다."))
      .catch(err => console.log(err))
    window.location.reload();
  };
  const cancelConfirm = () => alert('삭제가 취소되었습니다.');
  const confirmDelete = useConfirm(
    "삭제하시면 답변을 복구할 수 없습니다. 삭제하시겠습니까?",
    deleteConfirm,
    cancelConfirm
  );

  return (
    <>
      <tr>
        <td>{name}</td>
        <td>
          <span
            onClick={() => {
              history.push(`/seller/answeredQuestions/${id}`);
            }}
          >
            {question}
          </span>
        </td>
        <td>{answer}</td>
        <td><button onClick={() => { setModal(!modal); }}>Update</button> / <button onClick={confirmDelete}>Delete</button></td>
      </tr>
      {modal == true ?
        <tr><td>답변 수정</td>
          <td colSpan="3"><UpdateAnswer id={answer_id} answer1={answer}
          /></td></tr>
        : null
      }
    </>
  );
}

export default AnsweredProductsView;
