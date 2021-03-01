import React,{useState,useEffect} from 'react'
import './Recommendation.css';
import RecommendationData from './RecommendationData';
import {Link} from 'react-router-dom';
import axios from '../axios/axios.js';

//product_id 받아와서 product page로 넘기기

function Recommendation(){
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

  let [Recommendation,RecommendationChange] = useState(RecommendationData);
    return(
      <div className="home_container">
         <p className="title">추천 상품을 만나보세요</p>     
        <div className="swiper_wrapper2">
        {
          Recommendation.map((data, i)=>{
            return <SlideItem Recommendation={Recommendation[i]} key={i}/>
          })
        }
        </div>
    </div>
    )
}

function SlideItem(props){
  return(
    <div className="slide_item2">
      <div as={Link} to ='/' className="slide_item2_box">
        <img src={props.Recommendation.img}/>
        <div>
        <h4>{props.Recommendation.decoration}</h4>
        <h4>{props.Recommendation.title}</h4>
        <h4>{props.Recommendation.price}원</h4>
        </div>
      </div>
    </div>
  )
}

export default Recommendation;