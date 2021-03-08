import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../axios/axios';
import DatePicker from 'react-datepicker';
import { FaSearch } from 'react-icons/fa';
import { useHistory, Link } from 'react-router-dom';
import './AnswerYetProducts.css';
import AnswerYetProductsView from './AnswerYetProductsView';
import 'react-datepicker/dist/react-datepicker.css';
import { Category } from '@material-ui/icons';

function AnswerYetProducts() {
  const [startDate, setStartDate] = useState(new Date());
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const { id } = useParams();
  const history = useHistory();
  let total = null; //답변 전 상품별 전체 질문

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
            <p>답변생성일자</p>
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
        <div className="AnsweYetProduct__table_bg">
          <table className="AnsweYetProduct__table">
            <thead>
              <th>Picture</th>
              <th>Product Name</th>
              <th>Product Description</th>
              <th>Wating answer questions</th>
            </thead>
            <tbody>
              {products
                .filter((product) => {
                  if (searchTerm == '' && product.category_id == id) {
                    return product;
                  } else if (
                    product.product_name
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase()) &&
                    product.category_id == id
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
                      question={wait.length}
                    />
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AnswerYetProducts;
