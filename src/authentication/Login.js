import React, { useState, useEffect } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import logo from "../img/logo.png";
import { auth } from "../configuration/firebase";
import axios from "../axios/axios";
import { useStateValue } from "../StateProvider/StateProvider";
import Cookies from "js-cookie";
import KakaoLogin from "./Kakao";
import { HistoryOutlined } from "@material-ui/icons";
import { event } from "jquery";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const signIn = (e) => {
    e.preventDefault();

    axios.post("/authenticate", 
              {
                "username" : email,
                "password" : password 
              },
              {
              headers: {
                "Content-Type" : "application/json"
              }
              }
    )
    .then(res => {
              console.log(res);

              axios.post("/users/getUserNumber", 
              {
                "username" : email 
              },
              {
              headers: {
                "Content-Type" : "application/json",
                "Authorization" : `Bearer ${res.data.jwt}`
              }
              }
              )
              .then(res => console.log(res))
              .catch(err => console.log(err))
    }
    )
    .catch(err => console.log(err))

}

  // useEffect(() => {
  //     if(Object.keys(user).length === 0) {
  //         history.push('/home')
  //     } else {
  //         alert("아이디나 비밀번호가 일치하지 않습니다")
  //     }
  // }, [user])

  return (
    <div className="login">
      <Link to="/home">
        <img className="login__logo" src={logo} />
      </Link>

      <div className="login__container">
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
            onClick={signIn}
            className="login__signInButton"
          >
            Sign In
          </button>
        </form>

        <Link to="/signup">
          <button className="login__registerButton">Create Account</button>
        </Link>


        {/*<NaverLogin
          success={res => console.log(res)}
          fail={(res) => console.log(res)}
        />*/}

        <KakaoLogin
          success={res => console.log(res)}
          fail={(res) => console.log(res)}
        />

      </div>
    </div>
  );
}
export default Login;
