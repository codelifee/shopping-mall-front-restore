import React from 'react'
import './Payment.css'
import {useStateValue} from '../StateProvider/StateProvider'
import CheckoutProduct from '../checkout/CheckoutProduct'
import {Link} from 'react-router-dom';

function Payment() {
    const [{basket, user} , dispatch] = useStateValue();

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
                            {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                            ))}
                        </p>
                    </div>
                </div>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                        <p>
                            
                        </p>
                    </div>
                </div>
            
            </div>
        </div>
    )
}

export default Payment
