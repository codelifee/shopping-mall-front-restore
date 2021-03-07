import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import DatePicker from "react-datepicker";
import OrdersData from "./OrdersData";
import axios from "../axios/axios";
import { useHistory, useParams } from "react-router-dom";
import "./Orders.css";
import {ImageData} from '../axios/urlData';

function Orders() {
  const [startDate, setStartDate] = useState(new Date());
  const [orders, setOrders] = useState([{}]);
  let image = ImageData.image1

  let history = useHistory();

  const { user_sequence_id } = useParams();

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
    <div className="orders_bg">
      {/* <p
        className="product__name"
        onClick={() => {
          history.push(`orders/${user_sequence_id}`);
        }}
      >
        {orders.title}
      </p> */}
      <div className="orders__container">
        <div className="orders__search">
          <div className="orders__button">
            <button className="orders__search-button">Search</button>
            <button className="orders__reset-button">Reset</button>
          </div>
          <form className="orders__searchbar">
            <input
              name="keyword"
              placeholder="Search"
              type="text"
              className="orders__input"
            />
            <FaSearch className="search-icon" />
          </form>
          <div className="orders__category">
            <p lassName="orders__category_p">Order Creation Date</p>
            <DatePicker
              className="orders_date"
              selected={startDate}
              onChange={date => setStartDate(date)}
            />
          </div>
        </div>

        <div className="orders__info">
          <h2>{orders?.length} Orders</h2>
        </div>
        <div className="orders__table">

          {orders.order_status}

          {orders.map(order => (
            <OrdersData
              status={order.order_status}
              key={order.order_id}
              order_id={order.order_id}
              product_id={order.product_id}
              name={order.user_id}
              product={order.product_name}
              date={order.order_date_created}
              address={order.user_address}
              picture={image + order.product_id}
              price={order.product_price}
              quantity={order.quantity}
              o_return={order.order_return}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
export default Orders;
