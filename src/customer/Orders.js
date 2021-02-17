import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import DatePicker from "react-datepicker";
import OrdersData from "./OrdersData";
import axios from "../axios/axios";
import { useHistory, useParams } from "react-router-dom";
import AllProducts from "../sidebar/AllProducts";

function Orders() {
  const [startDate, setStartDate] = useState(new Date());
  const [orders, setOrders] = useState([{}]);

  let history = useHistory();

  const {user_sequence_id} = useParams();
  const img = `http://shoppingmall-env.eba-jac9afx7.us-east-1.elasticbeanstalk.com/products/showProductImage/`;

  useEffect(() => {
    async function fetchDate() {
      const request = await axios
        .get(`http://localhost:5000/orders/userid/${user_sequence_id}`)

        .then(response => setOrders(response.data))
        .catch(error => console.log(error));

      return request;
    }

    fetchDate();
  }, []);

  return (
    <div className="order">
      <p
        className="product__name"
        onClick={() => {
          history.push(`orders/${user_sequence_id}`);
        }}
      >
        {orders.title}
      </p>
      <div className="order__container">
        <div className="order__search">
          <form className="order__searchbar">
            <input name="keyword" placeholder="Search" type="text" />
            <FaSearch className="search-icon" />
          </form>
          <div className="order__category">
            <p>Order Creation Date</p>
            <DatePicker
              className="date"
              selected={startDate}
              onChange={date => setStartDate(date)}
            />
          </div>
        </div>
        <div className="order__button">
          <button className="search-button">Search</button>
          <button className="reset-button">Reset</button>
        </div>
        <div className="order__info">
          <h2>{orders?.length} Orders</h2>
        </div>
        <div className="order__table">
          {orders.order_status}

          {orders.map(order => (
            <OrdersData
              status={order.order_status}
              key={order.order_id}
              name={order.user_id}
              product={order.product_name}
              date={order.order_date_created}
              address={order.user_address}
              picture={img + order.product_id}
              amount={order.product_price}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
export default Orders;
