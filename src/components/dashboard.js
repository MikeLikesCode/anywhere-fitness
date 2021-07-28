import React, { useState } from 'react';
import EventPanel from './eventPanel';
import EventsForm from './events-form';

function Dashboard(){
    const [isHidden, setIsHidden] =useState(true);

    const events = [
        {
            eventName: 'swimming',
            classSize: 10,
            remainingSeats: 10,
            startTime: "7:00 A.M",
            intensityLevel: "Beginner",
            eventLocation: "Community Pool"
        },
        {
            eventName: 'weight lifting',
            classSize: 5,
            remainingSeats: 5,
            startTime: "11:00 A.M",
            intensityLevel: "intermediate",
            eventLocation: "Vasa Gym"
        },
        {
            eventName: 'Yoga',
            classSize: 35,
            remainingSeats: 35,
            startTime: "5:00 A.M",
            intensityLevel: "Advanced",
            eventLocation: 'Park'
        }
    ]

    function toggleForm(){
		setIsHidden(!isHidden)
		document.querySelector('.event-form').classList.toggle('hidden')
        document.querySelector('.add-cta').classList.toggle('hidden')
        document.querySelector('.create-event').classList.toggle('hidden')
	}

    function cancelForm(){
		setIsHidden(true)
		document.querySelector('.event-form').classList.add('hidden')
        document.querySelector('.add-cta').classList.remove('hidden')
        document.querySelector('.create-event').classList.remove('hidden')
	}

    function instructor(){
        if( localStorage.getItem('role') === 2){
            document.querySelector('.add-event').classList.add('hidden')
        }
    }

    instructor();


    return(
        <div className='dashboard'>

            <div className='add-event'>
                <div className='add-cta'>
                    <h3>Add a new event?</h3>
                </div>
                <button className='create-event' onClick={toggleForm}>Create Event!</button>
                <div className='event-form hidden'>
                    <EventsForm />
                    <button onClick={cancelForm}>Cancel</button>
                </div>
            </div>
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