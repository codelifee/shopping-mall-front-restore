import React, {useState, useEffect} from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
import { FaShoppingBag, FaUserCog, FaCaretDown } from "react-icons/fa"; //FaChair,
import Logo from '../img/logo.png'
import Cookies from "js-cookie";

function Navbar() {

    const [order, setOrder] = useState(false);
    const [user, setUser] = useState(false);
    const [cookie, setCookie] = useState();
 
    useEffect(() => {
        setCookie(Cookies.get("user"));
    }, [])

    console.log(cookie);

    return (
        <div className="navbar">
            <Link onClick={() => {window.location.href="/home"}}>
                <div className='navbar__logo'>
                <img
                src={Logo} alt=""/>
                </div>
            </Link>
                <div className="navbar__links">
                    <div className="navbar__link">
                        <h2>
                        <FaShoppingBag />
                            주문내역
                            <FaCaretDown 
                        onClick={()=>setOrder(!order)}
                        className={order ? "icon-active" : "icon"}
                        />
                        </h2>
                        <div>
                            {order &&
                                <Link to={`/user/order/${cookie}`}>
                                <p>나의 주문내역</p>
                                </Link>
                            }
                        </div>
                        
                    </div>
                    <div className="navbar__link">
                        <h2>
                            <FaUserCog />
                            회원
                            <FaCaretDown 
                        onClick={()=>setUser(!user)}
                        className={user ? "icon-active" : "icon"}
                        />
                        </h2>
                        <div>
                            {user && 
                                <div>
                                    <Link to={`/user/updateprofile/${cookie}`} onClick={() => window.location.reload()}>
                                    <p>회원 정보 수정</p>
                                    </Link>
                                    <Link to={`/user/deleteprofile/${cookie}`}>
                                    <p>회원 탈퇴</p>
                                    </Link>
                                </div>
                            }
                        </div>
                    </div>
                </div>
                
            </div>
    )
}

export default Navbar
