import "../styles/App.css";

import Register from "../pages/Register";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import ErrorPage from "../pages/ErrorPage";

import React, { useEffect, useState, useContext, createContext } from "react";

import AppProvider from "../components/AppContext";

import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <AppProvider>
          <Switch>
            <Route exact path="/">
              <Redirect to="/login" />
            </Route>
            <Route path="/dashboard" component={Dashboard}></Route>
            <Route path="/register" component={Register}></Route>
            <Route path="/login" component={Login}></Route>
            <Route component={ErrorPage} />
          </Switch>
        </AppProvider>
      </Router>
    </div>
  );
}

export default App;
