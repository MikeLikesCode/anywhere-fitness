import React from 'react';

function EventPanel(props){

    return(
        <div className='event-panel hidden'>
            <div>{props.event} </div>
        </div>
    )
}

export default EventPanel