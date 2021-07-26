import React from 'react';

function EventPanel(props){

    console.log(props)
    return(
        <div className='event-panel'>
            <div>{props.event} </div>
        </div>
    )
}

export default EventPanel