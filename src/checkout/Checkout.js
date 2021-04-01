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
import { ImageData } from "../axios/urlData";
function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
  const[users, setUsers]=useState("");

  const [user, setUser] = useState({});
  const [quantity, setQuantity] = useState([]);
  const image = ImageData.image1;
  const [checkoutItems, setCheckoutItems] = useState([{
    cart_item_id: '',
    user_sequence_id: Cookies.get('user'),
    cart_item_quantity: 0,
    product_id: '',
    price:0,
    product_name:'',
    product_price:0
  }])
  const removeFromBasket = () => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: basket.id,
    });
  };

  const style11 = {
    borderBottom: '1px solid black',
  };
  const cookie = Cookies.get('user');

  useEffect(() => {
    //var id = basket.map((item)=>item.id);
    async function getCheckoutItems() {
      const request = await axios
        .get(`cartitems/getCartItemsByUser/${cookie}`)
        .then(response => {setCheckoutItems(response.data)
        console.log(response.data)})
                .catch((error) => console.log(error));
      return request;
    }
    getCheckoutItems();
  }, [checkoutItems]);


  useEffect(() => {
    async function getUserName() {
      const request = await axios
        .get(`users/${Cookies.get("user")}`)
        .then((response) => setUsers(response.data))
        .catch((error) => console.log(error));

      return request;
    }

    getUserName();
  }, []);

  return (
    <div className="checkout">
      <div className="checkout__left">
        <div className="checkout__second">
          <h3>{users.user_name}님의 </h3>
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
              {checkoutItems.map((check, index) => (<CheckoutProduct
              id={check.product_id}
              cart_id={check.cart_item_quantity}
              title={check.product_name}
              quantity={check.cart_item_quantity}
              image={image+check.product_id}
              price={check.product_price}
         />
              ))}
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
