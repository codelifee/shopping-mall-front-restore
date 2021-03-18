import React, { useState, useEffect } from 'react';

import fire from '../img/fire.svg';
import { useStateValue } from '../StateProvider/StateProvider';
import './CheckoutProduct.css';
function CheckoutProduct({ id, title, image, description, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  const [quantity, setQuantity] = useState(1);
  const [formValues, updateFormValues] = useState({ basket });

  console.log(formValues);

  const removeFromBasket = () => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: id,
    });
  };
  const style11 = {
    borderBottom: '1px solid red',
  };

  useEffect(() => {
    const formData = window.localStorage.getItem('basket');
    console.log(formData);
    updateFormValues(JSON.parse(formData));
  }, []);

  useEffect(() => {
    window.localStorage.setItem('basket', JSON.stringify(formValues));
  });

  return (
    <>
      <tr style={style11}>
        <td style={{ rowSpan: 2 }}>
          {' '}
          {
            <img
              src={image}
              alt="img"
              style={{ width: '80px', position: 'relative', left: '-20px' }}
            />
          }
        </td>
        <td
          style={{
            width: '700px',
          }}
        >
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
              }}
            >
              +
            </button>
          </li>
          <li
            className="checkout_li"
            style={{ fontSize: '20px', fontWeight: '1000' }}
          >
            {Array(rating)
              .fill()
              .map((_, i) => (
                <img src={fire} alt="fire" />
              ))}
          </li>
          <li
            className="checkout_li"
            style={{ listStyle: 'none', textAlign: 'center' }}
          >
            <small>₩</small>
            <strong>{new Intl.NumberFormat().format(price * quantity)}</strong>
          </li>
        </td>

        <td className="order_td">
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
