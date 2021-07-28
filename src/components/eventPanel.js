import React from 'react';

function EventPanel(props){

    return(
        <div className='event-panel hidden'>
            <div>
                <h2>Event : {props.event.eventName} </h2>
                <h3>Type : {props.event.eventType} </h3>
                <h4>Intensity : {props.event.intensityLevel} </h4>
                <p>{props.event.maxClassSize} spots in the event at {props.event.eventLocation}</p>
                <p>Starts at {props.event.startTime} for {props.event.duration}</p>
            </div>
        </div>
    )
}

export default EventPanel


