import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import AddCustomer from "./AddCustomer";
import Orders from "./Orders";
import OrderDetails from "./OrderDetails";
import UpdateCustomer from "./UpdateCustomer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./Customer.css";

function Customer() {
  return (
    <Router>
      <div className="customer">
        <Switch>
          <Route path="/customer/addcustomer">
            <Navbar />
            <AddCustomer />
          </Route>

          <Route path="/customer/orders/:user_sequence_id">
            <Navbar />
            <Orders />
          </Route>
          <Route path="/customer/orderDetails/:user_sequence_id">
            <Navbar />
            <OrderDetails/>
          </Route>

          <Route path="/customer/updatecustomer/:user_sequence_id">
            <Navbar />
            <UpdateCustomer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Customer;
