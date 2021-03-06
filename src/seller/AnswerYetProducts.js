import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../axios/axios';
import DatePicker from 'react-datepicker';
import { FaSearch } from 'react-icons/fa';
import { useHistory, Link } from 'react-router-dom';
import './AnswerYetProducts.css';
import AnswerYetProductsView from './AnswerYetProductsView';
import { ImageData } from '../axios/urlData';
import 'react-datepicker/dist/react-datepicker.css';
import { Category } from '@material-ui/icons';

function AnswerYetProducts() {
  const [startDate, setStartDate] = useState(new Date());
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [complete, setComplete] = useState(false);

  const [searchTerm, setSearchTerm] = useState('');
  let image = ImageData.image1;
  const { id } = useParams();
  const history = useHistory();

  let total = null; //답변 전 상품별 전체 질문

  useEffect(() => {
    async function fetchDate() {
      const request = await axios
        .get(`products/category/${id}`)
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
    async function getQuestion() {
      const request = await axios
        .get(`categories/${id}`)
        .then((response) => setCategories(response.data))
        .catch((error) => console.log(error));

      return request;
    }
    getQuestion();
  }, []);

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
        {/* <div className="question__info">
                    <h2>0 Questions</h2>
                </div> */}
       
        <p className="question_length1">답변 미완료 페이지</p>
        <span className="answer_span1">&nbsp;&nbsp;&nbsp;&nbsp;카테고리: {categories.category_name}
        </span>
<div className="overall_AnsweYet">
        <div className="AnsweYetProduct__table_bg">
          <table className="AnsweYetProduct__table">
            <thead>
              <th>상품명</th>
              <th>상품설명</th>
              <th>답변 대기 질문 개수</th>
              <th>답변작성</th>

            </thead>
            <tbody>
              {products
                .filter((product) => {
                  if (searchTerm == '' /*&& product.category_id == id*/) {
                    return product;
                  } else if (
                    product.product_name
                      .toLowerCase()
                      .includes(
                        searchTerm.toLowerCase(),
                      ) /*&&
                    product.category_id == id*/
                  ) {
                    return product;
                  }
                })
                .map((product) => {
                  let wait = null; //답변 전 상품별 질문 개수

                  wait = question
                    .filter((ques) => {
                      return (
                        ques.answer == null &&
                        ques.product_id == product.product_id
                      );
                    })
                    .map((ques) => {
                      return ques.product_id;
                    });

                  return (
                    <AnswerYetProductsView
                      key={product.product_id}
                      id={product.product_id}
                      name={product.product_name}
                      description={product.product_description}
                      question={wait.length}
                    />
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </div>
  );
}

export default AnswerYetProducts;
