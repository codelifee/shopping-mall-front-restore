import React, { useState, useEffect } from "react";
import axios from "../axios/axios";
import { useParams } from "react-router-dom";
import { Link, useHistory } from 'react-router-dom';
import UpdateProfile from "./UpdateProfile";
import { OmitProps } from "antd/lib/transfer/ListBody";
import { blacklistedBrowsers } from "dropzone";
import {ImageData} from '../axios/urlData';
function OrdersData({ date, status, address, product, price, picture, order_id, o_return, product_id, quantity }) {

  let image = ImageData.image1 + product_id

  console.log(date);
  console.log(status);
  console.log(product);
  console.log(price);
  console.log(order_id);
  console.log(o_return);
  console.log(product_id);
  const style = {
    borderBottom: '1px solid red'
  };
  const history = useHistory();

  const [orders, setOrders] = useState({
    order_return: "기본",
  })


  const handleStatus = e => {
    e.preventDefault();
    //let order_id = e.target.order_id;
    setOrders({
      order_return: "교환"
    })
    //console.log(orders)
  }


  const patchOrderStatus = (e) => {
    //let order_id = e.target.order_id;

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

  console.log(setOrders + "결과")


  return (    
  <div className="order_overall">

    <table className="order_table" style={{
      border: '1px solid black'
    }}>
      
      <tr style={style}>
        <th style={style} className="order_td">날짜</th>
        <th style={style} className="order_td">상품정보</th>
        <th style={style} className="order_td">상태</th>
        <th style={style} className="order_td">교환/환불신청</th>
        <th style={style} className="order_td">리뷰작성</th>
      </tr>
      <tr style={style}>
        <td className="order_tdtd">{date}</td>
        <td style={{display:"flex", flexDecoration:"column", alignItems:"center", justifyContent:"center"}} className="order_tdtd">        
      <img src={image} alt="img" style={{width:"80px", position:"relative", left:"-20px"}}/>
          <div className="product">
            <ul style={{listStyle:"none", textAlign:"left"}}>

            <li>{product}</li>
            <li> {price}원</li>
            <li>{quantity}개</li></ul></div>
        </td>
        <td className="order_tdtd">{status}</td>
        <td><select value={orders.order_return} id={order_id} onChange={handleStatus}>
          <option value="교환">교환</option>
          <option value="반품">반품</option>
        </select>
        <button id={order_id} onClick={patchOrderStatus}>변경하기</button>
        </td>

        <td className="order_td"><a href={`/review1/${product_id}`}><button className="order_btn">구매후기</button></a></td>
      </tr>
    </table >
    </div>
  );
}

export default OrdersData;
