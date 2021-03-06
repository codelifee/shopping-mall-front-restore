import React, { useState, useEffect } from "react";
import axios from "../axios/axios";
import OrdersDataDetails from "./OrdersDataDetails";
import { useParams } from "react-router-dom";
import "./OrderDetails.css";
import CurrencyFormat from "react-currency-format";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../StateProvider/StateProvider";
import { ImageData } from "../axios/urlData";

function OrderDetails() {
  const [customer, setCustomer] = useState([]);
  const { user_sequence_id } = useParams();

  useEffect(() => {
    async function fetchData() {
      const request = await axios
        .get(`users/${user_sequence_id}`)
        .then((response) => setCustomer(response.data))
        .catch((error) => console.log(error));

      return request;
    }
    fetchData();
  }, []);
  console.log(user_sequence_id);
  console.log(customer);

  const [table, setTable] = useState({
    user_id: customer.user_id,
    user_name: customer.user_name,
    user_phone: customer.user_phone,
    user_address: customer.user_address,
    order_amount: customer.order_amount,
  });

  const [startDate, setStartDate] = useState(new Date());
  const [orders, setOrders] = useState([{}]);

  let image = ImageData.image1;

  useEffect(() => {
    async function fetchDate() {
      const request = await axios
        .get(`orders/userid/${user_sequence_id}`)
        .then((response) => setOrders(response.data))
        .catch((error) => console.log(error));

      return request;
    }

    fetchDate();
  }, []);

  return (
    <div className="orderDetails">
      <div className="orderDetails__container">
        <div className="orderDetails__container__head">
          <h3 className="orderDetails_title">주문상세</h3>
        </div>
        {orders.map((order) => (
          <OrdersDataDetails
            status={order.order_status}
            key={order.order_id}
            name={order.user_id}
            id={order.product_id}
            product={order.product_name}
            date={order.order_date_created}
            address={order.user_address}
            picture={image + order.product_id}
            price={order.product_price}
            amount={order.order_amount}
          />
        ))}

        <div className="orderDetails_table">
          <p className="orderDetails_title">받는사람 정보</p>
          <table
            className="orderDetails__info"
            style={{
              borderTop: "5px solid #e6b797",
              borderBottom: "1px solid #eee",
            }}
          >
            <tr>
              <td
                className="orderDetails_name"
                style={{
                  width: "150px",
                  textAlign: "left",
                  paddingLeft: "30px",
                  borderLeft: "1px solid #ccc",
                  borderLeft: "1px solid #ccc",
                  borderRight: "1px solid #ccc",
                  borderBottom: "1px solid #ccc",
                }}
              >
                받는사람
              </td>

              <td
                style={{
                  textAlign: "left",
                  paddingLeft: "30px",
                  borderRight: "1px solid #ccc",
                  borderBottom: "1px solid #ccc",
                }}
              >
                {customer.user_name}
              </td>
            </tr>
            <tr>
              <td
                className="orderDetails_phone"
                style={{
                  textAlign: "left",
                  paddingLeft: "30px",
                  border: "0px",
                  borderLeft: "1px solid #ccc",
                  borderLeft: "1px solid #ccc",
                  borderRight: "1px solid #ccc",
                  borderBottom: "1px solid #ccc",
                }}
              >
                연락처
              </td>
              <td
                style={{
                  textAlign: "left",
                  paddingLeft: "30px",
                  borderRight: "1px solid #ccc",
                  borderBottom: "1px solid #ccc",
                }}
              >
                {customer.user_phone}
              </td>
            </tr>
            <tr>
              <td
                className="orderDetails_address"
                style={{
                  textAlign: "left",
                  paddingLeft: "30px",
                  borderLeft: "1px solid #ccc",
                  borderLeft: "1px solid #ccc",
                  borderRight: "1px solid #ccc",
                  borderBottom: "1px solid #ccc",
                }}
              >
                받는주소
              </td>
              <td
                style={{
                  textAlign: "left",
                  paddingLeft: "30px",
                  borderRight: "1px solid #ccc",
                  borderBottom: "1px solid #ccc",
                }}
              >
                {customer.user_address}
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default OrderDetails;
