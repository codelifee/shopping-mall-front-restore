import React, {useState} from 'react'
import './Navbar.css'
import {Link, useParams} from 'react-router-dom'
import { FaShoppingBag, FaUserCog, FaCaretDown } from "react-icons/fa"; //FaChair,
import Logo from '../img/logo.png'

function Navbar() {

    const [order, setOrder] = useState(false);
    const [user, setUser] = useState(false);
    const {user_sequence_id} = useParams();

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
                                <Link to={`/user/order/${user_sequence_id}`}>
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
                                    <Link to={`/user/updateprofile/${user_sequence_id}`}>
                                    <p>회원 정보 수정</p>
                                    </Link>
                                    <Link to={`/user/deleteprofile/${user_sequence_id}`}>
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
