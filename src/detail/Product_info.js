import React, {useState, useEffect} from 'react';
import './Product_info.css';
import axios from '../axios/axios';
import {useParams} from 'react-router-dom';

function Product_info() {

    const {id} = useParams();
    const quality_img = `https://api.xn--vx3b30no7b.com/products/showQualityImage/${id}`;
     const [products, setProducts] = useState([]);
     useEffect(()=>{
          async function fetchDate() {
            const request = await axios.get(`products/${id}`)
            .then(response =>
                  setProducts(response.data)
                  )
                  .catch(error => console.log(error))
                  
                  return request;
                }
                
                fetchDate();
              }, [])

    return(
        <div className="product_info">
            <h3>상품정보 고시</h3>
            <img src={quality_img} alt="상품고시" className="product_info__detail_img"/>
        </div>
    )
}

export default Product_info;