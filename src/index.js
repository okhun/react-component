import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
import reportWebVitals from "./reportWebVitals";
import SelectGenre from "./selectGenre";
// Creating react element using createElement

ReactDOM.render(<SelectGenre></SelectGenre>, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
