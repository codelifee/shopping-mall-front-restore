import React from "react";
import './Sidebar.css'
import { Link } from 'react-router-dom';




function Sidebar() {
  
  
    return (
    <div>
     <div className="menu_botton">

 <input type="checkbox" id="menuicon" className="menu"/>
<<<<<<< HEAD
  <label for="menuicon">
=======
  <label htmlFor="menuicon">
>>>>>>> 6c2d7c67d0ac068d5bf0a21c5c24b561fa05e13d
    <span></span>
    <span></span>
    <span></span>
    </label>
   
    <div  className="sidebar" >
      {/*meun */}

      <ul className="menu_list">
     <li><Link to='/' className="menu_link">Home smart</Link></li>
     <li><Link to='/' className="menu_link">Furniture</Link></li>
     <li><Link to='/' className="menu_link">Beds & mattresses</Link></li>
     <li><Link to='/' className="menu_link">Storage & organisation</Link></li>
     <li><Link to='/' className="menu_link">Kitchen & appliances</Link></li>
     <li><Link to='/' className="menu_link">Decoration</Link></li>
     <li><Link to='/' className="menu_link">Lighting</Link></li>
     <li><Link to='/' className="menu_link">Rugs, mats & flooring</Link></li>
     <li><Link to='/' className="menu_link">Home improvement</Link></li>
    
      </ul>
      </div>   
     </div>
     </div>
    );
  }
  
export default Sidebar;