import React, { useState, useEffect } from "react";
import axios from "../axios/axios";
import { useParams } from "react-router-dom";
import { Link, useHistory } from "react-router-dom";
import UpdateProfile from "./UpdateProfile";
import { OmitProps } from "antd/lib/transfer/ListBody";
import { blacklistedBrowsers } from "dropzone";
import { ImageData } from "../axios/urlData";

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

  console.log(date);
  console.log(status);
  console.log(product);
  console.log(price);
  console.log(order_id);
  console.log(o_return);
  console.log(product_id);

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

  return (
    <>
      <tr style={style11}>
        <td style={style11}>{date}</td>
        <td
          style={{
            display: "flex",
            flexDecoration: "column",
            alignItems: "center",
            justifyContent: "center",
            borderTop: "1px solid red",
          }}
          className="order_tdtd"
        >
          <img
            src={image}
            alt="img"
            style={{ width: "80px", position: "relative", left: "-20px" }}
          />
          <div className="product">
            <ul style={{ listStyle: "none", textAlign: "left" }}>
              <li>{product}</li>
              <li style={{ fontSize: "10px" }}>
                수량: {quantity}개 / 주문번호 : {order_id}{" "}
              </li>
              <li style={{ fontSize: "20px", fontWeight: "1000" }}>
                {" "}
                ₩{new Intl.NumberFormat().format(price)}
              </li>
            </ul>
          </div>
        </td>

        <td className="order_tdtd" style={style11}>
          {status}
        </td>
        <td style={style11}>
          <select id={order_id} onChange={handleStatus}>
            <option value="교환">교환</option>
            <option value="반품">반품</option>
          </select>
          <button id={order_id} onClick={patchOrderStatus}>
            변경하기
          </button>
        </td>

        <td className="order_td" style={style11}>
          <button
            className="review__button"
            onClick={() => {
              window.open(
                `/review/${product_id}`,
                "review_form",
                "width=600,height=700,location=no,status=no,scrollbars=no"
              );
            }}
          >
            리뷰 작성
          </button>
        </td>
      </tr>
    </>
  );
}

export default OrdersData;
