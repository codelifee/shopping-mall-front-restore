import React, { useState, useEffect } from 'react';
import { useStateValue } from '../StateProvider/StateProvider';
import './Checkout.css';
import Subtotal from './Subtotal';
import BasketItem from './BasketItem';
import CheckoutProduct from './CheckoutProduct';
import { ListItemSecondaryAction } from '@material-ui/core';
import Cookies from 'js-cookie';
import axios from '../axios/axios';
import { formatCountdown } from 'antd/lib/statistic/utils';
import jsCookie from 'js-cookie';

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();

  const [user, setUser] = useState({});
  const [quantity, setQuantity] = useState(1);

  const removeFromBasket = () => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: basket.id,
    });
  };

  const style11 = {
    borderBottom: '1px solid red',
  };

  const cookie = Cookies.get('user');
  console.log(cookie);
  console.log(user);

  return (
    <div className="checkout">
      <div className="checkout__left">
        <div className="checkout__second">
          <h3>{cookie}님의 </h3>
          <h2 className="checkout__title">
            <span style={{ color: 'grey' }}>
              <i class="fas fa-shopping-cart" />
            </span>
            &nbsp; 장바구니
          </h2>
          <hr />
          <div className="checkout__description">
            <table className="checkout_table">
              <thead>
                <th>전체선택</th>
                <th>상품정보</th>
                <th>상품금액</th>
              </thead>
              <tbody>
               
                  {basket.map((product, index) => (
                    <tr style={style11}>
                      <td style={{ rowSpan: 1 }}>
                        {' '}
                        {
                          <img
                            src={product.image}
                            alt="img"
                            style={{ width: '80px' }}
                          />
                        }
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
                            {new Intl.NumberFormat().format(
                              product.price * quantity,
                            )}
                          </strong>
                        </li>

                        <div className="btnBox">
                          <button className="remove" onClick={removeFromBasket}>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}{' '}
              
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal price={basket.price} quantity={quantity} />
      </div>
    </div>
  );
}

export default Checkout;
