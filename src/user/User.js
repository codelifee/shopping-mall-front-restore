import { React, useState, useEffect } from 'react';
import Axios from 'axios';
import Navbar from './Navbar';
import UpdateProfile from './UpdateProfile';
import Cookies from 'js-cookie'

import Profile from './Profile';
import Orders from './Orders';
import Exchange from './Exchange';
import ReviewForm from '../detail/ReviewForm';
import Return from './Return';
import OrderDetails from './OrderDetails';
import OrdersData from './OrdersData';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from 'react-router-dom';
import './User.css';
import DeleteProfile from './DeleteProfile';

function User() {
  const [isSubmittied, setIsSubmitted] = useState(false);
  const user_sequence_id = useParams();
  const [cookie, setCookie] = useState();

  function submitForm() {
    setIsSubmitted(true);
  }
 
 
  const getCookie = () => {
    const cookie = Cookies.get("user");

    console.log(cookie);

    setCookie(cookie);
  }


  return (
    <Router>
      <div className="user">
        <Switch>

        <Route path={`/user/${cookie}`}>
            <Navbar />
            <Orders />

          </Route>

        <Route path="/user/deleteprofile/:user_sequence_id">
            <Navbar />
            <DeleteProfile />
          </Route>


          <Route path="/user/updateprofile/:user_sequence_id">
            <Navbar />
            {!isSubmittied ? (
              <UpdateProfile submitForm={submitForm} />
            ) : (
              (window.location.href = '/home')
            )}
          </Route>
          <Route path="/user/deleteprofile/:user_sequence_id">
            <Navbar />
            <DeleteProfile />
          </Route>
          <Route exact path="/user/:user_sequence_id">
            <Navbar />
            <Profile />
          </Route>

          <Route path="/user/order/:user_sequence_id">
            <Navbar />
            <Orders />
          </Route>
          <Route path="/user/orderdata/:user_sequence_id">
            <Navbar />
            <OrdersData />
          </Route>
          <Route path="/user/orderdetail/:user_sequence_id">
            <Navbar />
            <OrderDetails />
          </Route>

          <Route path="/user/return/:order_id">
            <Navbar />
            <Return />
          </Route>
          <Route path="/user/exchange/:order_id">
            <Navbar />
            <Exchange />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default User;
