import React, {useState} from "react";
import { BrowserRouter as Router, Redirect, Route, Link } from "react-router-dom";
import Dashboard from "./components/dashboard";
import PrivateRoute from "./helpers/PrivateRoute";
import Home from './components/home.js';
import styled from 'styled-components'
import  "./App.css";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Onboarding from './components/Onboarding.js'
import LoggedInContext from "./contexts/LoggedInContext";


function App() {
  const [loggedIn, setLoggedIn] = useState(false)

  const LogOut = styled.div`
    text-decoration: none;
    background-color: ${props=>props.theme.secondaryColor};
    padding-left:1rem;
    padding-right:1rem;
    padding-top:.25rem;
    padding-bottom:.25rem;
    color: ${props=>props.theme.white};
    border-radius: 20rem;
  `

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

  const LoggedLink = styled.div`
  text-decoration: none;
  background-color: ${props=>props.theme.secondaryColor};
  padding-left:1rem;
  padding-right:1rem;
  padding-top:.25rem;
  padding-bottom:.25rem;
  color: ${props=>props.theme.white};
  border-radius: 20rem;
  `

  const logout = () => {
      localStorage.removeItem('token');
      setLoggedIn(false)
      window.location.href = "/login";
    
  };


  return (
    <Router>
      <div className="App">
        <LoggedInContext.Provider value= {{setLoggedIn}}>
          <Header>
            <h1>Anywhere Fitness!</h1>
              {loggedIn ? <Link onClick={logout} to='/home'><LogOut>Log Out</LogOut></Link> : 
                <div className='cta'>
                  <Link to='/login'><LoggedLink>Log in</LoggedLink></Link>
                  <Link to='/signup'><LoggedLink>Create Account</LoggedLink></Link>
                </div>
              }
          </Header> 


          <Route exact path='/login' component={SignIn} />

          <Route exact path='/signUp' component={SignUp} />

          <PrivateRoute exact path='/dashboard' component={Dashboard} />

          <Route exact path="/home" component={Home} />

          <Route exact path='/tutorial' component={Onboarding} />

          <Route path="/">
            <Redirect to="/home"/>
          </Route>
        </LoggedInContext.Provider>
      </div>
    </Router>
  );
}

export default App;
