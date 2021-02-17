import React, {useState} from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
import { FaShoppingBag, FaChair,  FaUserCog, FaCaretDown } from "react-icons/fa";
import Logo from '../img/logo.png'

function Navbar() {

    const [product, setProduct] = useState(false);
    const [order, setOrder] = useState(false);
    const [user, setUser] = useState(false);


    return (
        <div className="navbar">
            {/* <Link to="/seller">
                <div className="navbar__logo">
                    <h1>Seller Center</h1>
                </div>
            </Link> */}
            <Link onClick={() => {window.location.href="/"}}>
                <div className='navbar__logo'>
                <img
                src={Logo} alt=""/>
                </div>
            </Link>
                <div className="navbar__links">
                    <div className="navbar__link">
                        <h2>
                        <FaChair />
                        Product
                        <FaCaretDown 
                        onClick={()=>setProduct(!product)}
                        className={product ? "icon-active" : "icon"}
                        />
                        </h2>
                        {product &&
                            <div>
                            <Link to="/seller/product">
                                <p>My Products</p>
                            </Link>
                            <Link to="/seller/addProduct">
                                <p>Add New Product</p>
                            </Link>
                            </div>
                        }
                        
                    </div>
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
                                <Link to="/seller/order">
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
                                <Link to="/seller/user">
                                <p>Check Users</p>
                                </Link>
                            }
                        </div>
                    </div>
                </div>
                
            </div>
    )
}

export default Navbar
