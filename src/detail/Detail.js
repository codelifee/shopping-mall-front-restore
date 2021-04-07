import React, { useState, useEffect } from "react";
import Tabs from "./Tabs";
import { useParams, useHistory } from "react-router-dom";
import "./Detail.css";
import axios from "../axios/axios";
import BasketModal from "./BasketModal.js";
import { ImageData } from "../axios/urlData";
import Cookies from "js-cookie";

function Detail() {
  const { id } = useParams();

  const [products, setProducts] = useState([]);
  const [modal, setModal] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const history = useHistory();
  const cookie = Cookies.get("user");
  const [basketItems, setBasketItems] = useState({
    cart_item_id: "",
    user_sequence_id: Cookies.get("user"),
    cart_item_quantity: quantity,
    product_id: id,
  });

  let image1 = ImageData.image1 + id;

  const closeModal = () => {
    setModal(!modal);
  };

  const postBasketItems = () => {
    axios
      .post("/cartitems", basketItems)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

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
          <p className="detail__proudct_stock">재고 : {products.stock}</p>
          <div className="center">
            <p className="quantity">
              {quantity > 1 ? (
                <button
                  onClick={() => {
                    return (
                      setQuantity(quantity - 1),
                      (basketItems.cart_item_quantity = quantity - 1)
                    );
                  }}
                  className="quantity_button"
                >
                  -
                </button>
              ) : (
                <button
                  onClick={() => {
                    return (
                      setQuantity(quantity),
                      (basketItems.cart_item_quantity = quantity)
                    );
                  }}
                  className="quantity_button"
                >
                  -
                </button>
              )}
              구매수량 {quantity}
              <button
                onClick={() => {
                  return (
                    setQuantity(quantity + 1),
                    (basketItems.cart_item_quantity = quantity + 1)
                  );
                }}
                className="quantity_button"
              >
                +
              </button>
            </p>
            <p className="detail__product_totalPrice">
              총 금액{" "}
              {new Intl.NumberFormat().format(
                products.product_price * quantity
              )}
              원
            </p>
          </div>
          <div className="button_box">
            {modal == true ? <BasketModal close={closeModal} /> : null}
            <button
              className="detail__keep"
              onClick={() => {
                if (modal == false) {
                  postBasketItems();
                }
                setModal(!modal);
              }}
            >
              장바구니
            </button>

            <button
              className="detail__order"
              onClick={() => {
                if (cookie != null) {
                  postBasketItems();
                  history.push("/payment/");
                } else {
                  alert("로그인을 해주세요!");
                }
              }}
            >
              주문하기
            </button>
          </div>
        </div>
      </div>

      <Tabs />
    </div>
  );
}

export default Detail;
