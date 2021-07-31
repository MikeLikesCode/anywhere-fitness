import React from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import Header from './components/Header'
import Dashboard from "./components/dashboard";
import PrivateRoute from "./helpers/PrivateRoute";
import Home from './components/home.js';
import  "./App.css";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Onboarding from './components/Onboarding.js'


function App() {

  return (
    <Router>
      <div className="App">
      <Header/>
          <Switch>
          <Route exact path='/login' component={SignIn} />

          <Route exact path='/signUp' component={SignUp} />

          <PrivateRoute exact path='/dashboard' component={Dashboard} />

          <Route exact path="/home" component={Home} />

          <Route exact path='/tutorial' component={Onboarding} />

          <Route path="/">
            <Redirect to="/home"/>
          </Route>

          </Switch>
      </div>
    </Router>
  );
}

export default App;
