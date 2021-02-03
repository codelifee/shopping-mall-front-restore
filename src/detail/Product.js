import React, {useState, useContext, useEffect} from 'react'
import fire from '../img/fire.svg';
import './Product.css';
import {useStateValue} from "../StateProvider/StateProvider"
import {useHistory, useParams} from "react-router-dom";
import Detail from '../detail/Detail';


function Product(props) {
    //dispatch -> how we manipulate with data
 
    const [{basket}, dispatch] = useStateValue();
    const id = props.data.product_id;
    const title = props.data.product_name;
    const image = props.data.product_image;
    const description = props.data.product_description;
    const price = props.data.product_price;

    <Detail id={id} title={title} image={image} description={description}
    price={price}/>

    let history = useHistory();

    const addToBasket = () => {
        //dispatch the item into the data layer
        dispatch({
            type:'ADD_TO_BASKET',
            item: {
                id: id,
                title:title,
                image: image,
                description: description,
                price: price
                //rating: products.product_rating
            },
        })
    }

   
    
    return (
        <div className='product'>
            <div className="product__info">
                <p className="product__name" onClick={()=>{
                history.push(`/detail/${id}`);
            }}>{title}</p>
                <p className="product__price">
                    <small>{description}</small>
                    <strong>₩{new Intl.NumberFormat().format(price)}</strong>
                </p>
                <div className="product__rating">
                    {Array(props.data.product_rating)
                    .fill()
                    .map((_, i) => (
                        <p>
                        {/* <img src={fire} alt=""/> */}
                        </p>
                    ))}
                </div> 
            </div>

            <img className="product__img" src={image} alt="" onClick={()=>{
                history.push(`/detail/${id}`);
            }}/> 
            <button onClick={addToBasket}>Add to the List</button>
            
        </div>
    )
}

export default Product;
