import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "../axios/axios";
import { FaSearch } from "react-icons/fa";
import AnswerYetQuestionTable from './AnswerYetQuestionTable'
import "./AnswerYetQuestion.css";
//import { Category } from '@material-ui/icons';

function AnswerYetQuestion() {
  const [searchTerm, setSearchTerm] = useState("");
  // const [complete, setComplete] = useState(false);

  const [startDate, setStartDate] = useState(new Date());
  const { id } = useParams(); //product_id
  const [question, setQuestion] = useState([]);
  const [modal, setModal] = useState(false);
  let moment = require("moment");
  console.log(moment);
  useEffect(() => {
    async function getQuestion() {
      const request = await axios
        .get("question/all")
        .then((response) => setQuestion(response.data))
        .catch((error) => console.log(error));

      return request;
    }
    getQuestion();
  }, []);

  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function getProducts() {
      const request = await axios
        .get(`products/${id}`)
        .then((response) => setProducts(response.data))
        .catch((error) => console.log(error));

      return request;
    }
    getProducts();
  }, []);
  console.log(products);

  const FilteredResult = question.filter((que) => {
    return que.product_id == id && que.answer == null;
  });

  useEffect(() => {
    setQuestion(FilteredResult);
  }, FilteredResult);

  return (
    <div className="AnsweYetQuestion">
      <div className="AnsweYetQuestion__container">
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
        <div className="question__info">
          <h2>{products.product_name}</h2>
        </div>
        <div className="AnsweYetQuestion__table_bg">
          <table className="AnsweYetQuestion__table">
            <thead>
              <th style={{ width: "20px" }}>고객ID</th>
              <th style={{ width: "600px" }}>질문내용</th>
              <th style={{ width: "120px" }}>접수일</th>
              {/* <th style={{width:"90px"}}>처리상태</th> */}
              <th style={{ width: "90px" }}>대기기간</th>
              <th style={{ width: "120px" }}>답변하기</th>
            </thead>
            <tbody>
              {FilteredResult.filter((val) => {
                if (
                  val.question.toLowerCase().includes(searchTerm.toLowerCase())
                )
                  return val;
              }).map((val) => {
                let date1 = moment(new Date());
                console.log(date1);
                let diff1 = date1.diff(val.question_date_created, "days");
                console.log(diff1);
                return (
                  <>
                  <AnswerYetQuestionTable
                    name = {val.user_id}
                    question = {val.question}
                    date = {val.question_date_created}
                    diff = {diff1}
                    id = {val.question_id}
                  />
                   
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

export default AnswerYetQuestion;
