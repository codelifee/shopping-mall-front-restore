import {React,useState} from 'react';

import Navbar from './Navbar';
import UpdateProfile from './UpdateProfile';

import Profile from './Profile';
import Orders from './Orders';
import Exchange from './Exchange';
import ReviewForm from '../detail/ReviewForm';
import Return from './Return';
import OrderDetails from './OrderDetails';
import OrdersData from './OrdersData';
import {BrowserRouter as Router, Switch, Route, useParams} from "react-router-dom";
import './User.css';
import DeleteProfile from './DeleteProfile';


function User() {
    
    const[isSubmittied, setIsSubmitted] = useState(false);
    const user_sequence_id = useParams();

    function submitForm(){
        setIsSubmitted(true);
    }

    return (
        <Router>
            <div className="user">
                <Switch>                    
                    <Route path='/user/updateprofile/:user_sequence_id'>
                        <Navbar/>
                        {!isSubmittied ? (<UpdateProfile submitForm={submitForm}/>)
                        : (window.location.href="/home")} 
                    </Route>
                    <Route path='/user/deleteprofile/:user_sequence_id'>
                        <Navbar/>
                        <DeleteProfile/>
                    </Route>
                    <Route exact path='/user/:user_sequence_id'>
                        <Navbar />
                        <Profile />
                    </Route>
                    
                   
                    <Route path='/user/order/:user_sequence_id'>
                        <Navbar/>
                        <Orders/>
                    </Route>
                    <Route path='/user/orderdata/:user_sequence_id'>
                        <Navbar/>
                        <OrdersData/>
                    </Route>
                    <Route path='/user/orderdetail/:user_sequence_id'>
                        <Navbar/>
                        <OrderDetails/>
                    </Route>
                </Switch>
            </div>
        </Router>
        
    )
}

export default User
