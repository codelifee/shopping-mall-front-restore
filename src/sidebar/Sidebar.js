import React, {useEffect, useState} from "react";
import './Sidebar.css'
import { Link, useHistory } from 'react-router-dom';
import axios from '../axios/axios';



function Sidebar() {

  const [categories, setCategories] = useState([]);
  const history = useHistory();
  
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

    return (
    <div>
     <div className="menu_botton">

 <input type="checkbox" id="menuicon" className="menu"/>
  <label for="menuicon">
    <span></span>
    <span></span>
    <span></span>
    </label>
   
    <div  className="sidebar" >
     

      <ul className="menu_list">
     {/* <li><Link to='/' className="menu_link">Home smart</Link></li>
     <li><Link to='/' className="menu_link">Furniture</Link></li>
     <li><Link to='/' className="menu_link">Beds & mattresses</Link></li>
     <li><Link to='/' className="menu_link">Storage & organisation</Link></li>
     <li><Link to='/' className="menu_link">Kitchen & appliances</Link></li>
     <li><Link to='/' className="menu_link">Decoration</Link></li>
     <li><Link to='/' className="menu_link">Lighting</Link></li>
     <li><Link to='/' className="menu_link">Rugs, mats & flooring</Link></li>
     <li><Link to='/' className="menu_link">Home improvement</Link></li> */}

     {categories.map((category,i)=>{
       return <li key={i} className="menu_link" onClick={()=>{
         return history.push(`/products/${category.category_id}`)
       }}>{category.category_name}</li>
     })}
    
      </ul>
      </div>   
     </div>
     </div>
    );
  }
  
export default Sidebar;