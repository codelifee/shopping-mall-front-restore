import React, { useState } from 'react'
import './Login.css'
import {Link, useHistory} from "react-router-dom";
import logo from '../img/logo.png'
import { auth } from '../configuration/firebase'
import axios from '../axios/axios'
import {useStateValue} from '../StateProvider/StateProvider'


function Login() {
    const history = useHistory();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [loginUser, setLoginUser] = useState();

    const [{user}, dispatch] = useStateValue();

    // const removeFromBasket = () => {
    //     dispatch({
    //         type: 'REMOVE_FROM_BASKET',
    //         id: id,
    //     })
    // }


    const signIn = e => {
        e.preventDefault();

        axios.get('/users/login', {
            params: {
                user_id: email,
                user_pwd: password
            }
        })
        .then(res => dispatch({
            type: 'SET_USER',
            user: res.data
        }))
        .catch(err => console.log(err));

        history.push("/home")
    }

    console.log(user)

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

                {/* <button 
                onClick={register}
                className='login__registerButton'>Create Account</button> */}

            </div>
        </div>
    )
}
export default Login;

