import React, { useState, useEffect } from "react";
import "./Review.css";
import { useStateValue } from "../StateProvider/StateProvider";
import { useHistory, useParams, useLocation } from "react-router-dom";
import { FaStar } from 'react-icons/fa';
import axios from "../axios/axios";

function Review(props) {
  const [reviews, setReviews] = useState([]);

  const { id } = useParams();

  const [{ user }, dispatch] = useStateValue();
  
  const history = useHistory();

  useEffect(() => {
    async function fetchDate() {
      const request = await axios
        .get(`review/all`)
        .then((response) => setReviews(response.data)
        )
        .catch((error) => console.log(error));
        
        return request;
      }
      
      fetchDate();
    }, []);   
    
        const col = reviews.filter(function (review) {
          return review.product_id == id;
        }).map((review)=>{
          return review.star;
        })

        let result = 0;
        col.map((sum)=>{
          result += sum
        })

        const avg = (result/col.length).toFixed(1);

    
 
    //reviews 길이만큼 반복하고 total += reviews.review_rating, return total / reviews길이
    //total에서 rating 5 4 3 2 1 인 사람들 각각 숫자 구해서 사람수 / total * 100 = 각 점수 %
    //그래프 css 여기로 옮기고 색 %를 위에서 계산한 값으로 넣기
    
    return (
      <div className="review">
      <div className="review__score">
        <div className="review__score_avg">
            {avg}
          <p>
            <FaStar color={"#ffc107"} size={80}/>
          </p>
        </div>
        <div className="review__score_list">
          <div className="review__score_graph_number">
            <li className="five">5점</li>
            <li className="four">4점</li>
            <li className="three">3점</li>
            <li className="two">2점</li>
            <li className="one">1점</li>
          </div>
          <div className="review__score_graph">
            <div className="graph5">0%</div>
            <div className="graph4">0%</div>
            <div className="graph3">0%</div>
            <div className="graph2">0%</div>
            <div className="graph1">0%</div>
          </div>
        </div>
        <div className="review__button_">
          <p>리뷰를 작성해보세요</p>
          {
            //   user == null ?
            //   <button className="review__button" onClick={()=>{
              //     history.push('/login');
              //   }}>리뷰 작성</button> :
              //   //db에서 구매했던 목록중 현재 페이지 상품과 동일한 것이 있다면
              //   //이라는 조건 추가.
              
              <button
              className="review__button"
              onClick={() => {
                history.push({
                  pathname: `/review/${id}`,
                  state: {}
                });
              }}
              >
              리뷰 작성
            </button>
          }
        </div>
      </div>

      {reviews
        .filter(function (review) {
          return review.product_id == id;
        })
        .map((review, i) => {
          return (
            <div key={i}>
              <li className="review__list">
                <div className="review__list_user" >
                  {review.user_sequence_id}
                </div>
                <div>
                  <div className="review__list_content">{review.review}</div>
                  <div className="review__list_pictuer">
                    {review.review_picture}
                  </div>
                </div>
              </li>
            </div>
          );
        })}
        
    </div>
  );
}

export default Review;
