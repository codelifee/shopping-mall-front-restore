import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import {
  FaShoppingBag,
  FaChair,
  FaUserCog,
  FaCaretDown,
  FaQuestion,
} from 'react-icons/fa';
import Logo from '../img/logo.png';

function Navbar() {
  const [product, setProduct] = useState(false);
  const [order, setOrder] = useState(false);
  const [user, setUser] = useState(false);
  const [answer, setAnswer] = useState(false);

  return (
    <div className="seller_navbar">
      {/* <Link to="/seller">
                <div className="navbar__logo">
                    <h1>Seller Center</h1>
                </div>
            </Link> */}
      <Link
        onClick={() => {
          window.location.href = '/home';
        }}
      >
        <div className="seller_navbar__logo">
          <img src={Logo} alt="" className="seller_img" />
        </div>
      </Link>
      <div className="seller_navbar__links">
        <div className="seller_navbar__link">
          <h2>
            <FaChair />
            Product
            <FaCaretDown
              onClick={() => setProduct(!product)}
              className={product ? 'icon-active' : 'icon'}
            />
          </h2>
          {product && (
            <div>
              <Link to="/seller/product">
                <p>My Products</p>
              </Link>
              <Link to="/seller/addProduct">
                <p>Add New Product</p>
              </Link>
            </div>
          )}
        </div>
        <div className="seller__link">
          <h2>
            <FaShoppingBag />
            Order
            <FaCaretDown
              onClick={() => setOrder(!order)}
              className={order ? 'icon-active' : 'icon'}
            />
          </h2>
          <div>
            {order && (
              <Link to="/seller/order">
                <p>주문 내역 관리</p>
              </Link>
            )}
          </div>
        </div>
        <div className="seller_navbar__link">
          <h2>
            <FaUserCog />
            User
            <FaCaretDown
              onClick={() => setUser(!user)}
              className={user ? 'icon-active' : 'icon'}
            />
          </h2>
          <div>
            {user && (
              <Link to="/seller/user">
                <p>Check Users</p>
              </Link>
            )}
          </div>
        </div>
        <div className="seller_navbar__link">
          <h2>
            <FaQuestion />
            Answers
            <FaCaretDown
              onClick={() => setAnswer(!answer)}
              className={answer ? 'icon-active' : 'icon'}
            />
          </h2>
          {answer && (
            <div>
              <Link to="/seller/answerYetCategory">
                <p>답변 미완료</p>
              </Link>
              <Link to="/seller/answeredCategory">
                <p>답변 완료</p>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
