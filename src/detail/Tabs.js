import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from '../axios/axios';
import Data from './Detail_data';
import Info from './Product_info';
import Review from './Review';
import QnA from './QnA';
import './Tabs.css';

function Tabs() {

  const [reviewCount, setReviewCount] = useState([]);
  const [questionCount, setQuestionCount] = useState([]);
  const {id} = useParams();

  useEffect(() => {
    async function getReviewsCount() {
      const request = await axios
        .get(`/review/JsonDataByProductId/${id}`)
        .then((response) => setReviewCount(response.data))
        .catch((error) => console.log(error));

      return request;
    }
    getReviewsCount();
  }, []);

  useEffect(() => {
    async function getQuestionCount() {
      const request = await axios
        .get(`/question/countByProductId/${id}`)
        .then((response) => setQuestionCount(response.data))
        .catch((error) => console.log(error));

      return request;
    }
    getQuestionCount();
  }, []);

  return (
    <div className="tab_center">
      <input
        type="radio"
        name="tabmenu"
        id="tab01"
        className="tab_input"
        defaultChecked
      />
      <label htmlFor="tab01">상품상세</label>

      <input type="radio" name="tabmenu" id="tab02" className="tab_input" />
      <label htmlFor="tab02">상품정보</label>

      <input type="radio" name="tabmenu" id="tab03" className="tab_input" />
      <label htmlFor="tab03">
        리뷰{' '}
        <span style={{ fontSize: '0.8rem', fontWeight: 'lighter', color:'white'}}>
          {' '}
          {new Intl.NumberFormat().format(reviewCount)}
        </span>
      </label>

      <input type="radio" name="tabmenu" id="tab04" className="tab_input" />
      <label htmlFor="tab04">
        Q & A{' '}
        <span style={{ fontSize: '0.8rem', fontWeight: 'lighter', color:'white'}}>
          {' '}
          {new Intl.NumberFormat().format(questionCount)}
        </span>
      </label>

      <div
        style={{
          width: '100%',
          borderTop: '2px solid rgba(230, 125, 122, 1)',
          display: 'block',
        }}
      ></div>
      <div className="conbox con1">
        <Data />
      </div>
      <div className="conbox con2">
        <Info />
      </div>
      <div className="conbox con3">
        <Review />
      </div>
      <div className="conbox con4">
        <QnA />
      </div>
    </div>
  );
}

export default Tabs;
