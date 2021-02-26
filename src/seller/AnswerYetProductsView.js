import React, { useState, useEffect } from 'react';
import axios from '../axios/axios';
import './SellerProduct.css';
import { Link, useHistory } from 'react-router-dom';

function AnswerYetProductsSearch({ name, question, id, answer }) {
  const history = useHistory();
  return (
    <>
      <tr>
        <td>
          {name}
          <br />
        </td>
        <td>
          <span
            onClick={() => {
              history.push(`/seller/answerYetQuestions/${id}`);
            }}
          >
            {question}
          </span>
        </td>
      </tr>
    </>
  );
}

export default AnswerYetProductsSearch;
