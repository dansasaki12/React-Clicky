import React from "react";
import "./Jumbotron.css";

// Jumbotron component
const Jumbotron = props => (
  <div className="jumbotron jumbotron-fluid text-white text-center">
    <h1 className="display-4 font-weight-bold">Clicky Car Game!</h1>
    <p className="lead font-weight-bold">Click on a Car to earn points, but don't click the same Car twice!</p>
  </div>
);
export default Jumbotron;