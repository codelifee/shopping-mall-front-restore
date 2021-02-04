import React, {useState, useEffect} from 'react';
import Product from '../detail/Product';
import axios from '../axios/axios';
import './ProductView.css';
import Collection from '../home/Collection';

//카테고리 id에 맞게 출력될 것

function ProductView(){

    const [products, setProducts] = useState([]);
  
    useEffect(()=>{
        async function fetchDate() {
            const request = await axios.get('products/all')
            .then(response =>
                setProducts(response.data))
            .catch(error => console.log(error))
    
            return request;
        }
        
        fetchDate();
    }, [])
    
    console.log(products)
    
    // //메인 클릭으로 넘어온 카테고리 id를 가진 상품들 정보 
    // const index = products.findIndex(
    //     (productsItem) => productsItem.id === Collection.products.category_id
    // );

    return(
        <div className="products">
            <div className="products__row">
                {
                    products.map((product, i)=>{
                        return <Product
                        id={product.product_id} 
                        title = {product.product_name} 
                        image = {product.product_picture}
                        description = {product.product_description}
                        price = {product.product_price}
                        key={i} />
                    })
                }
            </div>
        </div>
    )
}

export default ProductView;