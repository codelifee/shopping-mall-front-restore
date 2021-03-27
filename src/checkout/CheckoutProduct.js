import React, { useState, useEffect } from 'react';
import Subtotal from './Subtotal';
import { useSelector } from 'react-redux';
import fire from '../img/fire.svg';
import { useStateValue } from '../StateProvider/StateProvider';
import './CheckoutProduct.css';

const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart') || '[]');

function CheckoutProduct({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  const [quantity, setQuantity] = useState(1);
  const [cart, setCart] = useState(basket);
  console.log(cart);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const removeFromBasket = () => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: id,
    });
  };

  const style11 = {
    borderBottom: '1px solid red',
  };

  return (
    <div>
      {cart.map((product, index) => (
        <tr style={style11}>
          <td style={{ rowSpan: 2 }}>
            {' '}
            {<img src={product.image} alt="img" style={{ width: '80px' }} />}
          </td>
          <td
            style={{
              width: '700px',
            }}
          >
            <ul className="checkout_ul">
              <li className="checkout_li">{product.title}</li>
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
            </ul>
          </td>

          <td className="order_td">
            <li
              className="checkout_li"
              style={{ listStyle: 'none', textAlign: 'center' }}
            >
              <small>₩</small>
              <strong>
                {new Intl.NumberFormat().format(product.price * quantity)}
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
      ))}
      ;
    </div>
  );
}

export default CheckoutProduct;
