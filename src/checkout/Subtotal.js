import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../StateProvider/StateProvider';
import { useState, useEffect } from 'react';
import { getBasketTotal } from '../StateProvider/Reducer';
import { useHistory } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useSelector } from 'react-redux';
import axios from '../axios/axios';

function Subtotal({ price, quantity }) {
  const history = useHistory();
  const [{ basket }, dispatch] = useStateValue();
  const cookie = Cookies.get('user');
  const [checkoutItems, setCheckoutItems]=useState([{
    price:0

  }]);

  //first attempt without CurrencyFormat API
  // const [price, setPrice] = useState(0);

 


  useEffect(() => {
    //var id = basket.map((item)=>item.id);
    async function getCheckoutItems() {
      const request = await axios
        .get(`cartitems/getCartItemsByUser/${cookie}`)
        .then(response => {setCheckoutItems(response.data)
        })
                .catch((error) => console.log(error));
      return request;
    }
    getCheckoutItems();
  }, [checkoutItems]);

  const sum = checkoutItems.map(datum => datum.price).reduce((a, b) => a + b)
  return (
    <>             
 <tfoot className="subtotal__tfoot" style={{border: "4px solid black"}}>
   <tr style={{height:"150px"}}>
                 <td>상품수: <strong>{checkoutItems.length} </strong>개</td>
                <td>상품금액: &nbsp;  <strong>{new Intl.NumberFormat().format(sum)}  </strong>원</td>
                <td>전체 합계:  &nbsp;<strong>{new Intl.NumberFormat().format(sum)}  </strong>원</td>
                <td>배송비: <strong>0</strong>원</td> 
                </tr>
                </tfoot>
    </>
  );
}

export default Subtotal;
