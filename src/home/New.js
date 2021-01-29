import React,{useState} from 'react'
import './New.css'
import NewData from './NewData'
import {Link} from 'react-router-dom';

function New(){
  let [new_,newChange] = useState(NewData);
    return(
        <div className="home_container">
        <p className="title">신제품을 만나보세요</p>
        <div className="content">
          <div className="new_item">
          <Link to="/">
            <img src={new_[0].img} alt="신제품"/>
            </Link>
          </div>
          <div className="new_item">
          <Link to="/">
            <img src={new_[1].img} alt="신제품"/>
            </Link>
          </div>
          <div className="new_item">
          <Link to="/">
            <img src={new_[2].img} alt="신제품"/>
            </Link>
          </div>
        </div> 
        </div> 
    )
}

export default New;