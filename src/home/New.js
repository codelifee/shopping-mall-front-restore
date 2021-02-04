import React,{useState} from 'react'
import './New.css'
import NewData from './NewData'
import {Link} from 'react-router-dom';
import Product from './Product';

function New(){
  let [new_,newChange] = useState(NewData);
    return(
        <div className="home_container">
        <p className="title">신제품을 만나보세요</p>
        <div className="content">
          <div className="new_item">
          <Link to="/">
          <Product 
                    id={new_[0].id}
                    image={new_[0].img}
                   // description="양파로 즙을 낸 것"
                   // price={6000}
                    />
            </Link>
          </div>
          <div className="new_item">
          <Link to="/">
          <Product 
                    id={new_[1].id}
                    image={new_[1].img}
                   // description="양파로 즙을 낸 것"
                   // price={6000}
                    />
            </Link>
          </div>
          <div className="new_item">
          <Link to="/">
          <Product 
                    id={new_[2].id}
                    image={new_[2].img}
                   // description="양파로 즙을 낸 것"
                   // price={6000}
                    />
            </Link>
          </div>
        </div> 
        </div> 
    )
}

export default New;