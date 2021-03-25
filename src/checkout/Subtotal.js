import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../StateProvider/StateProvider';
import { useState, useEffect } from 'react';
import { getBasketTotal } from '../StateProvider/Reducer';
import { useHistory } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useSelector } from 'react-redux';

function Subtotal({ price, quantity }) {
  const history = useHistory();
  const [{ basket }, dispatch] = useStateValue();
  const cookie = Cookies.get('user');

  //first attempt without CurrencyFormat API
  // const [price, setPrice] = useState(0);

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
              총 상품금액 ({basket.length} 개) :
              <strong>
                {' '}
                ₩{' '}
                {new Intl.NumberFormat().format(
                  getBasketTotal(basket) * quantity,
                )}
              </strong>
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

      <button onClick={ProceedToCheckout}>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
