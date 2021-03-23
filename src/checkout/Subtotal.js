import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../StateProvider/StateProvider';
import { useState, useEffect } from 'react';
import { getBasketTotal } from '../StateProvider/Reducer';
import { useHistory } from 'react-router-dom';
import Cookies from 'js-cookie';

function Subtotal() {
  const history = useHistory();
  const [{ basket }, dispatch] = useStateValue();
  const cookie = Cookies.get('user');

  const addPrice = (num) => {
    console.log('hello');
    basket.map((item) => setPrice((preValue) => preValue + item.price));
  };

  useEffect(() => {
    addPrice();
  }, []);

  const ProceedToCheckout = (e) => {
    if (cookie != null) {
      history.push('/payment');
    } else {
      alert('로그인하세요.');
    }
  };
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items):
              <strong>{addPrice}</strong>
            </p>
            <small className="subtotal__gift">This order contains a gift</small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'₩'}
      />
      return (
      <div className="subtotal">
        <CurrencyFormat
          renderText={(value) => (
            <>
              <p>
                Subtotal ({basket.length} items):
                <strong>{value}</strong>
              </p>
              <small className="subtotal__gift">
                This order contains a gift
              </small>
            </>
          )}
          decimalScale={2}
          value={getBasketTotal(basket)}
          displayType={'text'}
          thousandSeparator={true}
          prefix={'₩'}
        />

        <button onClick={ProceedToCheckout}>Proceed to Checkout</button>
      </div>
    </div>
  );
}

export default Subtotal;
