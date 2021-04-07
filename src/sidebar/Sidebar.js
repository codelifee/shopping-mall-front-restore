import React, {useEffect, useState} from "react";
import './Sidebar.css'
import { Link, useHistory } from 'react-router-dom';
import axios from '../axios/axios';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { IconContext } from 'react-icons';
import Cookies from 'js-cookie';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from '../StateProvider/StateProvider';



function Sidebar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const [categories, setCategories] = useState([]);
  const history = useHistory();
  const [{basket}, dispatch] = useStateValue();

  const [cookie, setCookie] = useState();

  const handleLogout = () => {
    Cookies.remove("user");

    window.location.reload(false)
  }

  const getCookie = () => {
    const cookie = Cookies.get("user");

    console.log(cookie);

    setCookie(cookie);
  }
  
  useEffect(()=>{

    getCookie();

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

     <div className="sidebar__user">

            <div>
              {!cookie ? 
              <Link to="/login" className="sidebar__optionLinetwo">
                Sign In
              </Link>
              :
              <span onClick={handleLogout} className="sidebar__optionLinetwo">
                Sign Out
              </span>
              }
            </div>

          {cookie == 227 ?

          <Link to="/seller">
            <div className="sidebar__option">
              <span className="sidebar__optionLineOne">Admin</span>
              <span className="sidebar__optionLinetwo">Center</span>
            </div>
          </Link>
          
          :
          
          <></>
          
          }

          {cookie && cookie != 227? 
          <Link to={`/user/${cookie}`}>
          <div className="sidebar__option">
            <span className="sidebar__optionLineOne">Users</span>
            <span className="sidebar__optionLinetwo">Orders</span>
          </div>
        </Link>
        :
        <></>
          }

          

          <Link to="/checkout">
            <div className="sidebar__optionBasket">
              <ShoppingBasketIcon />
              <span className="sidebar__optionLineTwo header__basketCount">
                {/* {basket?.length} */}
              </span>
            </div>
          </Link>

      </div>
    
      </ul>
      </nav>
     
     
     
     </IconContext.Provider>
    );
  }
  
export default Sidebar;