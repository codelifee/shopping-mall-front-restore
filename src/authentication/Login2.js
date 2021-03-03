import React ,{useState} from 'react';
import axios from '../axios/axios';
import {Link} from "react-router-dom";
import './Login2.css'; 

function Login2() {
    const [users, setUsers] = useState({
        user_sequence_id: 0,
        user_id: '', 
        user_pwd: ''
    });
    const [user, setUser] = useState({
        user_id: '', 
        user_pwd: '',
        sessionUser:''
    });
    const handleChange = e => {
        const {name, value} = e.target
        setUser({
            ...user,
            [name]: value
        });
    };

    const checkLogin = () => { 
        axios.get(`users/all`)
            .then(res => setUsers(res.data))
            .catch(error => console.log(error))
            let status = false;
        users.map((data, i) => {
            if(user.user_id === users[i].user_id){
                if(user.user_pwd === users[i].user_pwd){
                    status = true;
                }
            }
        })
        if(status){
            window.location.href="/home";
        }else{
            alert('아이디와 비밀번호를 다시 입력하세요.');
        }    
    }

    return (
        <div className="login">
            <div className="login_container">
                <div className="login_container_head">
                    <h1>Log in</h1>
                </div>
                <form className="login_search">
                <div className="login_id">
                        <label htmlFor="">Id</label>
                        <input 
                            id="user_id"
                            type="email" 
                            name="user_id"
                            value={user.user_id}
                            placeholder="Enter your id"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="login_password">
                        <label htmlFor="">Password</label>
                        <input 
                            id="user_pwd"
                            type="password" 
                            name="user_pwd"
                            value={user.user_pwd}
                            placeholder="Enter your password"
                            onChange={handleChange}
                        />
                    </div>
                    </form>
                <button className="loginBtn" 
                onClick={checkLogin}>
                    Login
                </button >
                <Link to ="/signup">
                    <button className="signupBtn" >Sign Up</button>
                </Link>
            </div>
        </div> 
    )
}

export default Login2;

