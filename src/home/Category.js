import React,{useState,useEffect} from 'react'
import './Category.css';
import CategoryData from './CategoryData';
import {Link, useHistory} from 'react-router-dom';
import axios from '../axios/axios.js';
import fruits from './images/fruits.jpg';
import vegetables from './images/vegetables.jpg';
import ginseng from './images/ginseng.jpg';
import velvet from './images/velvet.jpg';
import shells from './images/shells.jpg';
import medicinal from './images/medicinal.jpg';

//category_id와 category_name 가져와서 해당 category page로 넘기기

function Category(){
  const [categories, setCategories] = useState([]);  

  const [category_picture, setCategory_picture] = 
  useState([fruits,vegetables,ginseng, velvet, shells, medicinal]);

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

    return(
        <div className="home_container">
         <p className="title">카테고리</p>
         <div className="swiper_wrapper">
         {
          categories.map((data, i)=>{
            return <SlideItem2 category={categories[i]}
            picture={category_picture[i]} key={i}/>
          })
        }
        </div>  
       </div> 
    )
}

function SlideItem2(props){

  const history = useHistory();

  return(
    <div className="slide_item">
      {/* <div as={Link} to ='/'> */}
      <div onClick={()=>{
        history.push(`/products/${props.category.category_id}`)
      }}>
        <img src={props.picture}/>
        <h4>{props.category.category_name}</h4>
      </div>
    </div>
  )
}

export default Category;