import React from 'react';
import styled from 'styled-components';

const Event=styled.h2`
border: .8em groove ${props=>props.theme.secondaryColor};
text-align: center;
width:40%;
margin: 0 auto;
margin-top:1.5rem;
background-color: ${props=>props.theme.headerColor};
padding-bottom:1rem;
`

const EventHeader= styled.h2`
background-color: ${props=>props.theme.primaryColor};
color: ${props=>props.theme.white};
padding-top:1rem;
padding-bottom:1rem;
border: .4em double ${props=>props.theme.headerColor};
`


function EventPanel(props){
console.log(props.event)
    return(
        <div className='event-panel'>
            <Event>
                <EventHeader>Event : {props.event.eventName} </EventHeader>
                <h3>Type : {props.event.eventType} </h3>
                <h4>Intensity : {props.event.intensityLevel} </h4>
                <p>{props.event.maxClassSize} spots in the event at {props.event.eventLocation}</p>
                <p>Starts at {props.event.startTime} until {props.event.duration}</p>
                <button>Sign up</button>
            </Event>
        </div>
    )
}

export default EventPanel


