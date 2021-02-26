import React, { useState, useEffect } from 'react';
import axios from '../axios/axios';
import './SellerProduct.css';
import { Link, useHistory } from 'react-router-dom';

function AnsweredProductSearch({ name, question, id, answer, complete }) {
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
              history.push(`/seller/answeredQuestions/${id}`);
            }}
          >
            {question}
          </span>
        </td>
        <td>{answer}</td>
        <td>{complete}</td>
      </tr>
    </>
  );
}

export default AnsweredProductSearch;
