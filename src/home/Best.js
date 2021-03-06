import React, { useState, useEffect } from 'react';
import './Best.css';
import BestData from './BestData';
import BestData2 from './BestData2';
import { Link } from 'react-router-dom';
import axios from '../axios/axios.js';
import { LinkOffRounded } from '@material-ui/icons';

//product_id 받아와서 product_detail page로 넘기기

function Best() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchDate() {
      const request = await axios
        .get(`products/all`)
        .then((response) => setProducts(response.data))
        .catch((error) => console.log(error));

      return request;
    }
    fetchDate();
  }, []);
  console.log(products);

  let [best, bestChange] = useState(BestData);
  let [best2, bestChange2] = useState(BestData2);

  return (
    <>
      <div className="home_container">
        <p className="title">인기상품을 만나보세요</p>
        <div className="content">
          {best.map((data, i) => {
            return <BestItem best={best[i]} key={i} />;
          })}
        </div>

        <div className="content">
          {best2.map((data, i) => {
            return <BestItem2 best2={best2[i]} key={i} />;
          })}
        </div>
      </div>
    </>
  );
}

function BestItem(props) {
  return (
    <div className="best_item">
      <Link to={`/detail/${props.best.product_id}`}>
        <div className="ranking">{props.best.ranking}</div>
        <img src={props.best.img} className="best_item_img" />
        <h4 className="none">{props.best.decoration}</h4>
        <h4>{props.best.title}</h4>
        <h4>{props.best.price}원</h4>
      </Link>
    </div>
  );
}
function BestItem2(props) {
  return (
    <div className="best_item">
      <Link to={`/detail/${props.best2.product_id}`}>
        <div className="ranking">{props.best2.ranking}</div>
        <img src={props.best2.img} className="best_item_img" />
        <h4 className="none">{props.best2.decoration}</h4>
        <h4>{props.best2.title}</h4>
        <h4>{props.best2.price}원</h4>
      </Link>
    </div>
  );
}

export default Best;
