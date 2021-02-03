import './App.css';
import Header from './Header';
import React, {useEffect} from 'react';
import Home from './home/Home'
import Seller from './seller/Seller'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Checkout from './checkout/Checkout';
import Detail from './detail/Detail';
import Login from './authentication/Login';
import { auth } from './configuration/firebase';
import { useStateValue } from './StateProvider/StateProvider';
import Payment from './payment/Payment'
import Footer from './footer/Footer';
import ImgSlide from './slide/ImgSlide';
import LandingPage from './landingpage/LandingPage';
import ProductView from './ProductView/ProductView';
import ReviewForm from './detail/ReviewForm';
import QnAForm from './detail/QnAForm';


function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {

    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>', authUser)

      if (authUser) {
        // the user logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        //the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])


  return (
    //BEM convention
    
    <Router>
      <div className="app">
        <Switch>
	
	<Route path="/landingpage">
        <Header/>
              <LandingPage />
              <Footer/>
            </Route>
	
            <Route path="/login">
              <Login />
            </Route>

            <Route path="/checkout">
              <Header />
              <Checkout />
            </Route>

            <Route path="/products">
              <Header />
              <ProductView />
            </Route>

            <Route path="/detail/:id">
              <Header />
              <Detail />
            </Route>

            <Route path="/review">
              <ReviewForm/>
            </Route>

            <Route path="/QnA">
              <QnAForm/>
            </Route>

            <Route path="/payment">
              <Header />
              
              <Payment />
            </Route>
            <Route path="/seller">
              <Seller />
            </Route>
            <Route path="/">
              <Header />
              
                 <ImgSlide/>
              <Home />
              <Footer/>
            </Route>
        </Switch>
      </div>
    </Router>
 );
}

export default App;
