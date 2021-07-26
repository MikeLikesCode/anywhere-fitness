import React from "react";
import { BrowserRouter as Router, Redirect, Route, Link } from "react-router-dom";
// import Login from "./components/Login";
import Dashboard from "./components/dashboard";
// import PrivateRoute from "./components/PrivateRoute";
import { axiosWithAuth } from "./helpers/axiosWithAuth";
import Home from './components/home.js';
// import EventForm from './components/event-form'
import  "./App.css";

function App() {

  const logout = () => {
    // axiosWithAuth()
    // .post('/logout')
    // .then(res => {
      localStorage.removeItem('token');
      localStorage.setItem('username');
      localStorage.setItem('role');
      window.location.href = "/login";
      console.log('logged out')
    // })
    // .catch(err => {
    //   console.log(err);
    //   localStorage.removeItem('token');
    //   window.location.href = "/login";
    // })
  };



  return (
    <Router>
      <div className="App">
        <header>
          Anywhere Fitness!
          <div data-testid="logoutButton" className='logout'>
            {localStorage.getItem('token') ? <Link onClick={logout} to='/home'>logout</Link> : <div></div>}
          </div>
        </header> 


        <Route exact path='/login' component={null} />

        <Route exact path='/signUp' component={null} />

        <Route exact path='/dashboard' component={Dashboard} />

        <Route exact path='/instructorDashboard' component={Dashboard} />


        <Route exact path="/home" component={Home} />

        {/* <Route exact path='/testing' component={EventForm} /> */}

        <Route path="/">
          <Redirect to="/home"/>
        </Route>
      </div>
    </Router>
  );
}

export default App;
