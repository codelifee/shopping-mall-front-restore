import React from 'react'
import Navbar from './Navbar'
import SellerProduct from './SellerProduct'
import Order from './Order'
import User from './User'
import AddProduct from './AddProduct'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './Seller.css'


function Seller() {
    return (
        <Router>
            <div className="seller">
                <Switch>
                    <Route path='/seller/product'>
                        <Navbar />
                        <SellerProduct />
                    </Route>
                    <Route path='/seller/addproduct'>
                        <Navbar />
                        <AddProduct />
                
                    </Route>
                    <Route path='/seller/order'>
                        <Navbar />
                        <Order />
                
                    </Route>
                    <Route path='/seller/user'>
                        <Navbar />
                        <User />
                
                    </Route>
                    <Route path='/seller'>
                        <Navbar />
                        <SellerProduct />
                    </Route>
                </Switch>
            </div>
        </Router>
        
    )
}

export default Seller
