import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Landing from "./features/landing/Landing";
import Login from "./features/login/Login";
import Register from "./features/register/Register";
import Layout from "./features/shared/layout";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Layout>
          <Route exact path="/" component={Landing}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/register" component={Register}></Route>
        </Layout>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
