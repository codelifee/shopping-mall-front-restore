import React, { useState, useEffect } from "react";
import axios from "../axios/axios";
import "./Order.css";

function OrderItems({ id, name, date, address, status }) {
  const [newStatus, setNewStatus] = useState({
    order_status: "배송준비중",
  });

  const handleStatus = (e) => {
    e.preventDefault();
    let id = e.target.id;

    setNewStatus({
      order_status: e.target.value,
    });

  };

  const patchOrderStatus = (e) => {
    let id = e.target.id;

    axios
      .patch(`/orders/${id}`, newStatus)
      .then((res) => alert("변경이 완료 되었습니다"))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    setNewStatus({
      order_status: status,
    });
  }, newStatus);

  console.log(newStatus + ".");

  return (
    <>
      <tr>
        <td className="order__product_td1">{name}</td>
        <td className="order__product_td2">{date}</td>
        <td className="order__product_td3">{address}</td>
        <td className="order__product_td3">
          <select
            value={newStatus.order_status}
            id={id}
            onChange={handleStatus}
            className="order__product-option"
          >
            <option value="배송완료">배송완료</option>
            <option value="배송중">배송중</option>
            <option value="배송시작">배송시작</option>
            <option value="배송준비중">배송준비중</option>
          </select>
          <button
            id={id}
            onClick={patchOrderStatus}
            className="order__table-button"
          >
            변경하기
          </button>
        </td>
      </tr>
    </>
  );
}

export default OrderItems;
