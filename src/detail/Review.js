import React, { useState, useEffect } from 'react';
import './Review.css';
import styled from 'styled-components';
import { useStateValue } from '../StateProvider/StateProvider';
import { useHistory, useParams, useLocation } from 'react-router-dom';
import { FaStar, FaStarHalf } from 'react-icons/fa';
import axios from '../axios/axios';
import { ImageData } from '../axios/urlData';
import Cookies from 'js-cookie';


function Review(props) {
  const image = ImageData.image4;

  //const [cookie, setCookie] = useState();

  const [reviews, setReviews] = useState([]);

  const { id } = useParams();

  const cookie = Cookies.get('user');
  console.log(cookie);

  //const [{ user }, dispatch] = useStateValue();

  const history = useHistory();

  useEffect(() => {
    async function getReviews() {
      const request = await axios
        .get(`review/all`)
        .then((response) => setReviews(response.data))
        .catch((error) => console.log(error));

      return request;
    }

    getReviews();
  }, []);

  const [orders, setOrders] = useState([]);
  useEffect(() => {
    async function getOrders() {
      const request = await axios
        .get(`orders/all`)
        .then((response) => setOrders(response.data))
        .catch((error) => console.log(error));

      return request;
    }

    getOrders();
  }, []);

  //주문내역 중 로그인 된 사람의 현재 상품에 대한 주문내역만 가져오기
  const orderedUser = orders
    .filter((val) => {
      return val.product_id == id && val.user_sequence_id == cookie;
    })
    .map((val) => {
      return console.log(val);
    });
  console.log(orderedUser);

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
    width: ${four_per}%;
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
          {isNaN(avg) == true ? 0 : avg}
          <p>
            <FaStar color={'#ffc107'} size={60} />
          </p>
        </div>
        <div className="review__score_list">
          <div className="review__score_graph_number">
            <li className="five" key={50}>
              5점
            </li>
            <li className="four" key={51}>
              4점
            </li>
            <li className="three" key={52}>
              3점
            </li>
            <li className="two" key={53}>
              2점
            </li>
            <li className="one" key={54}>
              1점
            </li>
          </div>

          <div className="review__score_graph">
            <Graph5>
              {isNaN(five_per) == true ? 0 : five_per.toFixed(0)}%
            </Graph5>
            <Graph4>
              {isNaN(four_per) == true ? 0 : four_per.toFixed(0)}%
            </Graph4>
            <Graph3>
              {isNaN(three_per) == true ? 0 : three_per.toFixed(0)}%
            </Graph3>
            <Graph2>{isNaN(two_per) == true ? 0 : two_per.toFixed(0)}%</Graph2>
            <Graph1>{isNaN(one_per) == true ? 0 : one_per.toFixed(0)}%</Graph1>
          </div>
        </div>
        
        <div className="review__button_">
          <p>리뷰를 작성해보세요</p>
          {orderedUser.length !== 0 ? (
            <button
              className="review__button"
              onClick={() => {
                window.open(
                  `/review/${id}`,
                  'review_form',
                  'width=600,height=700,location=no,status=no,scrollbars=no',
                );
              }}
            >
              리뷰 작성
            </button>
          ) : (
            <button
              className="review__button"
              onClick={() => {
                alert('물건을 구매하신 후 작성하실 수 있습니다.');
              }}
            >
              리뷰 작성
            </button>
          )}
          <br />
        </div>
      </div>

      {reviews
        .filter(function (review) {
          return review.product_id == id;
        })
        .map((review, i) => { 

          function star(){//user_id옆 별점 표시
           if(review.star==5){
             return [...Array(5)].map(()=>{
               return <FaStar color={"#ffc107"} size={20} />
             })
           }else if(review.star==4){
             return [...Array(4)].map(()=>{
               return <FaStar color={"#ffc107"} size={20}/>
             })
           }else if(review.star==3){
             return [...Array(3)].map(()=>{
               return <FaStar color={"#ffc107"} size={20} />
             })
           }else if(review.star==2){
             return [...Array(2)].map(()=>{
               return <FaStar color={"#ffc107"} size={20} />
             })
           }else if(review.star==1){
             return <FaStar color={"#ffc107"} size={20} />
           }
         }
         
         return (
 
           <div className="review__list" key={i}>
                         
                <div className="review__list_user">
                  {review.user_id} 님 {star()}
                </div>

              <div className="review__list_content_container">
                <div className="review__list_content">
                  {review.review_date_created} 작성
                  <br />
                  {review.review}

                  {review.review_picture!=null ?
                    <img src={image+review.review_id} alt="리뷰 사진"/>: null
                  }

                </div>

                <div className="review__update_button_container">
                  {review.user_sequence_id == cookie ? (
                    <button
                      className="review__update_button"
                      onClick={() => {
                        window.open(
                          `/reviewUpdate/${review.review_id}`,
                          'reviewUpdateForm',
                          'width=600,height=500,location=no,status=no,scrollbars=no',
                        );
                      }}
                    >
                      수정 / 삭제
                    </button>
                  ) : null}
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Review;
