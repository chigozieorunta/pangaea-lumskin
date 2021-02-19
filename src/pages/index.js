import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./home";

const Index = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={HomePage} exact={true} />
      </Switch>
    </BrowserRouter>
  );
};

export default Index;
