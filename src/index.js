import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./React-icon.png";

const page = (
  <div>
    <img src={logo} alt="react logo"></img>
    <h1>Fun facts about React</h1>
    <ul>
      <li>Was first released in 2013</li>
      <li>Was originally created by Jordan Walke</li>
      <li>Has well over 100K star on Github</li>
      <li>Is maintained by Facebook</li>
      <li>Powers thousands of enterprise apps, including mobile apps</li>
    </ul>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(page);
