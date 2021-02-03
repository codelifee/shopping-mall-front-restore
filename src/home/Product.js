import React from 'react'
import fire from '../img/fire.svg';
import './Product.css';
import {useStateValue} from "../StateProvider/StateProvider"
import {Link, useHistory} from "react-router-dom";


function Product({ id, title, image, description//, price, rating
}) {
    //dispatch -> how we manipulate with data
    const [{basket}, dispatch] = useStateValue();

    const addToBasket = () => {
        //dispatch the item into the data layer
        dispatch({
            type:'ADD_TO_BASKET',
            item: {
                id:id,
                title:title,
                image: image,
                description: description,
               // price: price,
              //  rating: rating
            },
        })
    }
    
    const history = useHistory();

    return (
        <div className='product'>
            <div className="product__info">
               
                {/* <p className="product__price">
                    <small>{description}</small>
                    <strong>₩{price}</strong>
                </p> */}
                {/* <div className="product__rating">
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p>
                        <img src={fire} alt=""/>
                        </p>
                    ))}
                </div> */}
            </div>

            <Link to="/detail"><img className="product__img" src={image} alt="" onClick={addToBasket}/></Link>
             <h4>{title}</h4>
        </div>
    )
}

export default Product;
