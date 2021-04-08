import React, { useState, useEffect } from "react";
import Subtotal from "./Subtotal";
import { useSelector } from "react-redux";
import fire from "../img/fire.svg";
import { useStateValue } from "../StateProvider/StateProvider";
import "./CheckoutProduct.css";
import axios from "../axios/axios";
import Cookies from "js-cookie";
<<<<<<< HEAD
import * as AiIcons from "react-icons/ai";

function CheckoutProduct({ cart_id, id, title, quantity,productimage, price, handleDelete }) {
  const [{ basket }, dispatch] = useStateValue();
  const[change, setChange]=useState(0);
  const[quantity1, setQuantity1]=useState(quantity);
  const [checkoutItems2, setCheckoutItems2]=useState(
    {
    cart_item_quantity: 0,
  });

 

  useEffect(()=>{
setCheckoutItems2({
  cart_item_quantity: quantity,

})
  },[quantity])


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
=======

function CheckoutProduct({ cart_id, id, title, quantity, image, price }) {
  const [{ basket }, dispatch] = useStateValue();
  const [cart, setCart] = useState(basket);

  const [stateQuantity, setStateQuantity] = useState([]);

  // const [checkoutItem, setCheckoutItem] = useState([])

  // useEffect(() => {
  //   setCheckoutItem({
  //     cart_item_quantity: quantity,
  //   });
  // }, quantity);

  useEffect(() => {
    setStateQuantity({
      cart_item_quantity: quantity,
    });
  });

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  const style11 = {
    borderBottom: "1px solid red",
  };

  const cookie = Cookies.get("user");

  const minusQuantity = (cart_id) => {
    setStateQuantity(stateQuantity - 1);

    axios
      .patch(`/cartitems/${cart_id}`, { cart_item_quantity: stateQuantity })
      .then((res) => {
        console.log(res);
        alert("수량 1개가 감소했습니다.");
      })
      .catch((err) => console.log(err));
  };

  const plusQuantity = (cart_id) => {
    setStateQuantity(stateQuantity + 1);

    console.log(stateQuantity);

    axios
      .patch(`/cartitems/${cart_id}`, { cart_item_quantity: stateQuantity })
      .then((res) => {
        console.log(res);
        alert("수량 1개가 증가했습니다.");
>>>>>>> 0609f4f83cbf7fd17d71288bc1db78dc9dbb96c9
      })
      .catch((err) => console.log(err))   
      console.log(checkoutItems2)  
  }

<<<<<<< HEAD
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
    async function getCartItems() {
      const request = await axios
        .get('cartitems/'+cart_id)
        .then((response) => setCheckoutItems2(response.data))
        .catch((error) => console.log(error));
      return request;
    }
    getCartItems();
  }, [change]);

  return (
    <>
      <tr className="checkoutproduct__tr" style={style11}>
        <td className="checkout__order_td" style={{ rowSpan: 1 }}>
          {" "}
          
          <img src={productimage+id} alt="img" style={{ width: "100px", height:"100px" }} />
        </td>
        <td className="checkout__order_td">        
=======
  useEffect(() => {
    async function getQuantity() {
      const request = await axios
        .get(`/cartitems/${cart_id}`)
        .then((response) => setStateQuantity(response.data))
        .catch((error) => console.log(error));
      return request;
    }
    getQuantity();
  }, []);

  return (
    <>
      <tr style={style11}>
        <td style={{ rowSpan: 1 }}>
          {" "}
          {<img src={image} alt="img" style={{ width: "80px" }} />}
        </td>
        <td
          style={{
            width: "660px",
          }}
        >
>>>>>>> 0609f4f83cbf7fd17d71288bc1db78dc9dbb96c9
          <ul className="checkout_ul">
            <li className="checkout_li">{title}</li>
            <li className="checkout_li">
              {checkoutItems2.cart_item_quantity > 1 ? (
                <button
                  className="checkout_button"
<<<<<<< HEAD
                  onClick={minusQuantity}
                >
                  -
                </button>

              ): (
                <button className="checkout_button" onClick={()=>{alert("최소수량은 1개입니다.")}}>
                  -
                </button>
                )
            }

              {checkoutItems2.cart_item_quantity}
              <button className="checkout_button" onClick={plusQuantity}>
                +
              </button>
            </li>
           
            <li className="checkout_li">
=======
                  onClick={() => minusQuantity(cart_id)}
                >
                  -
                </button>
              ) : (
                <button className="checkout_button">-</button>
              )}

              {stateQuantity}
              <button
                className="checkout_button"
                onClick={() => plusQuantity(cart_id)}
              >
                +
              </button>
            </li>
            <li className="checkout_li">
              <small>₩</small>
>>>>>>> 0609f4f83cbf7fd17d71288bc1db78dc9dbb96c9
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
<<<<<<< HEAD
            <strong style={{textAlign:"center"}}> {new Intl.NumberFormat().format(price*checkoutItems2.cart_item_quantity)}</strong>
          </li>

           <button className="checkoutproduct__remove-button" onClick={()=>handleDelete(cart_id)}>
              <AiIcons.AiOutlineClose style={{width:"20px",marginBottom:"25px", paddingBottom:"4px",color:"rgb(120, 120, 120)" }}/>
            </button>
          
         
=======
            <strong>{price * stateQuantity}</strong>
          </li>

          <div className="btnBox">
            <button className="remove" onClick={removeFromBasket}></button>
          </div>
>>>>>>> 0609f4f83cbf7fd17d71288bc1db78dc9dbb96c9
        </td>
        <td className="checkout__order_td"><strong className="checkout__deliver">무료배송</strong></td>
      </tr>
    </>
  );
}

export default CheckoutProduct;
