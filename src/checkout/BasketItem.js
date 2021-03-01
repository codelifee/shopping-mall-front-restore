import React from 'react';
import './BasketItem.css';
import { useStateValue } from '../StateProvider/StateProvider';
import CheckoutProduct from "./CheckoutProduct"

function BasketItem() {
    const [{basket}, dispatch] = useStateValue(); 
    
    return (
        <div className="BasketItem">
            {basket.map(item => (
                <div className="BasketItem__item">
                    <img className="BasketItem__img" src={item.image} alt=""/>
                    <div className="BasketItem__desc">
                        {item.title}
                        {item.description}
                        {item.price}
                    </div>
                    
                </div>
            ))}
        </div>
    )
}

export default BasketItem;
