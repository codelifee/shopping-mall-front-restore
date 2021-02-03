import React, { useState, useContext } from "react";
import Tabs from "./Tabs";
import {Link, useParams, useHistory} from "react-router-dom";
import Product from "./Product";
import ProductView from "../ProductView/ProductView";
import product1 from "../ProductView/images/bed_0.jpg";
import product2 from "../ProductView/images/bed_1.jpg";
import product3 from "../ProductView/images/bed_2.jpg";
import "./Detail.css";
import {useStateValue} from "../StateProvider/StateProvider";


function Detail() {

  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState(ProductView.products);
  const [img, setImg] = useState([product1, product2, product3]);
  const [{basket}, dispatch] = useStateValue();
  const history = useHistory();

  const {id} = useParams();
  <Product id={id}/>

  return (
    <div className="detail">
      <div className="detail__product">
        <div className="detail__product_img">
          <img src={img[id]} className="img" alt=""></img>
        </div>
        <div className="detail__product_info">
          <p className="detail__product_name">{product[id-1].title}</p>
          <p className="detail__product_price">{new Intl.NumberFormat().format(product[id].price)}원</p>
          <p className="detail__product_delivery">
            배송정보 | 도서산간지역 제외 평균 2~3일 배송
          </p>
          <p className="detail__product_deliveryPrice">배송료 정보</p>
          <p className="detail__product_deliveryPrice_">
            일반지역 2,500원 / 도서산간지역 4,000원{" "}
          </p>
          <hr />
          <p className="quantity">
            {quantity > 1 ? (
              <button
                onClick={() => {
                  setQuantity(quantity - 1);
                }}
              >
                -
              </button>
            ) : (
              <button
                onClick={() => {
                  setQuantity(quantity);
                }}
              >
                -
              </button>
            )}
            구매수량 {quantity}
            <button
              onClick={() => {
                setQuantity(quantity + 1);
              }}
            >
              +
            </button>
          </p>
          <p className="detail__product_totalPrice">
            총 금액 {new Intl.NumberFormat().format(product[id].price * quantity)}원
          </p>
            <button className="detail__keep" onClick={()=>{
              dispatch(
                {type:'ADD_TO_BASKET',
                 item: {
                  id: product[id].id,
                  title: product[id].title,
                  image: img[id],
                  description: product[id].description,
                  price: Intl.NumberFormat().format(product[id].price * quantity),
                  rating: product[id].rating
                }}
              )
            }}>장바구니</button>
          
          
          <button className="detail__order"  onClick={()=>{
              dispatch(
                {type:'ADD_TO_BASKET',
                 item: {
                  id: product[id].id,
                  title: product[id].title,
                  image: img[id],
                  description: product[id].description,
                  price: Intl.NumberFormat().format(product[id].price * quantity),
                  rating: product[id].rating
                }}
              )
              history.push('/payment')
            }}>주문하기</button>
          
        </div>
      </div>
      <Tabs />
    </div>
  );
}

export default Detail;
