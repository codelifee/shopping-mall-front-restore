import React, { useState, useEffect } from "react";
import axios from "../axios/axios";
import { useHistory } from "react-router-dom";
import { ImageData } from "../axios/urlData";
import Cookies from "js-cookie";
import "./OrdersData.css";

function OrdersData({
  date,
  status,
  address,
  product,
  price,
  picture,
  order_id,
  o_return,
  product_id,
  quantity,
}) {
  let image = ImageData.image1 + product_id;
  const [cookie, setCookie] = useState();
  let moment = require("moment");

  console.log(date);
  console.log(status);
  console.log(product);
  console.log(price);
  console.log(order_id);
  console.log(o_return);
  console.log(product_id);

  const getCookie = () => {
    const cookie = Cookies.get("user");
    console.log(cookie);
    setCookie(cookie);
  };

  const style11 = {
    borderTop: "1px solid red",
  };
  const history = useHistory();

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    setOrders({
      order_return: o_return,
    });
  }, setOrders);

  const handleStatus = (e) => {
    e.preventDefault();

    //let order_id = e.target.order_id;
    setOrders(e.target.value);
  };
  console.log(orders);

  const patchOrderStatus = (e) => {
    //let order_id = e.target.order_id;

    //console.log(id)

    axios
      .patch(`/orders/${order_id}`, { order_return: orders })
      .then((res) => alert("변경이 완료 되었습니다"))
      .catch((err) => console.log(err));
  };

  let date1 = moment(new Date());
  console.log(date1);
  let diff1 = date1.diff(date, "days");
  console.log(diff1);

  const [select, setSelect] = useState(false);
  const showSelect = () => setSelect(!select);
  return (
    <>
      <div className="order_date">{date}</div>
      <div className="order">
        <div className="order_all1">
          <div className="ordersstatus">{status}</div>
          <div className="order_Product">
            <img
              src={image}
              alt="img"
              style={{ width: "80px", position: "relative", left: "-20px" }}
            />
            <div className="product">
              <ul>
                <li>{product}</li>
                <li>
                  수량: {quantity}개 / 주문번호 : {order_id}{" "}
                </li>

                <li> ₩{new Intl.NumberFormat().format(price)}</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="order_all2">
          <div className="ordersstatus"></div>
          <div className="option_button">
            <select
              id={order_id}
              onChange={handleStatus}
              className={diff1 > 7 ? "order_none order_none2" : "order_option "}
              onClick={showSelect}
            >
              <option value="교환">교환</option>
              <option value="반품">반품</option>
            </select>

            <p
              id={order_id}
              onClick={patchOrderStatus}
              className="order_option2"
              style={diff1 > 7 ? { display: "block" } : { display: "none" }}
            >
              배송 완료 후 7일 이후
              <br />
              교환/반품 불가 합니다.
            </p>
            <button
              id={order_id}
              onClick={patchOrderStatus}
              className=" order_none2"
              style={diff1 > 7 ? { display: "none" } : { display: "block" }}
            >
              변경하기
            </button>

            <button
              className="review__btn"
              onClick={() => {
                window.open(
                  `/review/${product_id}`,
                  "review_form",
                  "width=600,height=500,location=no,status=no,scrollbars=no"
                );
              }}
            >
              리뷰 작성
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrdersData;
