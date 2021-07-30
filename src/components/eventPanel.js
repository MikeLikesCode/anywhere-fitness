import React, { useState} from 'react';
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
    const [rsvp, setRSVP] = useState(false);
    const [spots, setSpots] = useState(props.event.max_size)

    const handleClick=()=>{
        rsvp ? setSpots(spots + 1) : setSpots(spots - 1);
        setRSVP(!rsvp);
    }

    return(
        <div className='event-panel'>
            <Event>
                <EventHeader>Event : {props.event.name} </EventHeader>
                <h3>Type : {props.event.type} </h3>
                <p>{spots} Spots remaining</p>
                <p>Starts at {props.event.start_time} for about {props.event.duration}</p>
                <button onClick={handleClick} > {rsvp ? 'Cancel Reservation' : 'RSVP'} </button>
            </Event>
        </div>
    )
}

export default EventPanel


