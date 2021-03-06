import './App.css';
import "antd/dist/antd.css";
import Header from './Header';
import React, { useState, useEffect } from 'react';
import Home from './home/Home';
import SearchResult from './SearchResult';
import Seller from './seller/Seller';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Checkout from './checkout/Checkout';
import Detail from './detail/Detail';
import { auth } from './configuration/firebase';
import { useStateValue } from './StateProvider/StateProvider';
import Payment from './payment/Payment';
import Footer from './footer/Footer';
import Slider from './slide2/Slide2';
import LandingPage from './landingpage/LandingPage';
import ProductView from './ProductView/ProductView';
import ReviewForm from './detail/ReviewForm';
import Cookies from 'js-cookie';
import ReviewPatchForm from './detail/ReviewPatchForm';
import './App.css';
import QnAForm from './detail/QnAForm';
import KakaoMap from './Introduction/KakaoMap';
import User from './user/User';
import SignUp from './authentication/SignUp';
import Login from './authentication/Login';
import PaymentPage from './payment/PaymentPage';
import PaymentResult from './payment/PaymentResult';
import ScrollToTop from './ScrollToTop';

function App() {
  const [{}, dispatch] = useStateValue();
  const [cookie, setCookie] = useState();

  const [isSubmittied, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  const getCookie = () => {
    const cookie = Cookies.get('user');
    console.log(cookie);
    setCookie(cookie);
  };

  return (
    //BEM convention
    <Router>
      <div className="app">
        <ScrollToTop>
          <Switch>
            <Route path="/home">
              <Header />
              <Slider />
              <Home />
              <Footer />
            </Route>

            <Route path="/searchResult/:search">
              <Header />
              <SearchResult />
            </Route>

            <Route path="/signup">

              {!isSubmittied ? (

                <SignUp submitForm={submitForm} />

               ): (
                (window.location.href = '/login')
              )}
            </Route>
            
            <Route path="/login">
              <Login />
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

            <Route path="/payment/">
              <Header />
              <Payment />
            </Route>

            <Route exact path="/paymentpage">
            <PaymentPage />
          </Route>
          
          <Route path="/paymentresult">
            <PaymentResult />
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

            <Route exact path="/">
              <LandingPage />
            </Route>
          </Switch>
        </ScrollToTop>
      </div>
    </Router>
  );
}

export default App;
