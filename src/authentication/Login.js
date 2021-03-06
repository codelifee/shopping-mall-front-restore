import React, { useState, useEffect, useReducer } from 'react';
import './Login.css';
import {Link} from "react-router-dom";
import logo from '../img/logo.png';
import axios from '../axios/axios';
import { useStateValue } from '../StateProvider/StateProvider';

function Login() {
    
    const [{basket, user}, dispatch] = useStateValue();
    
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
    console.log(users);

    const [values, setValues] = useState({
        user_sequence_id: 0,
        user_id: '', 
        user_pwd: '',
        loggedIn: ''
    });

    const handleChange = e => {
        e.preventDefault();
        const {name, value} = e.target
        setValues({
            ...values,
            [name]: value
        });
    }
    console.log(values);

    const signIn = () => {
        if(values.user_id == 'admin' && values.user_pwd == "adminpwd"){
            setValues(values.loggedIn = "admin");
        }else{
            users.map((data, i) => {
                if(values.user_id === users[i].user_id){
                    if(values.user_pwd === users[i].user_pwd){
                        setValues(values.loggedIn = "user");
                        setValues(values.user_sequence_id = users[i].user_sequence_id);
                    }
                }
            }) 
        }
        console.log(user);
        if(values.loggedIn==''){
            alert('존재하지 않는 아이디나 비밀번호입니다.');
        }else{
            dispatch({type: "SET_USER",user: values});
            window.location.href="/home";
        }
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
                    id="user_id"
                    name="user_id"
                    defaultValue={values.user_id}
                    onChange={handleChange}
                    />

                    <h5>Password</h5>
                    <input type='password' 
                    id="user_pwd"
                    name="user_pwd"
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
}
export default Login;

