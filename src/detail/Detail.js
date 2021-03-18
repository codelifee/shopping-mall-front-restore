import React, { useState, useEffect } from 'react';
import Tabs from './Tabs';
import { useParams, useHistory } from 'react-router-dom';
import './Detail.css';
import { useStateValue } from '../StateProvider/StateProvider';
import axios from '../axios/axios';
import './Modal.css';
import { ImageData } from '../axios/urlData';

function Modal() {
  const history = useHistory();

  return (
    <div id="myModal" className="modal">
      <div className="modal_content">
        <h4>
          장바구니에 상품이 <br /> 담겼습니다.
        </h4>
        <button
          className="modalButton"
          onClick={() => {
            history.push('/checkout');
          }}
        >
          장바구니로 이동
        </button>
      </div>
    </div>
  );
}

function Detail() {
  const [products, setProducts] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [question, setQuestion] = useState([]);

  const { id } = useParams();

  let image1 = ImageData.image1 + id;
  const [modal, setModal] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [{ basket }, dispatch] = useStateValue();
  const history = useHistory();

  useEffect(() => {
    async function getProducts() {
      const request = await axios
        .get(`products/JsonData/${id}`)
        .then((response) => setProducts(response.data))
        .catch((error) => console.log(error));

      return request;
    }

    getProducts();
  }, []);

  useEffect(() => {
    async function getReviews() {
      const request = await axios
        .get(`/review/JsonDataByProductId/${id}`)
        .then((response) => setReviews(response.data))
        .catch((error) => console.log(error));

      return request;
    }

    getReviews();
  }, []);

  useEffect(() => {
    async function getQuestion() {
      const request = await axios
        .get(`/question/countByProductId/${id}`)
        .then((response) => setQuestion(response.data))
        .catch((error) => console.log(error));

      return request;
    }
    getQuestion();
  }, []);

  return (
    <div className="detail">

      <div className="detail__product">
        <div className="detail__product_img">
          <img src={image1} className="img" alt="" />
        </div>
        <div className="detail__product_info">
          <p className="detail__product_name">{products.product_name}</p>
          <p className="detail__product_description">
            {products.product_description}
          </p>
          <br />
          <p className="detail__product_price">
            {new Intl.NumberFormat().format(products.product_price)}원
          </p>
          <p className="detail__product_delivery">
            배송정보 | 도서산간지역 제외 평균 2~3일 배송
          </p>
          {/* <p className="detail__product_deliveryPrice">배송료 정보</p> */}
          <p className="detail__product_deliveryPrice_">
            {/* 일반지역 2,500원 / 도서산간지역 4,000원{" "} */}
          </p>
          <p className="detail__proudct_stock">재고 : {products.stock}</p>
          <div className="center">
            <p className="quantity">
              {quantity > 1 ? (
                <button
                  onClick={() => {
                    setQuantity(quantity - 1);
                  }}
                  className="quantity_button"
                >
                  -
                </button>
              ) : (
                <button
                  onClick={() => {
                    setQuantity(quantity);
                  }}
                  className="quantity_button"
                >
                  -
                </button>
              )}
              구매수량 {quantity}
              <button
                onClick={() => {
                  setQuantity(quantity + 1);
                }}
                className="quantity_button"
              >
                +
              </button>
            </p>
            <p className="detail__product_totalPrice">
              총 금액{' '}
              {new Intl.NumberFormat().format(
                products.product_price * quantity,
              )}
              원
            </p>
          </div>
          <div className="button_box">
            {modal == true ? <Modal /> : null}

            <button
              className="detail__keep"
              onClick={() => {
                if (modal == false) {
                  dispatch({
                    type: 'ADD_TO_BASKET',
                    item: {
                      id: products.product_id,
                      title: products.product_name,
                      image: image1,
                      description: products.product_description,
                      price: products.product_price * quantity,
                      rating: products.product_rating,
                    },
                  });
                }
                setModal(!modal);
              }}
            >
              장바구니
            </button>

            <button
              className="detail__order"
              onClick={() => {
                dispatch({
                  type: 'ADD_TO_BASKET',
                  item: {
                    id: products.product_id,
                    title: products.product_name,
                    image: image1,
                    description: products.product_description,
                    price: products.product_price * quantity,
                    rating: products.product_rating,
                  },
                });
                history.push('/payment');
              }}
            >
              주문하기
            </button>
          </div>
        </div>
      </div>

      <Tabs reviews={reviews} question={question} />
    </div>
  );
}

export default Detail;
