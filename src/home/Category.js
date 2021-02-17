import React,{useState,useEffect} from 'react'
import './Category.css';
import CategoryData from './CategoryData';
import {Link} from 'react-router-dom';
import axios from '../axios/axios.js';

//category_id와 category_name 가져와서 해당 category page로 넘기기

function Category(){
  const [categories, setCategories] = useState([]);  

  useEffect(()=>{
    async function fetchDate(){
        const request = await axios.get(`categories/all`)
        .then(response =>
            setCategories(response.data))
        .catch(error => console.log(error))
             
        return request;
    }
    fetchDate();
}, [])
console.log(categories) 

let [category,categoryChange] = useState(CategoryData);

    return(
        <div className="home_container">
         <p className="title">카테고리</p>
         <div className="swiper_wrapper">
         {
          category.map((data, i)=>{
            return <SlideItem2 category={category[i]} key={i}/>
          })
        }
        </div>  
       </div> 
    )
}

function SlideItem2(props){
  return(
    <div className="slide_item">
      <div as={Link} to ='/'>
        <img src={props.category.img}/>
        <h4>{props.category.title}</h4>
      </div>
    </div>
  )
}

export default Category;