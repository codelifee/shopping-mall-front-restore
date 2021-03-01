import "./App.css";
import Header from "./Header";
import React, { useState, useEffect } from "react";
import Home from "./home/Home";
import Seller from "./seller/Seller";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./checkout/Checkout";
import Detail from "./detail/Detail";
import Login from "./authentication/Login";
import { auth } from "./configuration/firebase";
import { useStateValue } from "./StateProvider/StateProvider";
import Payment from "./payment/Payment";
import Footer from "./footer/Footer";
// import ImgSlide from "./slide/ImgSlide";
import Slide2 from "./slide2/Slide2";
import LandingPage from "./landingpage/LandingPage";
import ProductView from "./ProductView/ProductView";
import ReviewForm from "./detail/ReviewForm";
import ReviewPatchForm from "./detail/ReviewPatchForm";
import "./App.css";
import QnAForm from "./detail/QnAForm";
import KakaoMap from "./Introduction/KakaoMap";
import User from './user/User';
import LoginForm from './authentication/LoginForm';

function App() {

  // const [{}, dispatch] = useStateValue();

  // useEffect(() => {
  //   auth.onAuthStateChanged(authUser => {
  //     console.log("THE USER IS >>>", authUser);

  //     if (authUser) {
  //       // the user logged in
  //       dispatch({
  //         type: "SET_USER",
  //         user: authUser,
  //       });
  //     } else {
  //       //the user is logged out
  //       dispatch({
  //         type: "SET_USER",
  //         user: null,
  //       });
  //     }
  //   });
  // }, []);

  return (
    //BEM convention

    <Router>
      <div className="app">
        <Switch>
        {/* <Route path="/map">
            <Map />
          </Route> */}
          <Route path="/home">
            <Header />
            <Slide2 />
            <Home />
            <Footer />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/loginform">
          <Header />
            <LoginForm />
            <Footer />
          </Route>
          <Route path="/logout">
            <LoginForm />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/products/:id">
            <Header />
            <ProductView />
          </Route>

          <Route path="/detail/:id">
            <Header />
            <Detail />
          </Route>

          <Route path="/review/:id">
            <ReviewForm />
          </Route>

          <Route path="/reviewUpdate/:id">
            <ReviewPatchForm />
          </Route>

          <Route path="/question/:id">
            <QnAForm />
          </Route>

          <Route path="/payment">
            <Header />

            <Payment />
          </Route>
          <Route path="/seller">
            <Seller />
          </Route>

          <Route path="/seller">
            <Seller />
          </Route>

          <Route path="/user">
              <User />
            </Route>

          <Route path="/introduction">
            <Header />
            
            <KakaoMap />
            <Footer />
          </Route>

          <Route path="/">
            <LandingPage />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
