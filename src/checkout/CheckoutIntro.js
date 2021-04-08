import React, { useEffect, useState } from 'react';
import Header from '../Header';
import Cookies from 'js-cookie';
import { useParams } from 'react-router-dom';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './Checkout';
import Footer from '../footer/Footer';
import axios from '../axios/axios';
import EmptyCheckout from './EmptyCheckout';



function Seller() {
    const { id } = useParams();

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
      console.log(checkoutItems.length)
  return (
    <Router>
      <div className="checkoutIntro">
        <Switch>
          <Route path="/checkout/:id">
          <Header/>
           {checkoutItems.length==0 | cookie==null ?(<EmptyCheckout/>): (<Checkout />)}
           <Footer/>
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default Seller;
