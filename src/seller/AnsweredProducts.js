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

function AnsweredProducts() {
  const [startDate, setStartDate] = useState(new Date());
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const product_img = `http://shoppingmall-env.eba-jac9afx7.us-east-1.elasticbeanstalk.com/products/showProductImage/`;
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
        <div className="AnsweYetProduct__table_bg">
          <table className="AnsweYetProduct__table">
            <thead>
              <th>Product Name</th>
              <th>Questions</th>
              <th>Answer</th>
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
                    <tr>
                      <td>{name}</td>
                      <td>{val.question}</td>
                      <td>{val.answer}</td>
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

export default AnswerYetProducts;
