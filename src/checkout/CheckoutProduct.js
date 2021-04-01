import React, { useState, useEffect } from 'react';
import Subtotal from './Subtotal';
import { useSelector } from 'react-redux';
import fire from '../img/fire.svg';
import { useStateValue } from '../StateProvider/StateProvider';
import './CheckoutProduct.css';
import axios from '../axios/axios';
import Cookies from 'js-cookie';
const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart') || '[]');

function CheckoutProduct({ cart_id, id, title, quantity, image, price }) {
  const [{ basket }, dispatch] = useStateValue();
  const [cart, setCart] = useState(basket);
  console.log(cart);
const [count, setCount]=useState(1);
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);


  const [checkoutItems, setCheckoutItems] = useState([{
    cart_item_id: '',
    user_sequence_id: Cookies.get('user'),
    cart_item_quantity: 0,
    product_id: '',
    price: 0,
    product_name: '',
    product_price: 0
  }])

  const removeFromBasket = () => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: id,
    });
  };

  const style11 = {
    borderBottom: '1px solid red',
  };

  const cookie = Cookies.get('user');


  const changeQuantity = (e) => {
    axios
      .patch(`/cartitems/${e.target.value}`, { cart_item_quantity: checkoutItems.cart_item_quantity - 1 })
      .then(res => {
        alert("변경이 완료 되었습니다")
        console.log(e);
      })
      .catch((err) => console.log(err));
  };


  return (
    <>
      <tr style={style11}>
        <td style={{ rowSpan: 1 }}>
          {' '}
          {
            <img
              src={image}
              alt="img"
              style={{ width: '80px' }}
            />
          }
        </td>
        <td
          style={{
            width: '660px',
          }}
        >
          <ul className="checkout_ul">
            <li className="checkout_li">{title}</li>

            <li className="checkout_li">
              {quantity > 1 ? (
                <button
                value={cart_id}                  
                className="checkout_button"
                >
                  -
                </button>
              ) : (
                <button
                  value={cart_id}
                  className="checkout_button"
                  onClick={changeQuantity}
                >
                  -
                </button>
              )}

              {quantity}
              <button
                value={cart_id}
                className="checkout_button"
              >
                +
         </button>
            </li>
            <li className="checkout_li">{new Intl.NumberFormat().format(price)}</li>

          </ul>
        </td>

        <td className="order_td">
          <li
            className="checkout_li"
            style={{ listStyle: 'none', textAlign: 'center' }}
          >
            <small>₩</small>
            <strong>
              {price}
            </strong>
          </li>

          <div className="btnBox">
            <button className="remove" onClick={removeFromBasket}>
            </button>
          </div>
        </td>
      </tr>

    </>
  );
}

export default CheckoutProduct;
