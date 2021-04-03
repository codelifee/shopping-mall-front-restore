import React, { useState, useEffect } from "react";
import Subtotal from "./Subtotal";
import { useSelector } from "react-redux";
import fire from "../img/fire.svg";
import { useStateValue } from "../StateProvider/StateProvider";
import "./CheckoutProduct.css";
import axios from "../axios/axios";
import Cookies from "js-cookie";
import * as AiIcons from "react-icons/ai";

function CheckoutProduct({ cart_id, id, title, quantity, image, price, handleDelete }) {
  const [{ basket }, dispatch] = useStateValue();
  const[change, setChange]=useState(0);
  const[quantity1, setQuantity1]=useState(quantity);

  const [checkoutItems2, setCheckoutItems2]=useState(
    {
    cart_item_quantity: quantity1,
  },
  );

  const style11 = {
    borderBottom: "1px solid gray",
    fontSize:"30px"
  };

  const cookie = Cookies.get("user");

  const plusQuantity = (e) => {
 
  axios
      .patch(`cartitems/plusQuantity/${cart_id}`, checkoutItems2)
      .then((res) => {
        alert("수량이 1개 증가했습니다");
        console.log(res);
        setChange(change+1);
      })
      .catch((err) => console.log(err))   
      console.log(checkoutItems2)  
  }

  const minusQuantity = (e) => {
    axios
        .patch(`cartitems/minusQuantity/${cart_id}`, checkoutItems2)
        .then((res) => {
          alert("수량이 1개 감소했습니다");
          console.log(res);
          setChange(change+1);
        })
        .catch((err) => console.log(err));       
    } 
    
  useEffect(() => {
    async function fetchData() {
      const request = await axios
        .get(`cartitems/${cart_id}`)
        .then((response) => setCheckoutItems2(response.data))
        .catch((error) => console.log(error));
      return request;
    }
    fetchData();
  }, [change]);

 

  return (
    <>
      <tr className="checkoutproduct__tr" style={style11}>
        <td className="checkout__order_td" style={{ rowSpan: 1 }}>
          {" "}
          {<img src={image} alt="img" style={{ width: "100px", height:"100px" }} />}
        </td>
        <td className="checkout__order_td">        
          <ul className="checkout_ul">
            <li className="checkout_li">{title}</li>
            <li className="checkout_li">
              {quantity > 1 ? (
                <button
                  className="checkout_button"
                  onClick={minusQuantity}
                >
                  -
                </button>
              ) : (
                <button className="checkout_button">
                  -
                </button>
              )}

              {checkoutItems2.cart_item_quantity}
              <button className="checkout_button" onClick={plusQuantity}>
                +
              </button>
            </li>
           
            <li className="checkout_li">
              {new Intl.NumberFormat().format(price)}
            </li>
          </ul>
        </td>

        <td className="checkout__order_td">
          <li
            className="checkout_li"
            style={{ listStyle: "none", textAlign: "center" }}
          >
            <small>₩</small>
            <strong style={{textAlign:"center"}}> {new Intl.NumberFormat().format(price*checkoutItems2.cart_item_quantity)}</strong>
          </li>

           <button className="checkoutproduct__remove-button" onClick={()=>handleDelete(cart_id)}>
              <AiIcons.AiOutlineClose style={{width:"20px",marginBottom:"25px", paddingBottom:"4px",color:"rgb(120, 120, 120)" }}/>
            </button>
          
         
        </td>
        <td className="checkout__order_td"><strong className="checkout__deliver">무료배송</strong></td>
      </tr>
    </>
  );
}

export default CheckoutProduct;
