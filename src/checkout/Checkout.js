import React, { useEffect, useState, useReducer } from 'react';
import { useStateValue } from '../StateProvider/StateProvider';
import './Checkout.css';
import Subtotal from './Subtotal';
import BasketItem from './BasketItem';
import CheckoutProduct from './CheckoutProduct';
import { ListItemSecondaryAction } from '@material-ui/core';

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

 
  return (
    <div className="checkout">
      <div className="checkout__left">
        <div className="checkout__second">
          <h3>Hello, {user?.email}</h3>
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
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    description={item.description}
                    price={item.price}
                    rating={item.rating}
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
import { formatCountdown } from 'antd/lib/statistic/utils';

export default Checkout;
