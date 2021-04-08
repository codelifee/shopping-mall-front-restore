// eslint-disable-next-line
import React, {useState,useEffect} from 'react';
import {useStateValue} from '../StateProvider/StateProvider';
import './Checkout.css';
import Subtotal from './Subtotal';
import BasketItem from './BasketItem';
import CheckoutProduct from './CheckoutProduct';
import {ListItemSecondaryAction} from '@material-ui/core';
import Cookies from 'js-cookie';
import EmptyCheckout from './EmptyCheckout'
import axios from '../axios/axios';
import {formatCountdown} from 'antd/lib/statistic/utils';
import jsCookie from 'js-cookie';
//import {imageData} from '../axios/urlData';
import {useHistory} from 'react-router-dom';
import { useParams } from 'react-router-dom';

function Checkout() {
  const history = useHistory();
  const { id } = useParams();

 const[users, setUsers]=useState("");
  const [quantity, setQuantity] = useState([]);
  const image = 'https://api.xn--vx3b30no7b.com/products/showProductImage/';
  const [checkoutItems, setCheckoutItems] = useState([{
    cart_item_id: 0,
    user_sequence_id: Cookies.get('user'),
    cart_item_quantity: 0,
    product_id: 0,
    price: 0,
    product_name: '',
    product_price: 0,
    user_name: '',
    quantity: 0
  }])

  const style11 = {
    borderBottom: '1px solid black',
  };

  const cookie = Cookies.get('user');
  const intCookie=Number(cookie);
console.log(cookie);


  useEffect(() => {
    //var id = basket.map((item)=>item.id);
    async function getCheckoutItems() {
      const request = await axios
        .get('cartitems/getCartItemsByUser/'+intCookie)
        .then(response => setCheckoutItems(response.data))
        .catch((error) => console.log(error));
      return request;
    }
    getCheckoutItems();
  }, [checkoutItems])

  const handleDelete = (id) => {
    axios
      .delete('cartitems/'+ id)
      .then((res) => {
        console.log(res);
        alert("삭제가 완료 되었습니다");
      })
      .catch((err) => console.log(err));
  };

  const ProceedToCheckout = (e) => {
    if (cookie != null) {
      history.push('/payment');
    } else {
      alert('로그인하세요.');
    }
  };

    useEffect(() => {
      async function getUserName() {
        const request = await axios
          .get(`users/${intCookie}`)
          .then((response) => setUsers(response.data))
          .catch((error) => console.log(error));
        return request;
      }
      getUserName();
    }, []);

  return ( 

  <div className = "checkout" >
    <div className = "checkout__left" >
               < h2 className = "checkout__title" >
                 <span style = { { color: 'grey' }} >
                 < i class = "fas fa-shopping-cart"/>
                 </span> &nbsp; 장바구니 </h2 > < hr />
 
  
          <div div className = "checkout__second" >

      <div className = "checkout__description" >
          <table className = "checkout_table" >
          <thead >
          <tr>
          <th> 전체선택 </th> 
          <th> 상품정보 </th> 
          <th> 상품금액 </th> 
          <th> 배송비 </th> 
          </tr> 
          </thead> 
          <tbody > 
            {checkoutItems.map((check, index) => ( 
            <CheckoutProduct 
              key = {index}
              id = {check.product_id}
              cart_id = { check.cart_item_id }
              title = {check.product_name }
              quantity = {check.cart_item_quantity}
              productimage = {image}
               price = { check.product_price}  
              handleDelete = {handleDelete}/>
            ))} 
          </tbody> 
          <Subtotal/>
          </table> 
          </div> 
         
          <div div className = "checkout__divbutton" >
          <button className = "checkout__button" onClick = {ProceedToCheckout}> 구매하기 </button> 
          </div>
          </div>
          
           
          </div>            
     </div>
  
  
     );
  }
  export default Checkout;