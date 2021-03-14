import React, {useState, useEffect} from 'react'
import axios from '../axios/axios'
import './SellerProduct.css'
import {Link, useHistory} from 'react-router-dom';

function AnswerYetProductsSearch({picture, name, description, question, id, status}) {
    const history = useHistory();
    return (
        <>
        <tr>
            <td>{name}<br/>{picture}</td>
            <td>{description}</td>
            <td id="answeYettd">
                <span onClick={()=>{
                    history.push(`/seller/answerYetQuestions/${id}`)
                }}>
                    {question}
                </span>
            </td>
            <td><Link to={`/seller/answerYetQuestions/${id}`}>작성하기</Link></td>
        </tr>       
        </>
    )
}

export default AnswerYetProductsSearch;