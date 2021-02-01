import React,{useState} from 'react'
import './Best.css'
import BestData from './BestData'
import {Link} from 'react-router-dom';
import Product from './Product';

function Best(){
  let [best,bestChange] = useState(BestData);
 
    return(
        <div className="home_container">
        <p className="title">인기상품을 만나보세요</p>
        <div className="content">
          

      

          <div className="best_item">
            
            <Link to="/">
            <Product 
                    id={best[0].id}
                    image={best[0].img}
                   // description="양파로 즙을 낸 것"
                   // price={6000}
                    /> 
            </Link>
            
          </div>

          <div className="best_item">
            <Link to="/">
            <Product 
                    id={best[1].id}
                    image={best[1].img}
                   // description="양파로 즙을 낸 것"
                   // price={6000}
                    /> 
                 </Link>
            
          </div>

          <div className="best_item">
            <Link to="/">
            <Product 
                    id={best[2].id}
                    image={best[2].img}
                   // description="양파로 즙을 낸 것"
                   // price={6000}
                    /> 
            </Link>
            
          </div>

          <div className="best_item">
            <Link to="/">
            <Product 
                    id={best[3].id}
                    image={best[3].img}
                   // description="양파로 즙을 낸 것"
                   // price={6000}
                    /> 
            </Link>
          </div>

          <div className="best_item">
            <Link to="/">
            <Product 
                    id={best[4].id}
                    image={best[4].img}
                   // description="양파로 즙을 낸 것"
                   // price={6000}
                    /> 
            </Link>
            
          </div>

          <div className="best_item">
          <Link to="/">
          <Product 
                    id={best[5].id}
                    image={best[5].img}
                   // description="양파로 즙을 낸 것"
                   // price={6000}
                    /> 
            </Link>
            
          </div>

        </div> 
    </div> 
    )
}

export default Best;