import React from "react";
import "./LandingPage.css";

import LandingHeader from "./LandingHeader";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function LandingPage() {
  return (
    //<Router>
      <div className="App">
        <LandingHeader />
        <div className="container1">
          <div className="wrapper">
            <div className="home">
      
            </div>
          </div>
        </div>
      </div>
    //</Router>
  );
}


export default LandingPage;