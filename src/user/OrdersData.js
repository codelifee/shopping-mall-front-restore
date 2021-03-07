import React, { useState, useEffect } from "react";
import axios from "../axios/axios";
import "./OrdersData.css";
import { useParams } from "react-router-dom";
import { Link, useHistory } from 'react-router-dom';
import UpdateProfile from "./UpdateProfile";
import { OmitProps } from "antd/lib/transfer/ListBody";

function OrdersData({ date, status, product, price, picture, order_id, o_return, product_id }) {

  const history = useHistory();

  const [orders, setOrders] = useState({
    order_return: "기본",
  })
  

  const handleStatus = e => {
    e.preventDefault();
    let order_id = e.target.id;
    setOrders({
      order_return: e.target.value
    })
    //console.log(orders)
  }


  const patchOrderStatus = (e) => {
    let order_id = e.target.id;

    //console.log(id)

    axios.patch(`/orders/${order_id}`, orders)
      .then(res => alert("변경이 완료 되었습니다"))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    setOrders({
      order_return: o_return
    })
  }, setOrders)

  console.log(setOrders+"결과")


  return (
    <div>
      <div className="order_title">
        <span className="orderTitle1">
          <h4>{date} &gt;&gt;</h4>
        </span>
        {/* 
        <span className="orderTitle2">

          <div className="order_details" onClick={() => {
            history.push(`/user/orderdetail/${user_sequence_id}`)
          }}
          >주문상세보기 &gt;&gt;</div>
        </span> */}
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
          <select value={orders.order_return} id={order_id} onChange={handleStatus}>
            <option value="교환">교환</option>
            <option value="반품">반품</option>
          </select>

        </div>
        <a href={`/review/${product_id}`}><button className="order_btn">구매후기</button></a>
        <button id={order_id} onClick={patchOrderStatus}>변경하기</button>

      </div>
      {/* <div className="Name">{name} </div> */}
      {/* <div className="orderAddress">{address}</div> */}
    </div>

  );
}

export default OrdersData;
