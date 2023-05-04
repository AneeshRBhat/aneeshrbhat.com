import React from 'react';
import { Link } from 'react-router-dom';
const NotFound = () => {
    return (
                <div className="bg-gray-900 p-8 text-gray-50 flex flex-col min-h-screen">
                    <div className="flex-1 flex flex-col justify-center items-center">
                        <h1 className="text-4xl md:text-6xl lg:text-8xl text-center font-bold">404 Not Found</h1>
                        <h2 className="text-2xl md:text-4xl lg:text-6xl text-center">The page you're looking for doesn't exist.</h2>
                        <Link className='border-2 w-fit text-sm md:text-lg lg:text-2xl border-gray-50 m-16 hover:bg-gray-50 hover:text-gray-900 hover:shadow-lg p-4 lg:p-4' to='/'>Go Home</Link>
                    </div>
                </div>
    );
};

export default NotFound;