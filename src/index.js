import React from "react";
import ReactDOM from "react-dom";
import Index from "../src/pages/index";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/index.css";
import "./styles/header.css";

ReactDOM.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
  document.getElementById("root")
);
