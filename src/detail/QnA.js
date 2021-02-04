import React, { useState } from 'react';
import {useStateValue} from '../StateProvider/StateProvider';
import './QnA.css';
import {useHistory} from 'react-router-dom';

function QnA(){

    const history = useHistory();
    const [{user}, dispatch] = useStateValue();
    const [question, setQuestion] = useState([
        '질문있습니다.', '질문있습니다..', '질문있습니다...'
    ]);
    const [user_name, setUser] = useState(['초롱이','똘똘이','깜찍이']);

    return(
        <div className="QnA">
            <div className="QnA__header">
                <h3>문의하실 사항을 작성해주세요.</h3>
            </div>
            <div className="QnA__button_">
                      {user == null ?  
                      <button className="QnA__button" onClick={()=>{
                        history.push('/login');
                      }}>문의사항 작성</button> : 
                      //db에서 구매했던 목록중 현재 페이지 상품과 동일한 것이 있다면
                      //이라는 조건 추가.
                      <button className="QnA__button" onClick={()=>{
                        history.push('/QnAForm');
                      }}>문의사항 작성</button>
                    }
            </div>
            <br/><hr/>
            {
                question.map((a, i)=>{
                    return(
                   
                <div>
                <li className="question__list">
                    <div className="question__list_user">
                        {user_name[i]}
                    </div>
                <div>
                    <div className="question__list_content">
                        {question[i]}
                    </div>
                </div>
            </li><hr/>
            </div>
                    )
                })
            }
        </div>
    )
}

export default QnA;