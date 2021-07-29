import React from 'react';
import { useHistory } from "react-router";
import styled from 'styled-components'
import Location from '../assets/Location.png'
import SignUp from '../assets/SignUp.png'
import Events from '../assets/Events.png'
import CreateEvent from '../assets/CreateEvent.png'
import EventInfo from '../assets/EventInfo.png'
import Submit from '../assets/Submit.png'
import Workout3 from '../assets/workout3.jpg'

export default function Onboarding() {
    const history = useHistory();
    const handleSubmit = () => {
            history.push("/dashboard");
    }
    const Steps = styled.div`
        display:flex;
        justify-content: center;
        img{
            height:40vh;
        }
    `

    return (
        <div class='onBoarding'>
            <div class='congrats'>
                <h1>Congratulations! Your First Class Awaits!</h1>
                <h3>Do the following steps to get your first class going.</h3>
                <p>If you wish to skip straight into your dashboard, use the skip button off to the side.</p>
                <button onClick={handleSubmit} >Skip</button>
            </div>
            <h2>Step One :</h2>
            <Steps>
                <p>Upon signing into your dashboard, you will see a selection of ongoing, and future classes.</p>
                <img src={Location} alt='Find an event to your liking.'/>
            </Steps>
            <h2>Step Two :</h2>
            <Steps>
                <p>Once you find one that catches your eye, click the RSVP button to sign up for that class.</p>
                <img src={SignUp} alt='Location of the RSVP/Sign Up button' />
            </Steps>
            <h2>Step Three :</h2>    
            <Steps>
                <p>Upon signing up for a class, you will be placed into the Instructors class, which you can easily Un-RSVP for by simply clicking the cancel button that replaced the RSVP button.</p>


                <img src={Events}/>
            </Steps>
            <button onClick={handleSubmit} >Go To Dashboard!</button>
            <div class='Instructor'>
                <h1>Instructors Starting Their First Class!</h1>
                <h2>Step One :</h2>   
                <Steps>    
                    <p>Locate the Create Event button.</p>
                    <img src={CreateEvent}/>
                </Steps>
                
                <h2>Step Two :</h2>
                <Steps>
                    <p>Upon clicking the create event button, the event form will open up, allowing you to go through and fill out all the information pertaining to your class.</p>
                    <img src={EventInfo}/>
                </Steps>
                
                <h2>Step Three :</h2>    
                <Steps>
                    <p>Once you finish adding all of your details to the class event, click the Post Event button.</p>
                    <img src={Submit}/>
                </Steps>
                <h2>Congratulations! Your first class will start at the time you chose. Don't forget to stretch, hydrate, and get to know you clients!</h2>
                <img src={Workout3}/>
                <button onClick={handleSubmit} >Go To Dashboard!</button>
            </div>
        </div>
        
    )
}