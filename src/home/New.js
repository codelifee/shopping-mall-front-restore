import React,{useState,useEffect} from 'react'
import './New.css';
import NewData from './NewData';
import {Link} from 'react-router-dom';
import axios from '../axios/axios.js';

//product_id 받아와서 product_detail page로 넘기기

function New(){
  const [products, setProducts] = useState([]);
  
    useEffect(()=>{
        async function fetchDate() {
            const request = await axios.get(`products/all`)
            .then(response =>
                setProducts(response.data))
            .catch(error => console.log(error))
    
            return request;
        }
        fetchDate();
    }, [])
    console.log(products)

  let [new_,newChange] = useState(NewData);
    return(
      <div className="home_container">
        <p className="title">신제품을 만나보세요</p>
        <div className="new_content">
        
        {
          new_.map((data, i)=>{
            return <NewItem new_={new_[i]} key={i}/>
          })
        }

        </div> 
      </div> 
    )
}

function NewItem(props){
  return(
    <div className="new_item">
      <div as={Link} to ='/'className="new_item_box">
        <img src={props.new_.img}/>
        <div className="new_item_h4">
        <h4>{props.new_.decoration}</h4>
        <h4>{props.new_.title}</h4>
        <h4>{props.new_.price}원</h4>
      </div>
    </div>
    </div>
  )
}

export default New;