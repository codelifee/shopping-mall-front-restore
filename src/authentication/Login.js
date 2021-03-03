import React, { useState, useEffect } from 'react';
import './Login.css';
import {Link,useHistory} from "react-router-dom";
import logo from '../img/logo.png';
import axios from '../axios/axios';

function Login() {
    const history = useHistory();
    const [users, setUsers] = useState({
        user_sequence_id: 0,
        user_id: '', 
        user_pwd: ''
    });
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(`users/all`)
            .then(response => setUsers(response.data))
            .catch(error => console.log(error))
           
            return request;
        }
        fetchData();
    }, []);
    const [values, setValues] = useState({
        user_sequence_id: 0,
        user_id: '', 
        user_pwd: '',
    });
    const handleChange = e => {
        const {name, value} = e.target
        setValues({
            ...values,
            [name]: value
        });
    };

    let loggedIn = null;
    let id = 0;

    const signIn = () => { 
            if(values.user_id == 'admin' && values.user_pwd == "adminpwd"){
                loggedIn="admin";
            }else{
                users.map((data, i) => {
                    if(values.user_id === users[i].user_id){
                        if(values.user_pwd === users[i].user_pwd){
                            loggedIn = "user";
                        }
                    }else{
                        return alert('아이디와 비밀번호를 다시 입력하세요');
                    }
                }) 
            }
        if(!(loggedIn==null)){
            return history.push=('/home');
        }
    }

    const signOut = () => {
        setValues(null);
    }

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
                    type='text' 
                    defaultValue={values.user_id}
                    onChange={handleChange}
                    />

                    <h5>Password</h5>
                    <input type='password' 
                    defaultValue={values.user_pwd}
                    onChange={handleChange}
                    />

                    <button
                    type='submit'
                    onClick={signIn}
                    className='login__signInButton'>Sign In</button>
                </form>

                <Link to ="/signup">
                    <button className='login__registerButton'>Create Account</button>
                </Link>
            
            </div>
        </div>
    )
    return {loggedIn, values, signOut};
}

export default Login;
