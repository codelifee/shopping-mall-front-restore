import React, { useState } from "react";

import fire from "../img/fire.svg";
import { useStateValue } from "../StateProvider/StateProvider";
import "./CheckoutProduct.css";
function CheckoutProduct({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem('basket');
      return item ? JSON.parse(item) : useStateValue;
    } catch (error) {
      console.log(error);
      return useStateValue;
    }
  });

  const setValue = (value) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      // Save state
      setStoredValue(valueToStore);
      // Save to local storage
      window.localStorage.setItem('basket', JSON.stringify(valueToStore));
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error);
    }
  };

  const removeFromBasket = () => {
    dispatch({
<<<<<<< HEAD
      type: 'REMOVE_FROM_BASKET',
      id: id2,
=======
      type: "REMOVE_FROM_BASKET",
      id: id,
>>>>>>> 21af3f67dcfa70f6b0e7028edc4083c96df861c4
    });
  };
  const style11 = {
    borderBottom: "1px solid red",
  };

  // useEffect(() => {
  //   const formData = window.localStorage.getItem('basket');
  //   console.log(formData);
  //   const savedValues = JSON.parse(formData);

  //   updateFormValues({
  //     ...savedValues.formValues,
  //     id: id2,
  //     title: title2,
  //     image: image2,
  //     price: price2,
  //     quantity: quantity,
  //   });
  // }, []);

  // useEffect(() => {
  //   window.localStorage.setItem('basket', JSON.stringify(formValues));
  //   console.log(formValues);
  // });

  return (
    <>
      <tr style={style11}>
        <td style={{ rowSpan: 2 }}>
<<<<<<< HEAD
          {' '}
          {
            <img
              src={storedValue.image}
              alt="img"
              style={{ width: '80px', position: 'relative', left: '-20px' }}
            />
          }
=======
          {" "}
          {<img src={image} alt="img" style={{ width: "80px" }} />}
>>>>>>> 21af3f67dcfa70f6b0e7028edc4083c96df861c4
        </td>
        <td
          style={{
            width: "700px",
          }}
        >
<<<<<<< HEAD
          <li className="checkout_li">{title2}</li>
          <li className="checkout_li">
            {quantity1 > 1 ? (
              <button
                className="checkout_button"
                onClick={() => {
                  setQuantity1(quantity1 - 1);
=======
          <ul className="checkout_ul">
            <li className="checkout_li">{title}</li>
            <li className="checkout_li">
              {quantity > 1 ? (
                <button
                  className="checkout_button"
                  onClick={() => {
                    setQuantity(quantity - 1);
                  }}
                >
                  -
                </button>
              ) : (
                <button
                  className="checkout_button"
                  onClick={() => {
                    setQuantity(quantity);
                  }}
                >
                  -
                </button>
              )}
              {quantity}
              <button
                className="checkout_button"
                onClick={() => {
                  setQuantity(quantity + 1);
>>>>>>> 21af3f67dcfa70f6b0e7028edc4083c96df861c4
                }}
              >
                +
              </button>
<<<<<<< HEAD
            ) : (
              <button
                className="checkout_button"
                onClick={() => {
                  setQuantity1(quantity1);
                }}
              >
                -
              </button>
            )}
            {quantity1}
            <button
              className="checkout_button"
              onClick={() => {
                setQuantity1(quantity1 + 1);
              }}
            >
              +
            </button>
          </li>
          <li
            className="checkout_li"
            style={{ fontSize: '20px', fontWeight: '1000' }}
          >
            {Array(storedValue.rating2)
              .fill()
              .map((_, i) => (
                <img src={fire} alt="fire" />
              ))}
          </li>
=======
            </li>
            <li
              className="checkout_li"
              style={{ fontSize: "20px", fontWeight: "1000" }}
            >
              {Array(rating)
                .fill()
                .map((_, i) => (
                  <img src={fire} alt="fire" />
                ))}
            </li>
          </ul>
        </td>

        <td className="order_td">
>>>>>>> 21af3f67dcfa70f6b0e7028edc4083c96df861c4
          <li
            className="checkout_li"
            style={{ listStyle: "none", textAlign: "center" }}
          >
            <small>₩</small>
            <strong>
              {new Intl.NumberFormat().format(price2 * quantity1)}
            </strong>
          </li>
          <div className="btnBox">
            <button className="remove" onClick={removeFromBasket}>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </td>
      </tr>
    </>
  );
}

export default CheckoutProduct;
