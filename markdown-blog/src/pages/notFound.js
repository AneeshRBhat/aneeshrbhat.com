import React from 'react';
import { Link } from 'react-router-dom';
const NotFound = () => {
    return (
                <div className="bg-slate-900 text-slate-50 flex flex-col min-h-screen">
                    <div className="flex-1 flex flex-col justify-center items-center">
                        <h1 className="text-6xl font-bold">404 Not Found</h1>
                        <h2 className="text-3xl">The page you're looking for doesn't exist.</h2>
                        <Link className='border-2 border-slate-50 m-4 hover:bg-slate-50 hover:text-slate-900 hover:shadow-lg p-2' to='/'>Go Home</Link>
                    </div>
                </div>
    );
};

export default NotFound;