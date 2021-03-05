import React, { useState, useEffect } from "react";
import axios from "../axios/axios";
import "./OrdersData.css";
import { useParams } from "react-router-dom";
import {  useHistory } from 'react-router-dom';
function OrdersData({date, status, product, price, picture,props, id, img} ) {
 
   
  const [customer, setCustomer] = useState([]);
  const {user_sequence_id} = useParams();
  const history = useHistory();
  useEffect(() => {
      async function fetchData() {
          const request = await axios.get(`users/${user_sequence_id}`)
          .then(response => 
              setCustomer(response.data)
          )
          .catch(error => console.log(error))
         
          return request;
      }
      fetchData();
  }, [])
  console.log(user_sequence_id)
  console.log(customer)

 
  const [startDate, setStartDate] = useState(new Date());
  const [orders, setOrders] = useState([{}]);
  const [products, setProducts] = useState([]);
  


 
  

  useEffect(() => {
    async function fetchDate() {
      const request = await axios
        .get(`/orders/userid/${user_sequence_id}`)

        .then(response => setOrders(response.data))
        .catch(error => console.log(error));

      return request;
    }

    fetchDate();
  }, []); 
 

  return (
    <div>
      <div className="order_title">
    <span className="orderTitle1">
          <h4>{date} &gt;&gt;</h4>
        </span>
    
    
        </div>
    <div className="ordersData" >
      
        
        
        <span className="orderTitle3">
          <h4>결제완료( {status} )</h4>
        </span>
        
      

      <div className="orders">
        
        <img src={img} className="orderImg" alt="제품사진" />
        <div className="orderWrp">
          <div className="orderProduct">{product}</div>
          <div className="orderPrice">{price}원</div>
          
        </div>
        {/* <button className="order_Product_btn">제품상세보기</button> */}
        <div className="order_Button">
          
          <button className="order_btn"  onClick={()=>{
         history.push(`/user/return/${user_sequence_id}`)
       }}>반품신청</button>
          <button className="order_btn"   onClick={()=>{
         history.push(`/user/exchange/${user_sequence_id}`)
       }}>교환신청</button>
          <button className="order_btn" onClick={()=>{
         history.push(`/review/${id}`)
       }}>구매후기</button>
        </div>
      </div>
      {/* <div className="Name">{name} </div> */}
      {/* <div className="orderAddress">{address}</div> */}
    </div>
    </div>
  );
}

export default OrdersData;
