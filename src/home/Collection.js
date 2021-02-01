import React,{useState} from 'react'
import './Collection.css'
import CollectionData from './CollectionData'
import {Link} from 'react-router-dom';
import Product from './Product';

function Collection(){
  let [collection,collectionChange] = useState(CollectionData);
    return(
      <div className="home_container">
         <p className="title">2021년 컬렉션을 만나보세요</p>     
        <div className="swiper_wrapper">
            <div className="slide_item">
          <Link to="/">
            <Product 
                    id={collection[0].id}
                    title={collection[0].title}
                    image={collection[0].img}
                   // description="양파로 즙을 낸 것"
                   // price={6000}
                    /> 
              </Link>
          </div>
            <div className="slide_item">

            <Link to="/bed">
            <Product 
                    id={collection[1].id}
                    title={collection[1].title}
                    image={collection[1].img}
                   // description="양파로 즙을 낸 것"
                   // price={6000}
                    /> 
              </Link>
              
            </div>
            <div className="slide_item">
            <Product 
                    id={collection[2].id}
                    title={collection[2].title}
                    image={collection[2].img}
                   // description="양파로 즙을 낸 것"
                   // price={6000}
                    /> 
            </div>
            <div className="slide_item">
            <Product 
                    id={collection[3].id}
                    title={collection[3].title}
                    image={collection[3].img}
                   // description="양파로 즙을 낸 것"
                   // price={6000}
                    /> 
            </div>
        </div>
    </div>
    )
}

export default Collection;