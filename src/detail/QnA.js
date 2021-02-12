import React, { useState, useEffect } from 'react';
import {useStateValue} from '../StateProvider/StateProvider';
import './QnA.css';
import {useHistory, useParams} from 'react-router-dom';
import axios from '../axios/axios';

function QnA(){

    const history = useHistory();
    const id = useParams();
    const [{user}, dispatch] = useStateValue();
    const [question, setQuestion] = useState([]);

    useEffect(() => {
        async function fetchDate() {
          const request = await axios.get(`question/all`)
            .then((response) => setQuestion(response.data))
            .catch((error) => console.log(error));
    
          return request;
        }
    
        fetchDate();
      }, []);
    

    return(
        <div className="QnA">
            <div className="QnA__header">
                <h3>문의하실 사항을 작성해주세요.</h3>
                <div className="QnA__button_">
                        {/* {user == null ?  
                        <button className="QnA__button" onClick={()=>{
                            history.push('/login');
                        }}>문의사항 작성</button> : 
                        //db에서 구매했던 목록중 현재 페이지 상품과 동일한 것이 있다면
                        //이라는 조건 추가. */}
                        <button className="QnA__button" onClick={()=>{
                            console.log(id);
                            history.push(`/question/${id}`);
                        }}>문의사항 작성</button>
                        {/* } */}
                </div>
            </div>
            <br/><hr/>
            {
                question
                .filter((qus)=>{
                   return qus.product_id === id;
                })
                .map((qus)=>{
                    return(
                <div>
                <li className="question__list">
                    <div className="question__list_user">
                        {qus.user_sequence_id}
                    </div>
                <div>
                    <div className="question__list_content">
                        {qus.question}
                    </div>
                </div>
            </li>
            </div>
                    )
                })
            }
        </div>
    )
}

export default QnA;