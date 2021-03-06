import React, { useState, useEffect } from 'react';
import axios from '../axios/axios';
import './SellerProduct.css';
import { Link, useHistory } from 'react-router-dom';
import UpdateAnswer from './UpdateAnswer';

function AnsweredProductsView({ id, answer_id, name, question, answer }) {
  const history = useHistory();
  const [modal, setModal] = useState(false);

  const useConfirm = (message = null, onConfirm, onCancel) => {
    if (!onConfirm || typeof onConfirm !== 'function') {
      return;
    }
    if (onCancel && typeof onCancel !== 'function') {
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
    axios
      .delete(`/answer/${answer_id}`)
      .then(alert('삭제가 완료되었습니다.'))
      .catch((err) => console.log(err));
    window.location.reload();
  };
  const cancelConfirm = () => alert('삭제가 취소되었습니다.');
  const confirmDelete = useConfirm(
    '삭제하시면 답변을 복구할 수 없습니다. 삭제하시겠습니까?',
    deleteConfirm,
    cancelConfirm,
  );

  return (
    <>
      <tr>
        <td>{name}</td>
        <td>{question}</td>
        <td>{answer}</td>
        <td>
          <span
            onClick={() => {
              setModal(!modal);
            }}
          >
            수정하기 
            {modal==true? (<p>창을 닫으려면⇧</p>):null }
          </span>{' '}
          </td>
          <td>
          <span onClick={confirmDelete}>삭제하기</span>
        </td>
      </tr>
      {modal == true ? (
        <tr>
          <td>답변 수정</td>
          <td colSpan="6">
            <UpdateAnswer id={answer_id} answer1={answer} />
          </td>
        </tr>
      ) : null}
    </>
  );
}

export default AnsweredProductsView;
