import React, { useState } from 'react';
import EventPanel from './eventPanel';

function Dashboard(){

    const events = ['swimming', 'weight lifting', 'cardio']

    return(
        <div className='dashboard'>
            <div className='choose'>
                <h2>Choose your event!</h2>
            </div>
            <div className='event-list'>
                {events.map(item => {
                   return <EventPanel key={Math.random()} event={item} />
                })}
            </div>
        </div>
    )
}

export default Dashboard;