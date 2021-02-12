import React, {useState} from 'react';
import axios from '../axios/axios';
import {useStateValue} from '../StateProvider/StateProvider'
import {useHistory} from "react-router-dom";
import './QnAForm.css';

function QnAForm(){
    const [{user}, dispatch] = useStateValue(); 

    const history = useHistory();

    const [form, setForm] = useState({
        QnA_form: ''
    })

    const handleChange = e => {
        e.preventDefault();

            setForm({
                ...form,
                [e.target.name]: e.target.value 
            })
       
    }
    
    console.log(form);

    const showForm = (e) => {
        e.preventDefault()
        
        axios.post('QnA', form)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }

    return (
        <div className="QnAForm">
           
           <form className="QnA_form" onSubmit={showForm}> 
                <label htmlFor="input">질문 작성</label>
           <input 
           id="input"
           type="text" 
           name="QnA_form"
           value={form.QnA_form}
           onChange={handleChange}
           />
       <div className="button">
           <button type="submit" onClick={()=>{
               history.goBack()
           }}>Submit</button>
       </div>
       </form>
    </div>
);
    
}

export default QnAForm;