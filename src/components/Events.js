import React from 'react';
import { useLoaderData } from 'react-router-dom';
import EventCard from './EventCard';

const Events = () => {
    const events= useLoaderData();
    console.log(events)
    return (
        <div>
            <h1>Our all events here</h1>

            
            
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    events.map(event => <EventCard
                        key={event._id}
                        event={event}
                    ></EventCard>)
                }
            </div>
        
        </div>
    );
};

export default Events;