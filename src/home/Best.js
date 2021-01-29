import React,{useState} from 'react'
import './Best.css'
import BestData from './BestData'
import {Link} from 'react-router-dom';

function Best(){
  let [best,bestChange] = useState(BestData);
    return(
        <div className="home_container">
        <p className="title">인기상품을 만나보세요</p>
        <div className="content">
          <div className="best_item">
            <Link to="/">
            <img src={best[0].img} alt="침대"/>
            </Link>
          </div>

          <div className="best_item">
            <Link to="/">
            <img src={best[1].img} alt="책장"/>
            </Link>
          </div>

          <div className="best_item">
            <Link to="/">
            <img src={best[2].img} alt="의자"/>
            </Link>
          </div>

          <div className="best_item">
            <Link to="/">
            <img src={best[3].img} alt="러그"/>
            </Link>
          </div>

          <div className="best_item">
            <Link to="/">
            <img src={best[4].img} alt="소파"/>
            </Link>
          </div>

          <div className="best_item">
          <Link to="/">
            <img src={best[5].img} alt="테이블"/>
            </Link>
          </div>

        </div> 
    </div> 
    )
}

export default Best;