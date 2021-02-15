import React, {useEffect, useState} from 'react'
import AddCustomer from './AddCustomer'
import UpdateCustomer from './UpdateCustomer'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './Customer.css'

function Customer() {

    return (
        <Router>
            <div className="customer">
                <Switch>
                    <Route path='/customer/addcustomer'>
                        <AddCustomer />
                    </Route>
                    <Route 
                        path='/customer/updatecustomer/:user_sequence_id'
                        component={UpdateCustomer}
                    />
                </Switch>
            </div>
        </Router>
        
    )
}

export default Customer
