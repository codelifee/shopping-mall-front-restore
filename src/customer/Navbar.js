import React, {useState} from 'react'
import './Navbar.css'
import UpdateCustomer from './UpdateCustomer'
import {Link} from 'react-router-dom'
import { FaShoppingBag, FaChair,  FaUserCog, FaCaretDown } from "react-icons/fa";
import Logo from '../img/logo.png'

function Navbar() {

    const [order, setOrder] = useState(false);
    const [user, setUser] = useState(false);


    return (
        <div className="navbar">
            <Link onClick={() => {window.location.href="/"}}>
                <div className='navbar__logo'>
                <img
                src={Logo} alt=""/>
                </div>
            </Link>
                <div className="navbar__links">
                    <div className="navbar__link">
                        <h2>
                        <FaShoppingBag />
                            Order
                            <FaCaretDown 
                        onClick={()=>setOrder(!order)}
                        className={order ? "icon-active" : "icon"}
                        />
                        </h2>
                        <div>
                            {order &&
                                <Link to="/customer/">
                                <p>My Orders</p>
                                </Link>
                            }
                        </div>
                        
                    </div>
                    <div className="navbar__link">
                        <h2>
                            <FaUserCog />
                            User
                            <FaCaretDown 
                        onClick={()=>setUser(!user)}
                        className={user ? "icon-active" : "icon"}
                        />
                        </h2>
                        <div>
                            {user && 
                                <Link to="/customer/updatecustomer">
                                <p>Update Users</p>
                                </Link>
                            }
                        </div>
                    </div>
                </div>
                
            </div>
    )
}

export default Navbar
