import './Home.css';
import React from 'react';
import Collection from './Collection'
import Best from './Best'
import Category from './Category'
import New from './New'
import Product from './Product';
import product1 from '../img/product-1.jpg'
import product2 from '../img/product-2.jpg'
import product3 from '../img/product-3.jpg'
import axios from 'axios';



function Home() {
    return (
        <div className="home">
         


                <div className="home__row">
                    <Collection />
                    <Best />
                    <Category />
                    <New/>
                    {/* <Product 
                    id="1"
                    title="양파즙"
                    image={product1}
                    description="양파로 즙을 낸 것"
                    price={6000}
                    hot={1}
                    />
                    <Product 
                    id="2"
                    title="양파즙"
                    image={product2}
                    description="양파로 즙을 낸 것"
                    price={6000}
                    rating={1}
                    />
                    <Product 
                    id="3"
                    title="양파즙"
                    image={product3}
                    description="양파로 즙을 낸 것"
                    price={6000}
                    rating={1}
                    />
                    <Product 
                    id="4"
                    title="양파즙"
                    image={product1}
                    description="양파로 즙을 낸 것"
                    price={6000}
                    rating={1}
                    />
                    <Product 
                    id="5"
                    title="양파즙"
                    image={product2}
                    description="양파로 즙을 낸 것"
                    price={6000}
                    rating={1}
                    /> */}
                </div>
                {/* <button className="btn btn-primary" onClick={()=>{
                    axios.get('요청json')
                    .then(()=>{})//성공했을때 
                    .catch(()=>{})//실패했을떄

                }}>더보기</button> */}
        </div>
    )
}

export default Home;
