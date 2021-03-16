import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../axios/axios';
import DatePicker from 'react-datepicker';
import { FaSearch } from 'react-icons/fa';
import { useHistory, Link } from 'react-router-dom';
import './AnsweredProducts.css';
import { ImageData } from '../axios/urlData';
import 'react-datepicker/dist/react-datepicker.css';
import { Category } from '@material-ui/icons';
import AnsweredProductsView from './AnsweredProductsView';
function AnsweredProducts() {
  const [startDate, setStartDate] = useState(new Date());
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const { id } = useParams();
  const history = useHistory();
  let total = null; //답변 전 상품별 전체 질문
  let image1 = ImageData.image1 + id;
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

  useEffect(() => {
    async function fetchDate() {
      const request = await axios
        .get(`categories/${id}`)
        .then((response) => setCategories(response.data))
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
        <p className="answer_page">답변완료 페이지</p>
        <h1>&nbsp;&nbsp;&nbsp;카테고리 : {categories.category_name}</h1>


        <div className="overall_answerYet">

          <div className="AnsweYetProduct__table_bg">
            <table className="AnsweYetProduct__table">
              {/* {question.filter((val) => {
              //question의 category_id == id && question의 answer !=null 일때
              return val.category_id == id && val.answer != null;
            })
              .map((val, i) => {
                return (
                  <div>
                    {val.category_name}
                  </div>
                )
              })} */}

              <thead>
                <th>Product Name</th>
                <th>Questions</th>
                <th>Answer</th>
                <th>update</th>
                <th>delete</th>
              </thead>
              <tbody>
                {question
                  .filter(
                    (val) => {
                      if (searchTerm == '') {
                        return val.category_id == id && val.answer != null;
                      } else if (
                        val.product_name
                          .toLowerCase()
                          .includes(searchTerm.toLowerCase())
                      ) {
                        return val;
                      }
                    },

                    //question의 category_id == id && question의 answer !=null 일때
                  )
                  .map((val, i) => {
                    //위에서 한차례 필터링된 question의 product_id랑 product.product_id 같을 때 product_name 출력
                    const name = products
                      .filter((prd) => {
                        return prd.product_id == val.product_id;
                      })
                      .map((prd) => {
                        return prd.product_id;
                      });
                    console.log(i, name);
                    return (
                      <AnsweredProductsView
                        key={val.question_id}
                        id={val.question_id}
                        answer_id={val.answer_id}
                        name={val.product_name}
                        question={val.question}
                        answer={val.answer}
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

export default AnsweredProducts;
