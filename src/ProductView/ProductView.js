import React, {useState, useEffect} from 'react';
import Product from '../detail/Product';
import axios from '../axios/axios';
import product1 from './images/bed_0.jpg';
import product2 from './images/bed_1.jpg';
import product3 from './images/bed_2.jpg';
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
    
            console.log(products)
            return request;
        }
        
        fetchDate();
    }, [])
    
    const [img, setImg] = useState([product1, product2, product3]);
    
    // //메인 클릭으로 넘어온 카테고리 id를 가진 상품들 정보 
    // const index = products.findIndex(
    //     (productsItem) => productsItem.id === Collection.products.category_id
    // );

    return(
        <div className="products">
            <div className="products__row">
                {
                    products.map((data, i)=>{
                        return <Product
                        data={products[i]} image={img[i]} key={i} />
                    })
                }
            </div>
        </div>
    )
}

export default ProductView;