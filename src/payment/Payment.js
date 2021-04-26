import React, {useEffect,useState}from 'react';
import axios from '../axios/axios';
import icon from '../img/payment_icon_yellow_small.png';
import './Payment.css'
import {useStateValue} from '../StateProvider/StateProvider'
import CheckoutProduct from '../checkout/CheckoutProduct';
import PaymentPage from './PaymentPage';
import Cookies from 'js-cookie';
import {Link, useHistory} from 'react-router-dom';

function Payment() {
    const [{basket} , dispatch] = useStateValue();
    const cookie = Cookies.get('user');
    const token = Cookies.get('jwt');
    const [total, SetTotal] = useState();
    const [users, setUsers] = useState({
        user_address:'',
      });    
    
      useEffect(() => {
        getUser();
      }, []);
    
      const getUser = () => {
        axios.get(`users/${cookie}`,
        {
            headers: {
            "Authorization" : `Bearer ${token}`
            }
        })
    .then(res => setUsers(res.data))
    .catch(err => console.log(err));
      }

    const history = useHistory();

    const PaymentBtn = () => {
        history.push('/paymentpage/');
    }

    return (
        <div className='payment'>
            <div className="payment__container">

                <h1>
                  Checkout <Link to="/checkout">( {basket?.length} items ) </Link>
                </h1>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>배송지</h3>
                    </div>
                    <div className="payment__address">
                        <p>{users.user_address}</p>
                    </div>
                </div>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>결제 상품</h3>
                    </div>
                    <div className="payment__items">
                        <p>
                            {basket.map((item) => {
                                return <CheckoutProduct id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                                
                            })}
                        </p>
                    </div>
                </div>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>결제 수단</h3>
                    </div>
                    <div className="payment__details">
                    <form>
                        <button className="kakaoBtn" onClick= {PaymentBtn}><img src={icon} alt="카카오페이"/></button>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
