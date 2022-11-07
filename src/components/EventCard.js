import React from 'react';
import { Link } from 'react-router-dom';

const EventCard = ({event}) => {
    const { _id, img, title } = event;
   
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure><img src={img} alt="" /></figure>
        <div className="card-body">
           <Link to={`/events/${_id}`}> <h2 className="card-title bg-pink-400 text-center py-3">{title}</h2></Link>
           
            {/* <div className="card-actions justify-end">
                <Link to={`/checkout/${_id}`}>
                    <button className="btn btn-primary">Checkout</button>
                </Link>
            </div> */}
        </div>
    </div>
    );
};

export default EventCard;