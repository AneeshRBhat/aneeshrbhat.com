import React from 'react';
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div className='font-serif text-lg flex flex-row p-2 bg-slate-600 text-slate-50 mx-auto h-fit hover:-700'>
            <Link className='flex-auto mx-2 p-2 text-center' to="/">Home</Link>
            <Link className='flex-auto mx-2 p-2 text-center' to="/about">About</Link>
            <Link className='flex-auto mx-2 p-2 text-center' to="/blog">Blog</Link>

            
        </div>
    );
};

export default Navbar;