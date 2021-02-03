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
