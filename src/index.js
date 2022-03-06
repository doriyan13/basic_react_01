import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App"; //importing the js function "App" from App.js file

// The code in App is jsx code that is giving us the ability to write html elements inside js files (aka in functions)
ReactDOM.render(
<BrowserRouter>
<App />
</BrowserRouter>
, document.getElementById("root"));

