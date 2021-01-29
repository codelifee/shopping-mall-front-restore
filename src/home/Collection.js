import React,{useState} from 'react'
import './Collection.css'
import CollectionData from './CollectionData'
import {Link} from 'react-router-dom';

function Collection(){
  let [collection,collectionChange] = useState(CollectionData);
    return(
      <div className="home_container">
         <p className="title">2021년 컬렉션을 만나보세요</p>     
        <div className="swiper_wrapper">
            <div className="slide_item">
              <Link to="/">
              <img src={collection[0].img}/>
              <h4>{collection[0].title}</h4>
              </Link>
          </div>
            <div className="slide_item">
              <Link to="/bed">
              <img src={collection[1].img}/>
              <h4>{collection[1].title}</h4>
              </Link>
            </div>
            <div className="slide_item">
              <Link to="/">
              <img src={collection[2].img}/>
              <h4>{collection[2].title}</h4>
              </Link>
            </div>
            <div className="slide_item">
              <Link to="/">
              <img src={collection[3].img} />
              <h4>{collection[3].title}</h4>
              </Link>
            </div>
        </div>
    </div>
    )
}

export default Collection;