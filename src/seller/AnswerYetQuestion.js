import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "../axios/axios";
import "./AnswerYetQuestion.css";
import AnswerYetQuestionModal from "./AnswerYetQuestionModal";
import { Category } from '@material-ui/icons';

function AnswerYetQuestion (){
    const [startDate, setStartDate] = useState(new Date());
    const {id} = useParams(); //product_id
    const [question, setQuestion] = useState([]);
    const [modal, setModal] = useState(false);

    useEffect(()=>{
        async function getQuestion() {
            const request = await axios.get('question/all')
            .then(response =>
                setQuestion(response.data))
            .catch(error => console.log(error))
    
            return request;
        }
        getQuestion();
        }, [])

    return(
        <div className="AnsweYetProduct">
            <div className="AnsweYetProduct__container">
                <div className="products__search">
                {/* <div className="products__button">
                    <button className="products__search-button">Search</button>
                    <button className="products__reset-button">Reset</button>
                </div>
                    <form className="products__searchbar">
                        <input type="text" 
                        className="products__input" 
                        onChange={e => {setSearchTerm(e.target.value)}}/>
                        <FaSearch className="search-icon"/>
                    </form> */}
                    <div className="answer__category">
                        <p>Answer Creation Date</p>
                        <DatePicker
                        className="datepicker_date"
                        selected={startDate} 
                        onChange={date => setStartDate(date)} />
                    </div>
                </div>
                
                <div className="question__info">
                    <h2>0 Questions</h2>
                </div>
                <div className="AnsweYetProduct__table_bg">
                    <table className="AnsweYetProduct__table">
                        <thead>
                            <th>User Name</th>
                            <th>Questions</th>
                            <th>Answer</th>
                            <th>date</th>
                        </thead>
                        <tbody>
                            
                           {
                               question
                               .filter(
                                   (val)=>{
                                       return val.product_id == id && val.answer==null;
                                   })
                               .map(
                                   (val)=>{
                                    return(
                                        <>
                                        <tr>
                                            <td>{val.user_id}</td>
                                            <td>{val.question}</td>
                                            <td>{val.question_date_created}</td>
                                            <td>
                                                <div className="answer_button"
                                                onClick={()=>{
                                                    setModal(!modal);
                                                }}>
                                                    답변하기
                                                </div>
                                            </td>
                                        </tr>
                                        {modal == true ? 
                                            <tr><td>답변 작성</td>
                                            <td colSpan="3"><AnswerYetQuestionModal id={val.question_id}
                                            /></td></tr>
                                            :null
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