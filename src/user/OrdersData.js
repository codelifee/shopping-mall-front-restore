import React, { useState, useEffect } from "react";
import axios from "../axios/axios";
import "./OrdersData.css";
import { useParams } from "react-router-dom";
import { Link, useHistory } from 'react-router-dom';

function OrdersData({  date, status, product, price, picture }) {
  const [orders, setOrders] = useState([]);
  const history = useHistory();
  const {user_sequence_id} = useParams();
  useEffect(()=>{
    async function fetchDate(){
        const request = await axios.get(`orders/all`)
        .then(response =>
            setOrders(response.data))
        .catch(error => console.log(error))
             
        return request;
    }
    fetchDate();
}, [])

   
  return (
    <div>
      <div className="order_title">
    <span className="orderTitle1">
          <h4>{date} &gt;&gt;</h4>
        </span>
    
    <span className="orderTitle2">
    
     <div  className="order_details" onClick={()=>{
         history.push(`/user/orderDetails/${user_sequence_id}`)
       }}
       >주문상세보기 &gt;&gt;</div>
    
          
        </span>
        </div>
    <div className="ordersData" >
      
        
        
        <span className="orderTitle3">
          <h4>결제완료( {status} )</h4>
        </span>
        
      

      <div className="orders">
        
        <img src={picture} className="orderImg" alt="제품사진" />
        <div className="orderWrp">
          <div className="orderProduct">{product}</div>
          <div className="orderPrice">{price}원</div>
          
        </div>
        {/* <button className="order_Product_btn">제품상세보기</button> */}
        <div className="order_Button">
          
          <button className="order_btn">반품신청</button>
          <button className="order_btn">교환신청</button>
          <button className="order_btn">구매후기</button>
        </div>
      </div>
      {/* <div className="Name">{name} </div> */}
      {/* <div className="orderAddress">{address}</div> */}
    </div>
    </div>
  );
}

export default OrdersData;
