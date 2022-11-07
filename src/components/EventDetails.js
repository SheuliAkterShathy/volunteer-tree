import React from 'react';
import { useLoaderData } from 'react-router-dom';

const EventDetails = () => {
    const {img,title,description} = useLoaderData()

    return (
        <div className="max-w-lg p-4 shadow-md bg-gray-900 text-gray-100 mx-auto">
        <div className="flex justify-between pb-4 border-bottom">
            <div className="flex items-center">
                <a rel="noopener noreferrer" href="#" className="mb-0 capitalize text-gray-100">Photography</a>
            </div>
            <a rel="noopener noreferrer" href="#">See All</a>
        </div>
        <div className="space-y-4">
            <div className="space-y-2">
                <img src={img} alt="" className="block object-cover object-center w-full rounded-md h-72 bg-gray-500" />
                <div className="flex items-center text-xs">
                    <span>6 min ago</span>
                </div>
            </div>
            <div className="space-y-2">
                <a rel="noopener noreferrer" href="#" className="block">
                    <h3 className="text-xl font-semibold text-violet-400">{title}</h3>
                </a>
                <p className="leading-snug ">{description}</p>
            </div>
        </div>
    </div>
    );
};

export default EventDetails;