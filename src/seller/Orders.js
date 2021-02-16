import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import DatePicker from "react-datepicker";
import OrdersData from "./OrdersData";
import axios from "../axios/axios";
import { useHistory, useParams } from "react-router-dom";

function Orders(props) {
  const [startDate, setStartDate] = useState(new Date());
  const [orders, setOrders] = useState([{ props }]);

  let history = useHistory();

  const { id } = useParams();
  const img = `http://shoppingmall-env.eba-jac9afx7.us-east-1.elasticbeanstalk.com/products/showProductImage/${id}`;

  useEffect(() => {
    async function fetchDate() {
      const request = await axios
        .get(`Orders/{id}`)
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
          history.push(`/orders/{props.id}`);
        }}
      >
        {props.title}
      </p>
      <div className="order__container">
        <div className="order__search">
          <form className="order__searchbar">
            <input type="text" />
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
          {orders.map(order => (
            <div>
              <OrdersData
                status={order.order_status}
                key={order.order_id}
                name={order.user_id}
                product={order.product_name}
                date={order.order_date_created}
                address={order.user_address}
                picture={img}
                amount={order.product_price}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Orders;
