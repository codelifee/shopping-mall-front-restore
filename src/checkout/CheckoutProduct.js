import { CheckBoxOutlineBlankSharp } from '@material-ui/icons';
import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import fire from '../img/fire.svg';
import { useStateValue } from '../StateProvider/StateProvider';
import './CheckoutProduct.css';
import { FaWindows } from 'react-icons/fa';

function CheckoutProduct({
  id2,
  title2,
  image2,
  description2,
  price2,
  rating2,
  quantity2,
}) {
  const [quantity1, setQuantity1] = useState(quantity2);
  const [cookie, setCookie] = useState();

  const getCookie = () => {
    const cookie = Cookies.get('user');
    console.log(cookie);
    setCookie(cookie);
  };

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
      type: 'REMOVE_FROM_BASKET',
      id: id2,
    });
  };
  const style11 = {
    borderBottom: '1px solid red',
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
          {' '}
          {
            <img
              src={storedValue.image}
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
          <li className="checkout_li">{title2}</li>
          <li className="checkout_li">
            {quantity1 > 1 ? (
              <button
                className="checkout_button"
                onClick={() => {
                  setQuantity1(quantity1 - 1);
                }}
              >
                -
              </button>
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
          <li
            className="checkout_li"
            style={{ listStyle: 'none', textAlign: 'center' }}
          >
            <small>₩</small>
            <strong>
              {new Intl.NumberFormat().format(price2 * quantity1)}
            </strong>
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
