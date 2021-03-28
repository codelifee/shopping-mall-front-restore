import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import DatePicker from "react-datepicker";
import OrdersData from "./OrdersData";
import axios from "../axios/axios";
import { useHistory, useParams } from "react-router-dom";
import "./Orders.css";
import { ImageData } from "../axios/urlData";
import * as AiIcons from "react-icons/ai";

function Orders() {
  const [startDate, setStartDate] = useState(new Date());
  const [searchTerm, setSearchTerm] = useState("");

  const [orders, setOrders] = useState([{}]);
  let image = ImageData.image1;

  let history = useHistory();

  const { user_sequence_id } = useParams();

  useEffect(() => {
    async function fetchDate() {
      const request = await axios
        .get(`/orders/userid/${user_sequence_id}`)

        .then((response) => setOrders(response.data))
        .catch((error) => console.log(error));

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
          <form className="orders__searchbar">
            <div className="orders__button">
              <button className="orders__search-button">검색</button>
            </div>
            <input
              name="keyword"
              placeholder="Search"
              type="text"
              className="orders__input"
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
            />
            <FaSearch className="search-icon" />
            <button className="orders__reset-button">
              <AiIcons.AiOutlineClose />
            </button>
          </form>
          <div className="orders__category">
            <p className="orders__category_p">주문 내역 조회</p>
            <DatePicker
              className="orders_date"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </div>
        </div>

        <div className="orders__info">
          <h2>{orders?.length} 개의 상품</h2>
        </div>
        <div className="orders__table">
          {orders.order_status}
          <div className="order_table">
            <div className="body">
              {orders
                .filter((order) => {
                  if (searchTerm == "" /*&& product.category_id == id*/) {
                    return order;
                  } else if (
                    order.product_name
                      .toLowerCase()
                      .includes(
                        searchTerm.toLowerCase()
                      ) /*&&
                    product.category_id == id*/
                  ) {
                    return order;
                  }
                })
                .map((order) => (
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
      </div>
    </div>
  );
}
export default Orders;
