import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import HomePage from "./Home";

const client = new ApolloClient({
  uri: "https://pangaea-interviews.now.sh/api/graphql",
  cache: new InMemoryCache(),
});

const Index = () => {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={HomePage} exact={true} />
        </Switch>
      </BrowserRouter>
    </ApolloProvider>
  );
};

export default Index;
