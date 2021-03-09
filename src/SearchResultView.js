import React, {useState, useContext, useEffect} from 'react'
import './detail/Product.css';
import {useStateValue} from "./StateProvider/StateProvider"
import {useHistory, useParams} from "react-router-dom";
import {FaComment, FaShoppingCart} from 'react-icons/fa';
import axios from './axios/axios';


function SearchResultView(props) {
    
    //dispatch -> how we manipulate with data
    const [{basket}, dispatch] = useStateValue();

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
    let history = useHistory();
    return (
        <div className='product2'>
           
             <img className="product2__img" src={props.image} alt="" onClick={()=>{
                history.push(`/detail/${props.id}`);
            }}/> 
             <div className="icons">
                <button onClick={addToBasket}><FaShoppingCart className="product__cartIcon"/></button>
            <div className="tok"><FaComment/>{props.comment}</div>
            </div> 
            <div className="product2__info"  onClick={()=>{
                    history.push(`/detail/${props.id}`);
                }}>
                   
                <p className="product2__name">{props.title}</p>
             <div className="price_status">  <strong>₩{new Intl.NumberFormat().format(props.price)}</strong>
                <span className="product2__status">{props.status}</span></div> 
                <p className="product2__price">
                    <small>{props.description}</small>
                    
                </p>
                <div className="product2__rating">
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

           
            
        </div>
    )
}

export default SearchResultView;