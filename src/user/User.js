import {React,useState} from 'react';
import Navbar from './Navbar';
import UpdateProfile from './UpdateProfile';
import Profile from './Profile';
import Orders from './Orders';
import OrdersData from './OrdersData';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './User.css';
import DeleteProfile from './DeleteProfile';
import OrderDetails from './OrderDetails';

function User() {
    const[isSubmittied2, setIsSubmitted2] = useState(false);

    function submitForm2(){
        setIsSubmitted2(true);
    }

    return (
        <Router>
            <div className="user">
                <Switch>                    
                    <Route path='/user/updateprofile/:user_sequence_id'>
                        <Navbar/>
                        {!isSubmittied2 ? (<UpdateProfile submitForm2={submitForm2}/>)
                        : (window.location.href="/user/:user_sequence_id")} 
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
