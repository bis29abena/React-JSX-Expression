import React from "react";
import ReactDOM from "react-dom";

const fname = "Bismark";
const lname = "Osei";
const luckyNumber = 7;

ReactDOM.render(
  <div>
    <h1>Hello {fname + " " + lname}!</h1>
    <p>Your Lucky number is {luckyNumber}</p>
  </div>,
  document.getElementById("root")
);
