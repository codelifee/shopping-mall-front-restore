import React, {useEffect, useState} from "react";
import './Sidebar.css'
import { Link, useHistory } from 'react-router-dom';
import axios from '../axios/axios';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { IconContext } from 'react-icons';



function Sidebar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
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
      <IconContext.Provider value={{ color: '#333' }}>
   
   
          
            <div style={{color:'#333',fontSize:'25px',marginLeft:'15px',marginTop:'10px'}}> <FaIcons.FaBars onClick={showSidebar}/></div>
          
        
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}    >  
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
     

     {categories.map((category,i)=>{
       return <a href={`/products/${category.category_id}`}>
         <li key={i} className="menu_link">{category.category_name}</li>
         </a>
     })}
    
      </ul>
      </nav>
     
     
     
     </IconContext.Provider>
    );
  }
  
export default Sidebar;