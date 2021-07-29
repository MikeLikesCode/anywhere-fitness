import React from 'react';
import { Link } from 'react-router-dom';

const Home = () =>{

    return(
        <div className='home'>
            <div className='cta'>
                Join our Gym!
            </div>
            <Link to='/login'>Log in</Link>
            <br/>
            <Link to='/signup'>Create Account</Link>
            <h3>Only for testing Dashboard</h3>
            <Link to='/dashboard'>Dashboard</Link>
        </div>
    )
}

export default Home;