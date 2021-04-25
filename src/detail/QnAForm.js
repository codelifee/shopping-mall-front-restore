import React, {useState} from 'react';
import axios from '../axios/axios';
import {useParams} from "react-router-dom";
import './QnAForm.css';
import Cookies from "js-cookie";

function QnAForm(){ 

    const {id} = useParams();

    const cookie = Cookies.get("user");

    const [form, setForm] = useState({
        product_id: id,
        user_sequence_id:cookie,
        question: '',
        question_date_created: '',
        answer_id : '',
        answer: '',
        answer_date_created: ''
    })

    const handleChange = e => {
        e.preventDefault();

            setForm({
                ...form,
                [e.target.name]: e.target.value 
            })       
    }

    const postForm = (e) => {
        e.preventDefault()
        
        axios.post('question', form)
        .then(res => console.log(res), window.opener.parent.location.reload())
        .catch(err => console.log(err))
    }

    return (
        <div className="QnAForm">
           
           <form className="QnA_form" onSubmit={form.question != '' ? postForm : null}> 
                <label htmlFor="input">질문 작성</label>
           <input 
           id="QnA_form__input"
           type="text" 
           name="question"
           value={form.question}
           onChange={handleChange}
           />
       <div className="QnA_form__button">
       <button type="submit" onClick={()=>{
                
                form.question === '' ? alert("내용을 입력해주세요!") : alert("내용이 입력됐습니다.");
                
                setTimeout("self.close()", 1000 );
                
            }}>Submit</button>
            </div>
       </form>
    </div>
);
    
}

export default QnAForm;