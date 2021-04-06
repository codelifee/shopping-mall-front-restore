import React, { useStatem, useEffect, useState } from "react";
import "./Order.css";
import { FaSearch } from "react-icons/fa";
import DatePicker from "react-datepicker";
import OrderItems from "./OrderItems";
import axios from "../axios/axios";
import "react-datepicker/dist/react-datepicker.css";

function Order() {
  const [startDate, setStartDate] = useState(new Date());

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function fetchDate() {
      const request = await axios
        .get("orders/all")
        .then((response) => setOrders(response.data))
        .catch((error) => console.log(error));

      return request;
    }

    console.log(orders);

    fetchDate();
  }, []);

  return (
    <div className="order2">
      <div className="order__container2">
        <div className="order__search">
          <div className="order__head">
            <div className="order__button_and_input">
              <div className="order__button">
                <button className="order__search-button">Search</button>
                <button className="order__reset-button">Reset</button>
              </div>
              <form className="order__searchbar">
                <input type="text" className="order__input" />
                <FaSearch className="search-icon" />
              </form>
            </div>

            <div className="order__category">
              <p>Order Creation Date</p>
              <DatePicker
                className="date"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
          </div>
        </div>
        <div className="order__info4">
          <h2>{orders.length} Orders</h2>
        </div>
        <div className="order__table_bg">
          <table className="order__table">
            <thead className="order__table-thead">
              <th className="order__th1">아이디</th>
              <th className="order__th2">날짜</th>
              <th className="order__th3">주소</th>
              <th className="order__th3">배송상태</th>
            </thead>
            <tbody>
              {orders.map((order) => (
                <OrderItems
                  key={order.order_id}
                  id={order.order_id}
                  name={order.user_id}
                  date={order.order_date_created}
                  address={order.user_address}
                  status={order.order_status}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Order;
