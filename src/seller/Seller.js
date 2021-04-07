import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import SellerProducts from "./SellerProducts";
import Order from "./Order";
import User from "./User";
import AddProduct from "./AddProduct";
import Header3 from "./Header3";
import UpdateProduct from "./UpdateProduct";
import AnswerYetCategory from "./AnswerYetCategory";
import AnswerYetProducts from "./AnswerYetProducts";
import AnswerYetQuestions from "./AnswerYetQuestion";
import AnsweredQuestion from "./AnswerYetQuestion";
import AnsweredCategory from "./AnsweredCategory";
import AnsweredProducts from "./AnsweredProducts";
import AnsweredQuestionModal from "./AnsweredQuestionModal";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./Seller.css";

function Seller() {
  return (
    <Router>
      <div className="seller">
        <Switch>
          <Route path="/seller/products">
            <Header3 />
            <Navbar />
            <SellerProducts />
          </Route>
          <Route path="/seller/addProduct">
            <Header3 />
            <Navbar />
            <AddProduct />
          </Route>
          <Route path="/seller/updateProduct/:id">
            <Header3 />
            <Navbar />
            <UpdateProduct />
          </Route>
          <Route path="/seller/order">
            <Header3 />
            <Navbar />
            <Order />
          </Route>
          <Route path="/seller/user">
            <Header3 />
            <Navbar />
            <User />
          </Route>
          <Route path="/seller/answerYetCategory">
            <Header3 />
            <Navbar />
            <AnswerYetCategory />
          </Route>

          <Route path="/seller/answerYetProducts/:id">
            <Header3 />
            <Navbar />
            <AnswerYetProducts />
          </Route>

          <Route path="/seller/answerYetQuestions/:id">
            <Header3 />
            <Navbar />
            <AnswerYetQuestions />
          </Route>

          <Route path="/seller/answeredCategory">
            <Header3 />
            <Navbar />
            <AnsweredCategory />
          </Route>

          <Route path="/seller/answeredProducts/:id">
            <Header3 />
            <Navbar />
            <AnsweredProducts />
          </Route>

          <Route path="/seller/answeredQuestions/:id">
            <Header3 />
            <Navbar /> {/* */}
            <AnsweredQuestion />
          </Route>

          <Route path="/seller">
            <Header3 />
            <Navbar />
            <SellerProducts />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Seller;
