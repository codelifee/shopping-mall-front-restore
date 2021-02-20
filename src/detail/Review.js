import React, { useState, useEffect } from "react";
import "./Review.css";
import styled from "styled-components";
import { useStateValue } from "../StateProvider/StateProvider";
import { useHistory, useParams, useLocation } from "react-router-dom";
import { FaStar, FaStarHalf } from "react-icons/fa";
import axios from "../axios/axios";


function Review(props) {
  
  const [reviews, setReviews] = useState([]);
  
  const { id } = useParams();
  
  const [{ user }, dispatch] = useStateValue();
  
  const history = useHistory();
  
  const review_img = `http://shoppingmall-env.eba-jac9afx7.us-east-1.elasticbeanstalk.com/review/show/`;
  
  useEffect(() => {
    async function fetchDate() {
      const request = await axios
      .get(`review/all`)
      .then((response) => setReviews(response.data))
      .catch((error) => console.log(error));
      
      return request;
    }
    
    fetchDate();
  }, []);

  //해당삼품의 리뷰 별점 배열
  const col = reviews
  .filter(function (review) {
    return review.product_id == id;
  })
    .map((review) => {
      return review.star;
    });

  //해당상품 평균 별점
  let result = 0;
  col.map((sum) => {
    result += sum;
  });

  const avg = (result / col.length).toFixed(1);

  //5
  let five = 0;
  col.map((sum) => {
    if (sum == 5) five += sum;
  });
  const five_per = (five / 5 / col.length) * 100;
  //4
  let four = 0;
  col.map((sum) => {
    if (sum == 4) four += sum;
  });
  const four_per = (four / 4 / col.length) * 100;
  //3
  let three = 0;
  col.map((sum) => {
    if (sum == 3) three += sum;
  });
  const three_per = (three / 3 / col.length) * 100;
  //2
  let two = 0;
  col.map((sum) => {
    if (sum == 2) two += sum;
  });
  const two_per = (two / 2 / col.length) * 100;
  //1
  let one = 0;
  col.map((sum) => {
    if (sum == 1) one += sum;
  });
  const one_per = (one / 1 / col.length) * 100;


  const Graph5 = styled.div`
    background: #ffc107;
    width: ${five_per}%;
  `;
  const Graph4 = styled.div`
    background: #ffc107;
    width: ${four_per};
  `;
  const Graph3 = styled.div`
    background: #ffc107;
    width: ${three_per}%;
  `;
  const Graph2 = styled.div`
    background: #ffc107;
    width: ${two_per}%;
  `;
  const Graph1 = styled.div`
    background: #ffc107;
    width: ${one_per}%;
  `;

  return (
    <div className="review">
      <div className="review__score">
        <div className="review__score_avg">
          {avg}
          <p>
            <FaStar color={"#ffc107"} size={80} />
          </p>
        </div>
        <div className="review__score_list">
          <div className="review__score_graph_number">
            <li className="five" key={50}>5점</li>
            <li className="four" key={51}>4점</li>
            <li className="three" key={52}>3점</li>
            <li className="two" key={53}>2점</li>
            <li className="one" key={54}>1점</li>
          </div>
          <div className="review__score_graph">
            <Graph5>{five_per}%</Graph5>
            <Graph4>{four_per}%</Graph4>
            <Graph3>{three_per}%</Graph3>
            <Graph2>{two_per}%</Graph2>
            <Graph1>{one_per}%</Graph1>
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
                window.open(
                  `/review/${id}`,
                  "review_form",
                  "width=600,height=700,location=no,status=no,scrollbars=no"
                );
              }}
            >
              리뷰 작성
            </button>
          }<br/>
          
          {/* 별점별 리뷰 보기
          <br/>
          <select className="star">
          <option value="all">
            모든 리뷰
          </option>
          <option value="5">
          ★★★★★ 5점
          </option>
            <option value="4">
            ★★★★ 4점
            </option>
            <option value="3">
            ★★★ 3점
            </option>
            <option value="2">
            ★★ 2점
            </option>
            <option value="1">
            ★ 1점
            </option>
          </select> */}
        </div>
      </div>

      {reviews
        .filter(function (review) {
           return review.product_id == id;
        })
        .map((review, i) => { 
          function star(){//user_id옆 별점 표시
           if(review.star==5){
             return [...Array(5)].map((k)=>{
               return <FaStar color={"#ffc107"} size={20} />
             })
           }else if(review.star==4){
             return [...Array(4)].map((k)=>{
               return <FaStar color={"#ffc107"} size={20}/>
             })
           }else if(review.star==3){
             return [...Array(3)].map((k)=>{
               return <FaStar color={"#ffc107"} size={20} />
             })
           }else if(review.star==2){
             return [...Array(2)].map((k)=>{
               return <FaStar color={"#ffc107"} size={20} />
             })
           }else if(review.star==1){
             return <FaStar color={"#ffc107"} size={20} />
           }
         }
          return (
            
            <div>
              <li className="review__list" key={i}>
                  
                <div className="review__list_user">
                  {review.user_id} 님 {star()}
                </div>

                <div className="review__list_content">
                  {review.review_date_created} 작성<br/>
                  {review.review}
                  {review.review_picture!=null ?
                    <img src={review_img+review.review_id}/>: null
                  }
                  
                </div>
              </li>
            </div>
          );
        })}
    </div>
  );
}

export default Review;
