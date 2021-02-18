import {React,useState} from 'react';
import Navbar from './Navbar';
import SignUp from './SignUp';
import UpdateProfile from './UpdateProfile';
import Profile from './Profile';
import Orders from './Orders';
import OrdersData from './OrdersData';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './User.css';
import SignupSuccess from './SignupSuccess';

function User() {
    const[isSubmittied, setIsSubmitted] = useState(false);

    function submitForm(){
        setIsSubmitted(true);
    }

    return (
        <Router>
            <div className="user">
                <Switch>
                    <Route path='/user/profile/:user_sequence_id'>
                        <Navbar />
                        <Profile />
                    </Route>
                    <Route path='/user/signup'>
                        <Navbar />
                        {!isSubmittied ? (<SignUp submitForm={submitForm}/>)
                        : (<SignupSuccess/>)}
                    </Route>
                    <Route path='/user/updateprofile/:user_sequence_id'>
                        <Navbar/>
                        {!isSubmittied ? (<UpdateProfile submitForm={submitForm}/>)
                        : (<Profile/>)}
                    </Route>
                    <Route path='/user/order/:id'>
                        <Navbar/>
                        <Orders/>
                    </Route>
                    <Route path='/user/orderdata/:id'>
                        <Navbar/>
                        <OrdersData/>
                    </Route>
                </Switch>
            </div>
        </Router>
        
    )
}

export default User
