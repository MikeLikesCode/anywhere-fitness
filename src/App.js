import React from "react";
import { BrowserRouter as Router, Redirect, Route, Link } from "react-router-dom";
// import Login from "./components/Login";
import EventsForm from './components/events-form'
import Dashboard from "./components/dashboard";
// import PrivateRoute from "./components/PrivateRoute";
import { axiosWithAuth } from "./helpers/axiosWithAuth";
import Home from './components/home.js';
// import EventForm from './components/event-form'
import styled from 'styled-components'
import  "./App.css";
import SignIn from "./components/SignIn";

function App() {

  const Header = styled.div`
    display:flex;
    justify-content: space-between;
    align-items:center;
    padding: 1vh 4vw;
    background-color:#1a1f29;
    color:white;
    margin-bottom: 5px;

    h1{
      margin:0;
      font-size: 1.4rem;
      padding: 1vh 0;
    }
  `

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
        <Header>
          <h1>Anywhere Fitness!</h1>
          <div data-testid="logoutButton" className='logout'>
            {localStorage.getItem('token') ? <Link onClick={logout} to='/home'>logout</Link> : <div></div>}
          </div>
        </Header> 


        <Route exact path='/login' component={SignIn} />

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
