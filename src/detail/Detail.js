import React, { useState, useContext, useEffect } from "react";
import Tabs from "./Tabs";
import {Link, useParams, useHistory} from "react-router-dom";
import Product from "./Product";
import ProductView from "../ProductView/ProductView";
import "./Detail.css";
import {useStateValue} from "../StateProvider/StateProvider";
import axios from '../axios/axios';


function Detail() {

  const [products, setProducts] = useState([]);
  
  useEffect(()=>{
      async function fetchDate() {
          const request = await axios.get('products/all')
          .then(response =>
              setProducts(response.data)
              )
          .catch(error => console.log(error))
  
          return request;
      }
      
      fetchDate();
  }, [])
  
  console.log(products)

  const [quantity, setQuantity] = useState(1);
  const [{basket}, dispatch] = useStateValue();
  const history = useHistory();

  const {id} = useParams();

  return (
    <div className="detail">
      <div className="detail__product">
        <div className="detail__product_img">
          <img src='' className="img" alt=""></img>
        </div>
        <div className="detail__product_info">
          <p className="detail__product_name">{products[id].product_name}</p>
          <p className="detail__product_price">{new Intl.NumberFormat().format(products[id].price)}원</p>
          <p className="detail__product_delivery">
            배송정보 | 도서산간지역 제외 평균 2~3일 배송
          </p>
          <p className="detail__product_deliveryPrice">배송료 정보</p>
          <p className="detail__product_deliveryPrice_">
            일반지역 2,500원 / 도서산간지역 4,000원{" "}
          </p>
          <hr />
          <p className="quantity">
            {quantity > 1 ? (
              <button
                onClick={() => {
                  setQuantity(quantity - 1);
                }}
              >
                -
              </button>
            ) : (
              <button
                onClick={() => {
                  setQuantity(quantity);
                }}
              >
                -
              </button>
            )}
            구매수량 {quantity}
            <button
              onClick={() => {
                setQuantity(quantity + 1);
              }}
            >
              +
            </button>
          </p>
          <p className="detail__product_totalPrice">
            총 금액 {new Intl.NumberFormat().format(products[id].price * quantity)}원
          </p>
            <button className="detail__keep" onClick={()=>{
              dispatch(
                {type:'ADD_TO_BASKET',
                 item: {
                  id: products[id].id,
                  title: products[id].title,
                  image:'',
                  description: products[id].description,
                  price: Intl.NumberFormat().format(products[id].price * quantity),
                  rating: products[id].rating
                }}
              )
            }}>장바구니</button>
          
          
          <button className="detail__order"  onClick={()=>{
              dispatch(
                {type:'ADD_TO_BASKET',
                 item: {
                  id: products[id].id,
                  title: products[id].title,
                  image:'',
                  description: products[id].description,
                  price: Intl.NumberFormat().format(products[id].price * quantity),
                  rating: products[id].rating
                }}
              )
              history.push('/payment')
            }}>주문하기</button>
          
        </div>
      </div>
      <Tabs />
    </div>
  );
}

export default Detail;
