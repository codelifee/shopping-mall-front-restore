import {React,useState} from 'react';
import Navbar from './Navbar';
import SignUp from './SignUp';
import UpdateProfile from './UpdateProfile';
import Profile from './Profile';
import Orders from './Orders';
import OrdersData from './OrdersData';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './User.css';
import Login from'../authentication/Login';

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
                        {!isSubmittied ? (<SignUp submitForm={submitForm}/>)
                        : (<Login/>)}
                        {/* signup submit 후 Login 화면에서 Navbar제거하기 */}
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
