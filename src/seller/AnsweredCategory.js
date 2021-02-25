import React, { useState, useEffect } from 'react';
import './AnswerYetCategory.css';
import { FaSearch } from 'react-icons/fa';
import DatePicker from 'react-datepicker';
import axios from '../axios/axios';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

import 'react-datepicker/dist/react-datepicker.css';
import { Category } from '@material-ui/icons';

function Answered() {
  const [startDate, setStartDate] = useState(new Date());
  const [products, setProducts] = useState([]);

  //카테고리 정보 저장 state
  const [categories, setCategories] = useState([]);
  const [question, setQuestion] = useState([]);

  //페이지 이동
  const history = useHistory();

  useEffect(() => {
    async function fetchDate() {
      const request = await axios
        .get('categories/all')
        .then((response) => setCategories(response.data))
        .catch((error) => console.log(error));

      return request;
    }

    console.log(categories);

    fetchDate();
  }, []);

  useEffect(() => {
    async function getQuestion() {
      const request = await axios
        .get('question/all')
        .then((response) => setQuestion(response.data))
        .catch((error) => console.log(error));

      return request;
    }
    getQuestion();
  }, []);

  let totalQuestion = question
    .filter((ques) => {
      return ques.answer !== null;
    })
    .map((ques) => {
      return ques.product_id;
    });

  return (
    <div className="category">
      <div className="category__container">
        <div className="products__search">
          <div className="products__button">
            <button className="products__search-button">Search</button>
            <button className="products__reset-button">Reset</button>
          </div>
          <form className="products__searchbar">
            <input type="text" className="products__input" />
            <FaSearch className="search-icon" />
          </form>
          <div className="answer__category">
            <p>답변생성일자</p>
            <DatePicker
              className="datepicker_date"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </div>
        </div>

        <div className="question__info">
          <h2>{totalQuestion.length} Questions</h2>
        </div>
        <div className="category__table_bg">
          <table className="category__table">
            <thead>
              <th>카테고리명</th>
              <th>답변완료된 질문개수</th>
            </thead>
            <tbody>
              {categories.map((category) => {
                let categoryQuestion = null;
                categoryQuestion = question
                  .filter((val) => {
                    return (
                      val.category_id == category.category_id &&
                      val.answer !== null
                    );
                  })
                  .map((val) => {
                    return val.question_id;
                  });
                return (
                  <tr key={category.category_id}>
                    <Link
                      to={`/seller/answeredProducts/${category.category_id}`}
                    >
                      {' '}
                      <td>
                        <span>{category.category_name} </span>
                      </td>
                    </Link>

                    <td>{categoryQuestion.length}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Answered;
