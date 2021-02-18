import React from "react";
import ReactDOM from "react-dom";
import HomePage from "../src/pages/index";
import "bootstrap/dist/css/bootstrap.min.css";
import "./fonts/freight-display/font.css";
import "./fonts/ff-bau/font.css";

ReactDOM.render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>,
  document.getElementById("root")
);
