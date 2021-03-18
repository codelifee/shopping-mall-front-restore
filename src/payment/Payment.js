import React, {useEffect,useState}from 'react';
import axios from '../axios/axios';
import icon from '../img/payment_icon_yellow_small.png';
import './Payment.css'
import {useStateValue} from '../StateProvider/StateProvider'
import CheckoutProduct from '../checkout/CheckoutProduct'
import {Link, useHistory} from 'react-router-dom';

function Payment() {
    const [{basket, user} , dispatch] = useStateValue();
    const [total, SetTotal] = useState();

    const history = useHistory();

    const btn = () => {
        history.push('/paymentpage')
    }

    return (
        <div className='payment'>
            <div className="payment__container">

                <h1>
                  Checkout <Link to="/checkout">( {basket?.length} items ) </Link>
                </h1>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                    </div>
                </div>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className="payment__items">
                        <p>
                            {basket.map((item) => {
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                            // <p></p>
                            })}
                        </p>
                    </div>
                </div>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                    <form>
                        <button className="kakaoBtn" onClick= {btn}><img src={icon} alt="카카오페이"/></button>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
