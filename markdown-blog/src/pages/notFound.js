import React from 'react';
import { Link } from 'react-router-dom';
const NotFound = () => {
    return (
                <div className="bg-blue-950 heropattern-topography-yellow-500/30 p-8 text-gray-50 flex flex-col min-h-screen">
                    <div className="flex-1 flex flex-col justify-center items-center">
                        <h1 className="text-4xl md:text-6xl lg:text-6xl text-center font-bold">Error 404</h1>
                        <h2 className="text-2xl md:text-4xl lg:text-4xl text-center">The page you're looking for doesn't exist.</h2>
                        <Link className='border-2 w-fit text-sm md:text-lg lg:text-2xl border-gray-50 m-16 hover:bg-yellow-500/30 hover:shadow-lg p-4 lg:p-4' to='/'>Go Home</Link>
                    </div>
                </div>
    );
};

export default NotFound;