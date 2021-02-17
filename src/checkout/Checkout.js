import React from 'react'
import banner from '../img/banner.gif';
import { useStateValue } from '../StateProvider/StateProvider';
import "./Checkout.css";
import Subtotal from './Subtotal';
import BasketItem from './BasketItem';
import CheckoutProduct from './CheckoutProduct'
import { ListItemSecondaryAction } from '@material-ui/core';

function Checkout() {
    const [{basket, user}, dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
                <div>
                    <h3>Hello, {user?.email}</h3>
                    <h2 className="checkout__title">
                        Your Shopping Basket
                    </h2>
                    <div checkout__description>
                        {basket.map(item => (
                            <CheckoutProduct 
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                description={item.description}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))
                        }
                    </div>
                </div>
            </div>


            <div className="checkout__right">
                <Subtotal/>
            </div>
        </div>
    )
}

export default Checkout;
