import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import DatePicker from "react-datepicker";
import OrdersData from "./OrdersData";
import axios from "../axios/axios";
import { useHistory, useParams } from "react-router-dom";
import "./Orders.css";
import { ImageData } from "../axios/urlData";
import SearchIcon from "@material-ui/icons/Search";
import { useStateValue } from "../StateProvider/StateProvider";
function Orders() {
  const [startDate, setStartDate] = useState(new Date());
  const [orders, setOrders] = useState([{}]);
  let image = ImageData.image1;

  let history = useHistory();

  const { user_sequence_id } = useParams();
  const [{ basket, user }, dispatch] = useStateValue();

  const [{ keyword }, keyword_dispatch] = useStateValue();

  const [search, setSearch] = useState("");

  const handleAuthentication = () => {
    if (user.loggedIn != "") {
      dispatch({ type: "SET_USER", user: {} });
    }
  };

  console.log(search);

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
      <div className="orders__container">
        <div className="orders__search">
          <div className="orders__button">
            <button className="orders__search-button">Search</button>
            <button className="orders__reset-button">Reset</button>
          </div>
          <form className="orders__searchbar">
            <input
              className="header__searchInput"
              type="text"
              placeholder="검색"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  keyword_dispatch({
                    type: "SEARCH",
                    item: { word: search },
                  });
                  history.push(`product/${search}`);
                }
              }}
            />

            <SearchIcon
              className="header__searchIcon"
              onClick={() => {
                keyword_dispatch({
                  type: "SEARCH",
                  item: { word: search },
                });

                history.push(`product/${search}`);
              }}
            />
          </form>
          <div className="orders__category">
            <p lassName="orders__category_p">Order Creation Date</p>
            <DatePicker
              className="orders_date"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </div>
        </div>

        <div className="orders__info">
          <h2>{orders?.length} Orders</h2>
        </div>
        <div className="orders__table">
          {orders.order_status}
          <table
            className="order_table"
            style={{
              border: "1px solid black",
              width: "100%",
            }}
          >
            <thead>
              <th className="order_td">날짜</th>
              <th className="order_td">상품정보</th>
              <th className="order_td">상태</th>
              <th className="order_td">교환/환불신청</th>
              <th className="order_td">리뷰작성</th>
            </thead>
            <tbody>
              {orders.map((order) => (
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
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default Orders;
