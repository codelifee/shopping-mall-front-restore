import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import SellerProducts from "./SellerProducts";
import Order from "./Orders";
import User from "./User";
import AddProduct from "./AddProduct";
import UpdateProduct from "./UpdateProduct";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./Seller.css";

function Seller() {
  return (
    <Router>
      <div className="seller">
        <Switch>
          <Route path="/seller/products">
            <Navbar />
            <SellerProducts />
          </Route>
          <Route path="/seller/addProduct">
            <Navbar />
            <AddProduct />
          </Route>
          <Route path="/seller/updateProduct/:id">
            <Navbar />
            <UpdateProduct />
          </Route>
          <Route path="/seller/order">
            <Navbar />
            <Order />
          </Route>
          <Route path="/seller/user">
            <Navbar />
            <User />
          </Route>
          <Route path="/seller">
            <Navbar />
            <SellerProducts />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Seller;
