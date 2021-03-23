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

  const cookie = Cookies.get('user');
  console.log(cookie);
  console.log(user);

  useEffect(() => {
    async function getUser() {
      const request = await axios
        .get(`/users/${cookie}`)
        .then((response) => setUser(response.data))
        .catch((error) => console.log(error));

      return request;
    }
    getUser();
  }, []);

  return (
    <div className="checkout">
      <div className="checkout__left">
        <div className="checkout__second">
          <h3>Hello, {user.user_name}</h3>
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
                {basket.map((item) => (
                  <CheckoutProduct
                    id2={item.id}
                    title2={item.title}
                    image2={item.image}
                    description2={item.description}
                    price2={item.price}
                    rating2={item.rating}
                    quantity2={item.quantity}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
