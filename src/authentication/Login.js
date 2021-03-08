import React, { useState } from 'react';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import logo from '../img/logo.png';
import { auth } from '../configuration/firebase';
import axios from '../axios/axios';
import { useStateValue } from '../StateProvider/StateProvider';

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const [{ user }, dispatch] = useStateValue();

  // const signIn = e => {
  //     e.preventDefault();

  //     axios.get('/users/all')
  //     .then(res => {
  //         if()
  //     })
  // }

  return (
    <div className="">
      <Link to="/home">
        <img className="__logo" src={logo} />
      </Link>

      <div className="__container">
        <h1>Sign in</h1>
        <form>
          <h5>Id</h5>
          <input
            name="email"
            type="text"
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            name="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            // onClick={signIn}
            className="__signInButton"
          >
            Sign In
          </button>
        </form>

        {/* <button 
                onClick={register}
                className='__registerButton'>Create Account</button> */}
      </div>
    </div>
  );
}
export default Login;
