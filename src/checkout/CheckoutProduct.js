import React from 'react'
import './CheckoutProduct.css'
import fire from '../img/fire.svg'
import { useStateValue } from '../StateProvider/StateProvider';

function CheckoutProduct({id, title, image, description, price, rating}) {
    const [{basket}, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }

    return (
        <div className='checkoutProduct'>
            
 <img className='checkoutProduct__image' src={image} />
            <div className='checkoutProduct__info'>
               
                <p className='checkoutProduct__title'>
                    {title}
                </p>
                <p className='checkoutProduct__price'>
                    <small>₩</small>
                    <strong>{new Intl.NumberFormat().format(price)}</strong>
                </p>
                <div className='checkoutProduct__rating'>
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <img src={fire} alt="fire"/>
                    ))}
                </div>
            </div>
            <div className="btnBox">
            
            <button className="remove" onClick={removeFromBasket}><span></span>
    <span></span>
    <span></span></button>
            </div>
        </div>
    )
}

export default CheckoutProduct
