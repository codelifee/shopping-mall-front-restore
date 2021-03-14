import React, { useState, useEffect } from 'react'
import './Login.css'
import {Link, useHistory} from "react-router-dom";
import logo from '../img/logo.png'
import { auth } from '../configuration/firebase'
import axios from '../axios/axios'
import {useStateValue} from '../StateProvider/StateProvider'
import Cookies from 'js-cookie'
import { HistoryOutlined } from '@material-ui/icons';


function Login() {
    const history = useHistory();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const [{auth}, dispatch] = useStateValue();

    const setUser = (res) => {

        if(res.data == "") {
            alert("이메일이나 비밀번호가 일치하지 않습니다")
        } else {
            return new Promise((resolve, reject) => {
                resolve( dispatch({
                    type: 'SET_USER',
                    user: res.data
                }))
    
                console.log(res)
                Cookies.set("user", res.data.user_sequence_id);

                history.push("/home");
            })
        }
        
    }

    const signIn = e => {
        e.preventDefault();

        axios.get('/users/login', {
            params: {
                user_id: email,
                user_pwd: password
            }
        })
        .then(res => {
            setUser(res)
        }
        ).then(res => console.log(res))
        .catch(err => console.log(err));
    }


    // useEffect(() => {
    //     if(Object.keys(user).length === 0) {
    //         history.push('/home')
    //     } else {
    //         alert("아이디나 비밀번호가 일치하지 않습니다")
    //     }
    // }, [user]) 

    console.log(Cookies.get("user"));

    return (
        <div className='login'>
            <Link to='/home'>
            <img className="login__logo" src={logo} />
            </Link>
            
            <div className='login__container'>
                <h1>Sign in</h1>
                <form>
                    <h5>Id</h5>
                    <input 
                    name="email"
                    type='text' 
                    onChange={e => setEmail(e.target.value)}
                    />

                    <h5>Password</h5>
                    <input 
                    name="password"
                    type='password'
                    onChange={e => setPassword(e.target.value)}
                    />

                    <button
                    type='submit'
                    onClick={signIn}
                    className='login__signInButton'>Sign In</button>
                </form>

                <Link to="/signup">
                <button 
                className='login__registerButton'>Create Account</button>
                </Link>
            </div>
        </div>
    )
}
export default Login;

