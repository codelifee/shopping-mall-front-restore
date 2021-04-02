import React, { useState, useEffect } from "react";
import Subtotal from "./Subtotal";
import { useSelector } from "react-redux";
import fire from "../img/fire.svg";
import { useStateValue } from "../StateProvider/StateProvider";
import "./CheckoutProduct.css";
import axios from "../axios/axios";
import Cookies from "js-cookie";

function CheckoutProduct({ cart_id, id, title, quantity, image, price }) {
  const [{ basket }, dispatch] = useStateValue();
  const [cart, setCart] = useState(basket);

  const [stateQuantity, setStateQuantity] = useState([]);

  // const [checkoutItem, setCheckoutItem] = useState([])

  // useEffect(() => {
  //   setCheckoutItem({
  //     cart_item_quantity: quantity,
  //   });
  // }, quantity);

  useEffect(() => {
    setStateQuantity({
      cart_item_quantity: quantity,
    });
  });

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  const style11 = {
    borderBottom: "1px solid red",
  };

  const cookie = Cookies.get("user");

  const minusQuantity = (cart_id) => {
    setStateQuantity(stateQuantity - 1);

    axios
      .patch(`/cartitems/${cart_id}`, { cart_item_quantity: stateQuantity })
      .then((res) => {
        console.log(res);
        alert("수량 1개가 감소했습니다.");
      })
      .catch((err) => console.log(err));
  };

  const plusQuantity = (cart_id) => {
    setStateQuantity(stateQuantity + 1);

    console.log(stateQuantity);

    axios
      .patch(`/cartitems/${cart_id}`, { cart_item_quantity: stateQuantity })
      .then((res) => {
        console.log(res);
        alert("수량 1개가 증가했습니다.");
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    async function getQuantity() {
      const request = await axios
        .get(`/cartitems/${cart_id}`)
        .then((response) => setStateQuantity(response.data))
        .catch((error) => console.log(error));
      return request;
    }
    getQuantity();
  }, []);

  return (
    <>
      <tr style={style11}>
        <td style={{ rowSpan: 1 }}>
          {" "}
          {<img src={image} alt="img" style={{ width: "80px" }} />}
        </td>
        <td
          style={{
            width: "660px",
          }}
        >
          <ul className="checkout_ul">
            <li className="checkout_li">{title}</li>

            <li className="checkout_li">
              {quantity > 1 ? (
                <button
                  className="checkout_button"
                  onClick={() => minusQuantity(cart_id)}
                >
                  -
                </button>
              ) : (
                <button className="checkout_button">-</button>
              )}

              {stateQuantity}
              <button
                className="checkout_button"
                onClick={() => plusQuantity(cart_id)}
              >
                +
              </button>
            </li>
            <li className="checkout_li">
              <small>₩</small>
              {new Intl.NumberFormat().format(price)}
            </li>
          </ul>
        </td>

        <td className="order_td">
          <li
            className="checkout_li"
            style={{ listStyle: "none", textAlign: "center" }}
          >
            <small>₩</small>
            <strong>{price * stateQuantity}</strong>
          </li>

          <div className="btnBox">
            <button className="remove" onClick={removeFromBasket}></button>
          </div>
        </td>
      </tr>
    </>
  );
}

export default CheckoutProduct;
