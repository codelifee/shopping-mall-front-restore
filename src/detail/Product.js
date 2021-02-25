import React, {useState, useContext, useEffect} from 'react'
import './Product.css';
import {useStateValue} from "../StateProvider/StateProvider"
import {useHistory, useParams} from "react-router-dom";
import {FaComment, FaShoppingCart} from 'react-icons/fa';


function Product(props) {
    
    //dispatch -> how we manipulate with data
    const [{basket}, dispatch] = useStateValue();
    const image = "http://shoppingmall-env.eba-jac9afx7.us-east-1.elasticbeanstalk.com/products/showProductImage/";
    
    let history = useHistory();
    
    const addToBasket = () => {
        //dispatch the item into the data layer
        dispatch({
            type:'ADD_TO_BASKET',
            item: {
                id: props.id,
                title: props.title,
                image: props.image,
                description: props.description,
                price: props.price
                //rating: props.product_rating
            },
        })
    }

    return (
        <div className='product'>
            <div className="product__info"  onClick={()=>{
                    history.push(`/detail/${props.id}`);
                }}>
                <p className="product__name">{props.title}</p>
                <p className="product__status">{props.status}</p>
                <p className="product__price">
                    <small>{props.description}</small>
                    <strong>₩{new Intl.NumberFormat().format(props.price)}</strong>
                </p>
                <div className="product__rating">
                    {//Array(props.product_rating)
                    //.fill()
                    //.map((_, i) => (
                     //   <p>
                     //   {/* <img src={fire} alt=""/> */}
                     //   </p>
                   // ))
                    }
                </div> 
            </div>

            <img className="product__img" src={image+props.id} alt="" onClick={()=>{
                history.push(`/detail/${props.id}`);
            }}/> 
            <div><FaComment/> {props.comment}</div>
            <button onClick={addToBasket}><FaShoppingCart className="product__cartIcon"/> Cart</button>
            
        </div>
    )
}

export default Product;
