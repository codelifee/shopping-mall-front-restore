import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import SellerProducts from './SellerProducts';
import Order from './Order';
import User from './User';
import AddProduct from './AddProduct';
import UpdateProduct from './UpdateProduct';
import AnswerYetCategory from './AnswerYetCategory';
import AnswerYetProducts from './AnswerYetProducts';
import AnswerYetQuestions from './AnswerYetQuestion';
import AnsweredQuestion from './AnswerYetQuestion'
import AnsweredCategory from './AnsweredCategory';
import AnsweredProducts from './AnsweredProducts';
import AnsweredQuestionModal from './AnsweredQuestionModal';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './Seller.css';

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
          <Route path="/seller/answerYetCategory">
            <Navbar />
            <AnswerYetCategory />
          </Route>

          <Route path="/seller/answerYetProducts/:id">
            <Navbar />
            <AnswerYetProducts />
          </Route>

          <Route path="/seller/answerYetQuestions/:id">
            <Navbar />
            <AnswerYetQuestions />
          </Route>

          <Route path="/seller/answeredCategory">
            <Navbar />
            <AnsweredCategory />
          </Route>

          <Route path="/seller/answeredProducts/:id">
            <Navbar />
            <AnsweredProducts />
          </Route>

          <Route path="/seller/answeredQuestions/:id">
            <Navbar /> {/* */}
            <AnsweredQuestion/>
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
