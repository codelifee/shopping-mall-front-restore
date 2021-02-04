import React, {useState} from 'react';
import './Review.css';
import {useStateValue} from '../StateProvider/StateProvider'
import {useHistory} from 'react-router-dom';


function Review(){

    const [{user}, dispatch] = useStateValue(); 
    const history = useHistory();

    const [user_name, setUser] = useState(['초롱이','똘똘이','깜찍이']);
    const [review, setReview] = useState(['태어나서 이렇게 편한 침대는 처음이었습니다.','신혼집에 장만한 침대인데 만족해요. 이리저리 굴러도 떨어질 일 없이 넓어요.','모서리가 뭉특하면 좋겠어요. 별점 하나 깎습니다.']);
    const [picture, setPicture] = useState([
        <img alt="" src="http://www.acebed.com/manage/upload_files/prdt_bed/atch_image/201810/P_list(9)(4).jpg"></img>
    ])


    return(
        <div className="review">
            <div className="review__score">
                <p className="review__score_avg">
                    4.7점
                </p>
                <div className="review__score_list">
                    <div className="review__score_graph_number">
                        <li className="five">5점</li>
                        <li className="four">4점</li>
                        <li className="three">3점</li>
                        <li className="two">2점</li>
                        <li className="one">1점</li>
                    </div>
                    <div className="review__score_graph">
                        <div className="graph5">59%</div>
                        <div className="graph4">31%</div> 
                        <div className="graph3">10%</div> 
                        <div className="graph2">0%</div> 
                        <div className="graph1">0%</div> 
                    </div>
                </div>
                <div className="review__button_">
                    <p>리뷰를 작성해보세요</p>
                    {
                      user == null ?  
                      <button className="review__button" onClick={()=>{
                        history.push('/login');
                      }}>리뷰 작성</button> : 
                      //db에서 구매했던 목록중 현재 페이지 상품과 동일한 것이 있다면
                      //이라는 조건 추가.
                      <button className="review__button" onClick={()=>{
                        history.push('/ReviewForm');
                      }}>리뷰 작성</button>
                    }
                    
                </div>
            </div><hr/>

            {user_name.map((a,i)=>{
                return(
                <div>
                <li className="review__list">
                    <div className="review__list_user">
                        {user_name[i]}
                    </div>
                <div>
                    <div className="review__list_content">
                        {review[i]}
                    </div>
                    <div className="review__list_pictuer">
                    {picture}{picture}
                    </div>
                </div>
            </li><hr/>
            </div>
                )
            })}

               
            </div>
    )
}

export default Review;