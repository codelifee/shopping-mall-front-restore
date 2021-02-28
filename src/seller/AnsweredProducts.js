import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../axios/axios';
import DatePicker from 'react-datepicker';
import { FaSearch } from 'react-icons/fa';
import { useHistory, Link } from 'react-router-dom';
import './AnsweredProducts.css';
import AnsweredProductsView from './AnswerYetProductsView';
import AnsweredQuestionModal from './AnsweredQuestionModal';
import 'react-datepicker/dist/react-datepicker.css';
import { Category } from '@material-ui/icons';
import AnswerCategory from './AnsweredCategory';

function AnsweredProducts() {
  const [startDate, setStartDate] = useState(new Date());
  const [products, setProducts] = useState([]);
  const { id } = useParams(); //category_id
  const [modal, setModal] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchDate() {
      const request = await axios
        .get('products/all')
        .then((response) => setProducts(response.data))
        .catch((error) => console.log(error));

      return request;
    }

    fetchDate();
  }, []);

  const [question, setQuestion] = useState([]);

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

  useEffect(() => {
    async function getCategories() {
      const request = await axios
        .get(`categories/${id}`)
        .then((response) => setCategories(response.data))
        .catch((error) => console.log(error));

      return request;
    }
    getCategories();
  }, []);

  let wait = question
    .filter((ques) => {
      return ques.answer !== null && ques.category_id == id;
    })
    .map((ques) => {
      return ques.answer;
    });

  return (
    <div className="AnsweYetProduct">
      <div className="AnsweYetProduct__container">
        <div className="products__search">
          <div className="products__button">
            <button className="products__search-button">Search</button>
            <button className="products__reset-button">Reset</button>
          </div>
          <form className="products__searchbar">
            <input
              type="text"
              className="products__input"
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
            />
            <FaSearch className="search-icon" />
          </form>
          <div className="answer__category">
            <p>Answer Creation Date</p>
            <DatePicker
              className="datepicker_date"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </div>
        </div>
        <br />
        <div className="question__info">
          <h2>{categories.category_name}</h2>
        </div>
        <div className="question__info2">
          <h2>Question count: {wait.length} </h2>
        </div>
        <div className="AnsweYetProduct__table_bg">
          <table className="AnsweYetProduct__table">
            <thead>
              <th>상품명</th>
              <th>질문자</th>
              <th>질문</th>
              <th>질문생성일자</th>
              <th>답변</th>
              <th>답변생성일자</th>
              <th>수정 및 삭제</th>
            </thead>
            <tbody>
              {question
                .filter((val) => {
                  //question의 category_id == id && question의 answer !=null 일때
                  return val.category_id == id && val.answer != null;
                })
                .map((val, i) => {
                  //위에서 한차례 필터링된 question의 product_id랑 product.product_id 같을 때 product_name 출력
                  const name = products
                    .filter((prd) => {
                      return prd.product_id == val.product_id;
                    })
                    .map((prd) => {
                      return prd.product_name;
                    });
                  console.log(i, name);

                  return (
                    <>
                      <tr>
                        <td>{name}</td>
                        <td>{val.user_id}</td>
                        <td>{val.question}</td>
                        <td>{val.question_date_created}</td>
                        <td> {val.answer}</td>
                        <td>{val.answer_date_created}</td>
                        <td>
                          <div
                            className="answer_button"
                            onClick={() => {
                              setModal(!modal);
                            }}
                          >
                            수정 및 삭제
                          </div>
                        </td>
                      </tr>
                      {modal == true ? (
                        <tr>
                          <td>답변 작성</td>
                          <td colSpan="5">
                            <AnsweredQuestionModal
                              id={val.question_id}
                              answer={val.answer}
                              answer_date_created={val.answer_date_created}
                            />
                          </td>
                        </tr>
                      ) : null}
                    </>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AnsweredProducts;
