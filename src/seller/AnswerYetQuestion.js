import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "../axios/axios";
import { FaSearch } from 'react-icons/fa';

import "./AnswerYetQuestion.css";
import AnswerYetQuestionModal from "./AnswerYetQuestionModal";
import { Category } from '@material-ui/icons';

function AnswerYetQuestion() {
    const [searchTerm, setSearchTerm] = useState('');
    const [complete, setComplete] = useState(false);

    const [startDate, setStartDate] = useState(new Date());
    const { id } = useParams(); //product_id
    const [question, setQuestion] = useState([]);
    const [modal, setModal] = useState(false);
    let moment = require('moment');
    console.log(moment);
    useEffect(() => {
        async function getQuestion() {
            const request = await axios.get('question/all')
                .then(response =>
                    setQuestion(response.data))
                .catch(error => console.log(error))

            return request;
        }
        getQuestion();
    }, [])

    const [products, setProducts] = useState([]);
    useEffect(() => {
        async function getProducts() {
            const request = await axios.get(`products/${id}`)
                .then(response =>
                    setProducts(response.data))
                .catch(error => console.log(error))

            return request;
        }
        getProducts();
    }, [])
    console.log(products)


        const FilteredResult = question.filter((que) => {
            return que.product_id == id && que.answer == null;
            setQuestion(FilteredResult);
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
                            onChange={date => setStartDate(date)} />
                    </div>
                </div>
                <div className="question__info">
                    <h2>{products.product_name}</h2>
                </div>
                <div className="AnsweYetProduct__table_bg">
                    <table className="AnsweYetProduct__table">
                        <thead>
                            <th style={{width:"20px"}}>고객ID</th>
                            <th style={{width:"600px"}}>질문내용</th>
                            <th style={{width:"120px"}}>접수일</th>
                            <th style={{width:"90px"}}>처리상태</th>
                            <th style={{width:"200px"}}>대기기간</th>
                            <th>답변하기</th>
                        </thead>
                        <tbody>
                            {
                                FilteredResult
                                    .filter(
                                        (val) => {
                                            if (
                                                val.question
                                                    .toLowerCase()
                                                    .includes(searchTerm.toLowerCase())
                                            ) 
                                                return val;
                                       
                                            
                                        }
                                    )
                                    .map(
                                        (val) => {
                                            let date1 = moment(new Date());
                                            console.log(date1);
                                            let diff1 = date1.diff(val.question_date_created, "days");
                                            console.log(diff1);
                                            return (
                                                <>
                                                    <tr>
                                                        <td>{val.user_id}</td>
                                                        <td>{val.question}</td>
                                                        <td>{val.question_date_created}</td>
                                                        <td>{val.answer == null ? "미처리" : "처리완료"} </td>
                                                        <td>{diff1}일 경과</td>

                                                        <td>
                                                            <div className="answer_button"
                                                                onClick={() => {
                                                                    setModal(!modal);
                                                                }}>
                                                                답변하기
                                                </div>
                                                        </td>
                                                    </tr>
                                                    {modal == true ?
                                                        <tr><td>답변 작성</td>
                                                            <td colSpan="5"><AnswerYetQuestionModal id={val.question_id}
                                                            /></td></tr>
                                                        : null
                                                    }
                                                </>
                                            )
                                        }
                                    )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default AnswerYetQuestion;